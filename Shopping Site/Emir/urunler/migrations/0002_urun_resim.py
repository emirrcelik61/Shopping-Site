# Generated by Django 4.1.2 on 2022-12-09 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('urunler', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='urun',
            name='resim',
            field=models.FileField(null=True, upload_to='urunler/'),
        ),
    ]
