from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
import urllib.request
import json

# Create your views here.

@api_view(['GET'])
def weather(request,query):
    if request.method == 'GET':
        # city=request.query_params.get('city')
        city=query
        print(city)
        res = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a4016369286dbf7520e1a93d734dbaee').read()
        print(res)
        json_data = json.loads(res)
        data = {
		'Country_code': str(json_data['sys']['country']),
		'temperature': str(json_data['main']['temp']),
		'Pressure': str(json_data['main']['pressure']),
		'Humidity': str(json_data['main']['humidity']),
		}
        print(data)
	
        serializer=data
        return Response(serializer)
