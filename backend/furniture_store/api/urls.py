from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import *

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('categories/', CategoryListApiView.as_view()),
    path('categories/<int:pk>', CategoryDetailApiView.as_view()),
    path('furniture/', FurnitureListApiView.as_view()),
    path('furniture/<int:pk>', FurnitureDetailApiView.as_view()),
    path('messages/', message_list),
    path('newsletter/', newsletter_list)
]
