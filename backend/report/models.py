from django.db import models
from backend.main.models import TimeStampMixin
from backend.report.validators import LanguageProfValidator


class FormMixin(TimeStampMixin):
    full_name = models.CharField(max_length=200)
    address = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=100)
    email = models.EmailField(null=True, blank=True)
    passed_year = models.CharField(max_length=50)
    gpa_percentage = models.CharField(max_length=50)
    faculty = models.CharField(max_length=100)
    desired_country = models.CharField(max_length=100)
    desired_course = models.CharField(max_length=200)


class TestPrepration(FormMixin):
    class Meta:
        db_table = "test_prepration"
        verbose_name = "Test Prepration Request"
        verbose_name_plural = "Test Prepration Requests"
        ordering = ["created"]

    def __str__(self):
        return f"{self.full_name}->{self.desired_course}"


class StudyAbroad(FormMixin):
    language_profiency = models.JSONField(
        blank=True, null=True, validators=[LanguageProfValidator]
    )

    class Meta:
        db_table = "study_abroad"
        verbose_name = "Study Abroad Request"
        verbose_name_plural = "Study Abroad Requests"
        ordering = ["created"]

    def __str__(self):
        return f"{self.full_name}->{self.desired_course}"


class Contact(TimeStampMixin):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    class Meta:
        db_table = "contact_us"
        verbose_name = "Contact us"
        verbose_name_plural = "Contact us"
        ordering = ["created"]

    def __str__(self):
        return f"{self.first_name}->{self.last_name}"
