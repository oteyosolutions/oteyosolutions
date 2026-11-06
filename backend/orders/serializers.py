from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Order, OrderItem
from products.models import Product


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'product_name', 'price', 'quantity']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'full_name', 'email', 'phone_number', 'total_amount', 'status', 'created_at', 'items']


class CreateOrderSerializer(serializers.Serializer):
    """
    Custom serializer to handle the complex order creation logic
    coming from the React Cart.
    """
    user = serializers.IntegerField()
    full_name = serializers.CharField()
    email = serializers.EmailField()
    phone_number = serializers.CharField()
    cart_items = serializers.ListField()

    def create(self, validated_data):
        cart_items = validated_data.pop('cart_items')
        user_id = validated_data.pop('user')
        user = User.objects.get(id=user_id)

        # Calculate total on backend for security
        total = 0
        for item in cart_items:
            total += float(item['price']) * int(item['quantity'])

        # Create the Order
        order = Order.objects.create(
            user=user,
            full_name=validated_data['full_name'],
            email=validated_data['email'],
            phone_number=validated_data['phone_number'],
            total_amount=total
        )

        # Create the Order Items
        for item in cart_items:
            product_id = item['id']
            try:
                product = Product.objects.get(id=product_id)
            except Product.DoesNotExist:
                product = None

            OrderItem.objects.create(
                order=order,
                product=product,
                product_name=item['name'],
                price=item['price'],
                quantity=item['quantity']
            )

        return order