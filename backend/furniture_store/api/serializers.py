from rest_framework import serializers
from .models import Category, Furniture, ContactMessage, NewsletterSubscription


class CategorySerialize(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class FurnitureSerialize(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = ['id', 'front_image', 'image', 'name', 'price', 'material', 'description', 'manufacturer', 'width',
                  'height',
                  'category']


class MessageSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    email = serializers.CharField()
    subject = serializers.CharField()
    message = serializers.CharField()

    def create(self, validated_data):
        instance = ContactMessage(**validated_data)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.email = validated_data.get("email", instance.email)
        instance.subject = validated_data.get("subject", instance.subject)
        instance.message = validated_data.get("message", instance.message)
        instance.save()
        return instance


class NewsletterSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    email = serializers.CharField()
    subscribed_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)

    def create(self, validated_data):
        instance = NewsletterSubscription(**validated_data)
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.email = validated_data.get("email", instance.email)
        instance.save()
        return instance
