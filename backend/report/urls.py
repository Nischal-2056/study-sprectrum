from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import views

app_name = "report"
urlpatterns = [
    path("test-prepration/", csrf_exempt(views.TestPreprationView.as_view())),
    path("study-abroad/", csrf_exempt(views.StudyAbroadView.as_view())),
    path("contact/", csrf_exempt(views.ContactView.as_view())),
]
