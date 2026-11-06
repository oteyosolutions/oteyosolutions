from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('Software', 'Software'),
        ('Website Template', 'Website Template'),
        ('eBook', 'eBook'),
        ('Course', 'Course'),
        ('AI Model', 'AI Model'),
        ('Digital Download', 'Digital Download'),
    ]

    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Software')
    short_description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=10, default='KSh')
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name