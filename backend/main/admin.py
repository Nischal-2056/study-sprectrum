from django.contrib import admin
from .models import Carousel, Testimonial, SuccessStory, Banner
from django.contrib.auth.models import Group

admin.site.unregister(Group)


class CarouselAdmin(admin.ModelAdmin):
    list_display = ["title", "description", "order"]

    search_fields = ["title", "description", "order"]


admin.site.register(Carousel, CarouselAdmin)


class TestimonialAdmin(admin.ModelAdmin):
    list_display = ["title", "rate", "description", "order"]

    search_fields = ["title", "rate", "description", "order"]


admin.site.register(Testimonial, TestimonialAdmin)


class SuccessStoryAdmin(admin.ModelAdmin):
    list_display = ["name", "country", "visa_type", "visa_status", "order"]

    search_fields = ["name", "country", "visa_type", "visa_status", "order"]


admin.site.register(SuccessStory, SuccessStoryAdmin)

MAX_OBJECTS = 1


class BannerAdmin(admin.ModelAdmin):
    list_display = ["title", "description"]

    search_fields = ["title", "description"]

    def has_add_permission(self, request):
        if self.model.objects.count() >= MAX_OBJECTS:
            return False
        return super().has_add_permission(request)


admin.site.register(Banner, BannerAdmin)
