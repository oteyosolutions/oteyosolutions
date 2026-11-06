import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import Services from './pages/Services';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import Store from './pages/Store';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Marketplace from './pages/Marketplace';
import MarketplaceProductDetails from './pages/MarketplaceProductDetails';
import ToolsHub from './pages/ToolsHub';
import InvoiceGenerator from './pages/InvoiceGenerator';
import ProfitCalculator from './pages/ProfitCalculator';
import VatCalculator from './pages/VatCalculator';
import LoanCalculator from './pages/LoanCalculator';
import QrGenerator from './pages/QrGenerator';
import AiBioGenerator from './pages/AiBioGenerator';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetailsPage />} />
                <Route path="/store" element={<Store />} />
                <Route path="/store/:slug" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/marketplace/:slug" element={<MarketplaceProductDetails />} />
                <Route path="/tools" element={<ToolsHub />} />
                <Route path="/tools/invoice-generator" element={<InvoiceGenerator />} />
                <Route path="/tools/profit-calculator" element={<ProfitCalculator />} />
                <Route path="/tools/vat-calculator" element={<VatCalculator />} />
                <Route path="/tools/loan-calculator" element={<LoanCalculator />} />
                <Route path="/tools/qr-generator" element={<QrGenerator />} />
                <Route path="/tools/ai-bio-generator" element={<AiBioGenerator />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;