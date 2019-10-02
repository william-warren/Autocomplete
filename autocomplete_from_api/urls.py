from django.urls import path
from .views import home, api_students


urlpatterns = [path("", home), path("api/students", api_students)]
