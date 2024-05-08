from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from .serializers import (
    CarouselSerializer,
    TestimonialSerializer,
    SuccessStorySerializer,
    BannerSerializer,
)
from rest_framework.response import Response
from rest_framework import status
from .models import Carousel, Testimonial, SuccessStory, Banner


class CarouselListView(ListAPIView):
    serializer_class = CarouselSerializer
    queryset = Carousel.objects.all()

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class TestimonialListView(ListAPIView):
    serializer_class = TestimonialSerializer
    queryset = Testimonial.objects.all()

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class SuccessStoryListView(ListAPIView):

    queryset = SuccessStory.objects.all()
    serializer_class = SuccessStorySerializer

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class BannerView(RetrieveAPIView):
    serializer_class = BannerSerializer

    def retrieve(self, request, *args, **kwargs):
        banner = Banner.objects.all()
        if banner.exists():
            instance = banner.first()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        else:
            return Response(None, status=status.HTTP_200_OK)
