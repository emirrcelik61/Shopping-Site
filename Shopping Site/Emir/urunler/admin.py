from django.contrib import admin
from .models import *

class UrunSlug(admin.ModelAdmin):
    readonly_fields = ('slug','slug')

# Register your models here.
admin.site.register(urun, UrunSlug)
admin.site.register(kategori)
admin.site.register(Altkategori)