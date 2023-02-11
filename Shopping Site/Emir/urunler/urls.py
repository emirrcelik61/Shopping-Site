from django.contrib import admin
from django.urls import path
from urunler.views import *
from user.views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', index, name='index'),
    path('sepet/', sepet),
    path('son/<str:urunId>/', detail,name='uruns'),
    path('olustur/', olustur,name="olustur"),
    # path('urun/<int:urunId>/', detail, name='urun'),
    # path('search/', search, name='search'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)