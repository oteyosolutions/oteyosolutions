import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toolsData as initialTools } from '../data/toolsData';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);
export const useCart = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // --- CART ---
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('oteyo_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem('oteyo_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (product.availability !== "Available" && product.availability !== undefined) {
      alert("This product is currently unavailable.");
      return;
    }
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // --- TOOLS (Still LocalStorage) ---
  const [toolsConfig, setToolsConfig] = useState(() => {
    const saved = localStorage.getItem('oteyo_tools');
    if (saved) return JSON.parse(saved);
    return initialTools.map(tool => ({ ...tool, isActive: true }));
  });
  useEffect(() => {
    localStorage.setItem('oteyo_tools', JSON.stringify(toolsConfig));
  }, [toolsConfig]);

  const toggleToolStatus = (id) => {
    setToolsConfig(prev => prev.map(tool => tool.id === id ? { ...tool, isActive: !tool.isActive } : tool));
  };
  const updateToolRoute = (id, newRoute) => {
    setToolsConfig(prev => prev.map(tool => tool.id === id ? { ...tool, route: newRoute } : tool));
  };

  // --- PRODUCTS (Now Fully Connected to Django API) ---
  const [productsConfig, setProductsConfig] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products from Django
  const fetchProducts = () => {
    setIsLoading(true);
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => {
        const formatted = response.data.map(p => ({
          ...p,
          price: parseFloat(p.price),
          availability: p.is_active ? "Available" : "Out of Stock",
          isActive: p.is_active,
          isFeatured: p.id % 2 === 0, 
          shortDescription: p.short_description || "",
        }));
        setProductsConfig(formatted);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("API Error:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => { fetchProducts(); }, []);

  // Admin: Add new product to Django
  const addProduct = (newProduct) => {
    // Format data to match Django Model fields
    const payload = {
      name: newProduct.name,
      category: newProduct.category,
      price: newProduct.price,
      short_description: newProduct.shortDescription,
      currency: "KSh",
      is_active: true
    };

    axios.post('http://127.0.0.1:8000/api/products/', payload)
      .then(() => {
        alert("Product saved to database!");
        fetchProducts(); // Refresh the list
      })
      .catch(error => {
        console.error(error);
        alert("Failed to save product. Check console.");
      });
  };

  // Admin: Delete from Django
  const deleteProduct = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/products/${id}/`)
      .then(() => {
        alert("Product deleted from database!");
        fetchProducts();
      })
      .catch(error => console.error(error));
  };

  // Admin: Toggle visibility (Update Django)
  const toggleProductStatus = (id) => {
    const productToToggle = productsConfig.find(p => p.id === id);
    if (!productToToggle) return;

    axios.patch(`http://127.0.0.1:8000/api/products/${id}/`, {
      is_active: !productToToggle.isActive
    })
      .then(() => fetchProducts())
      .catch(error => console.error(error));
  };

  return (
    <AppContext.Provider value={{ 
      cart, addToCart, removeFromCart, clearCart, cartTotal, cartCount,
      toolsConfig, toggleToolStatus, updateToolRoute,
      productsConfig, isLoading, addProduct, deleteProduct, toggleProductStatus
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const CartProvider = AppProvider;