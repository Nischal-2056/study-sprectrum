from rest_framework import serializers
from .models import Carousel, Testimonial, SuccessStory, Banner


class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = ["id", "title", "description", "image", "order"]


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ["id", "title", "description", "image", "rate", "order"]


class SuccessStorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SuccessStory
        fields = ["id", "name", "country", "image", "visa_type", "visa_status", "order"]


class BannerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Banner
        fields = ["id", "title", "description", "image"]
