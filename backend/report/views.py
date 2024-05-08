from rest_framework.generics import ListCreateAPIView
from .models import TestPrepration, StudyAbroad, Contact
from .serializers import (
    TestPreprationSerializer,
    StudyAbroadSerializer,
    ContactSerializer,
)


class TestPreprationView(ListCreateAPIView):
    queryset = TestPrepration.objects.all()
    serializer_class = TestPreprationSerializer
    http_method_names = ["post"]

    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class StudyAbroadView(ListCreateAPIView):
    queryset = StudyAbroad.objects.all()
    serializer_class = StudyAbroadSerializer
    http_method_names = ["post"]

    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class ContactView(ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    http_method_names = ["post"]

    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
