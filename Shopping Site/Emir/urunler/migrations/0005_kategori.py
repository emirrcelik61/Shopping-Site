# Generated by Django 4.1.2 on 2022-12-13 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('urunler', '0004_alter_urun_resim'),
    ]

    operations = [
        migrations.CreateModel(
            name='kategori',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isim', models.CharField(max_length=100)),
            ],
        ),
    ]
