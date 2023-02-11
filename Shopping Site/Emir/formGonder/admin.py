from django.contrib import admin
from .models import Gonder

class GonderBaslik(admin.ModelAdmin):
    list_display = ('email','isim','sehir')

# Register your models here.

admin.site.register(Gonder, GonderBaslik)