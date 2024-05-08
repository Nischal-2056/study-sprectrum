from django.contrib import admin

from .models import TestPrepration, StudyAbroad, Contact
from django.db import models
from django_json_widget.widgets import JSONEditorWidget


class TestPreprationAdmin(admin.ModelAdmin):
    list_display = [
        "full_name",
        "desired_country",
        "address",
        "desired_course",
        "faculty",
    ]

    search_fields = [
        "full_name",
        "desired_country",
        "address",
        "desired_course",
        "faculty",
    ]


admin.site.register(TestPrepration, TestPreprationAdmin)


class StudyAbroadAdmin(admin.ModelAdmin):
    list_display = [
        "full_name",
        "desired_country",
        "address",
        "desired_course",
        "faculty",
    ]

    search_fields = [
        "full_name",
        "desired_country",
        "address",
        "desired_course",
        "faculty",
    ]

    formfield_overrides = {
        models.JSONField: {'widget': JSONEditorWidget},
    }


admin.site.register(StudyAbroad, StudyAbroadAdmin)


class ContactAdmin(admin.ModelAdmin):
    list_display = [
        "first_name",
        "last_name",
        "email",
        "message",
    ]

    search_fields = [
        "first_name",
        "last_name",
        "email",
        "message",
    ]


admin.site.register(Contact, ContactAdmin)
