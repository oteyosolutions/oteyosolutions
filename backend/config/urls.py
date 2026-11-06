from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from products.views import ProductListCreateAPIView, ProductDetailAPIView
from orders.views import OrderCreateAPIView, OrderListAPIView
from orders.auth_views import RegisterAPIView, UserProfileAPIView # <-- We will create these

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Auth APIs
    path('api/register/', RegisterAPIView.as_view(), name='register'),
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/profile/', UserProfileAPIView.as_view(), name='profile'),

    # Product APIs
    path('api/products/', ProductListCreateAPIView.as_view(), name='product-list-create'),
    path('api/products/<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail'),
    
    # Order APIs
    path('api/orders/', OrderCreateAPIView.as_view(), name='order-create'),
    path('api/admin/orders/', OrderListAPIView.as_view(), name='admin-order-list'),
]