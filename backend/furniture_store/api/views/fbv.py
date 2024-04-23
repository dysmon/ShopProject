from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import ContactMessage, NewsletterSubscription
from api.serializers import MessageSerializer, NewsletterSerializer


@api_view(["GET", "POST"])
def message_list(request):
    if request.method == "GET":
        messages = ContactMessage.objects.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "POST"])
def newsletter_list(request):
    if request.method == "GET":
        newsletters = NewsletterSubscription.objects.all()
        serializer = NewsletterSerializer(newsletters, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = NewsletterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)
