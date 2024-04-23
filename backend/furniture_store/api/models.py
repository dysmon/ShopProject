from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=255)

    # user = models.ForeignKey(
    #     User,
    #     on_delete=models.CASCADE,
    #     related_name='categories',
    #     null=True, blank=True
    # )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "categories"


class Furniture(models.Model):
    front_image = models.TextField()
    image = models.TextField()
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    material = models.TextField()
    description = models.TextField()
    manufacturer = models.CharField(max_length=255)
    width = models.IntegerField()
    height = models.IntegerField()

    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "furniture"


class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"

    class Meta:
        verbose_name_plural = "Contact Messages"


class NewsletterSubscription(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name_plural = "Newsletter Subscriptions"
