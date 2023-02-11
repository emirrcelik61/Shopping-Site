from django.contrib import admin
from django.urls import path
from urunler.views import *
from user.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('giris2/' ,userLogin , name="login"),
    path('giris/' ,userRegister , name="register"),
    path('logout/' ,userLogout , name="logout")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)