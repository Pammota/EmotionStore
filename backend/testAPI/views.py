from django.shortcuts import render
from django.http import JsonResponse

def testAPI(request):
    number = request.GET.get("number", "")

    return JsonResponse({"binary": str(bin(int(number)))[2:]})
