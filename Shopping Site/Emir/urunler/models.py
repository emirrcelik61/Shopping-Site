from django.db import models
from django.utils.text import slugify

# Create your models here.
class kategori(models.Model):
    isim = models.CharField(max_length=100)
    def __str__(self):
        return self.isim
class Altkategori(models.Model):
    isim = models.CharField(max_length=100)
    def __str__(self):
        return self.isim

class urun(models.Model):
    kategori = models.ForeignKey(kategori, on_delete=models.CASCADE,null=True)
    sub_category = models.ManyToManyField(Altkategori)
    isim = models.CharField(max_length=50)
    aciklama = models.TextField(max_length=500)
    fiyat = models.IntegerField()
    resim = models.FileField(upload_to='urunler/',null=True)
    slug = models.SlugField(null=True,blank=True, editable=False)
    def __str__(self):
        return self.isim
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.aciklama)
        super().save(*args, **kwargs)
    
