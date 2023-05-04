from django.db import models

# Create your models here.
class WeatherModel(models.Model):
    City=models.CharField(max_length=255)