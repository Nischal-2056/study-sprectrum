from rest_framework import serializers
from .models import Contact, TestPrepration, StudyAbroad


class TestPreprationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestPrepration
        fields = "__all__"


class StudyAbroadSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyAbroad
        fields = "__all__"
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"
