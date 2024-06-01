from django.contrib import admin
from django.urls import path, include, re_path
from django.shortcuts import render
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


def IndexView(request):
    return render(request, "index.html")


schema_view = get_schema_view(
    openapi.Info(
        title="USA STUDY SPECTRUM API",
        default_version="v1",
        description="USA STUDY SPECTRUM  API docs",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("dashboard/", admin.site.urls),
    path(
        "api-docs/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("api/", include("backend.routes")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += (re_path(r"^.*$", IndexView),)
