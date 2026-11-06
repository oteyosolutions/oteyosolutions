from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .models import Product
from .serializers import ProductSerializer

class ProductListCreateAPIView(generics.ListCreateAPIView):
    """
    GET: List all active products (for the frontend store)
    POST: Create a new product (for the admin dashboard)
    """
    queryset = Product.objects.all().order_by('-created_at')
    serializer_class = ProductSerializer

class ProductDetailAPIView(APIView):
    """
    GET: Retrieve a single product by ID
    PUT/PATCH: Update a product (e.g., toggle is_active)
    DELETE: Delete a product
    """
    def get_object(self, pk):
        return get_object_or_404(Product, pk=pk)

    def get(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        product = self.get_object(pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)