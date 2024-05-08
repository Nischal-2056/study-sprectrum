from django.urls import path
from . import views

app_name = "main"
urlpatterns = [
    path("carousel/", views.CarouselListView.as_view()),
    path("testimonial/", views.TestimonialListView.as_view()),
    path("success-story/", views.SuccessStoryListView.as_view()),
    path("banner/", views.BannerView.as_view()),
]
