from django.db import models

# Create your models here.

class Gonder(models.Model):
    isim = models.CharField(max_length=100)
    adres = models.CharField(max_length=100)
    sehir = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    aciklama = models.CharField(max_length=100)

    def __str__(self):
        return self.email

