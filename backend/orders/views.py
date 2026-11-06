from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .models import Order
from .serializers import OrderSerializer, CreateOrderSerializer

class OrderCreateAPIView(APIView):
    """
    POST: Receives cart data from React, creates an Order and OrderItems in the database
    Requires the user to be logged in.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Inject the authenticated user into the data sent to the serializer
        data = request.data.copy()
        data['user'] = request.user.id

        serializer = CreateOrderSerializer(data=data)
        if serializer.is_valid():
            order = serializer.save()
            return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OrderListAPIView(APIView):
    """
    GET: Returns all orders (for the Admin Dashboard)
    """
    def get(self, request):
        orders = Order.objects.all().order_by('-created_at')
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)