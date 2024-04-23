from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from api.models import Category, Furniture
from api.serializers import CategorySerialize, FurnitureSerialize


class FurnitureListApiView(generics.ListCreateAPIView):
    queryset = Furniture.objects.all()
    serializer_class = FurnitureSerialize
    # permission_classes = IsAuthenticated
    #
    # def get_queryset(self):
    #     return Category.objects.filter(user=self.request.user)
    #
    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)


class FurnitureDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Furniture.objects.all()
    serializer_class = FurnitureSerialize


class CategoryListApiView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerialize


class CategoryDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerialize
