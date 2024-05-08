from django.urls import path, include

app_name = "api"
urlpatterns = [
    path("", include("backend.main.urls")),
    path("contact/", include("backend.report.urls")),
]
