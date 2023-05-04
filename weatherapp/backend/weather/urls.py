from django.urls import path
from . import views
urlpatterns =[
    path('weather/<str:query>/',views.weather,name='weather')
]