# Generated by Django 4.1.2 on 2022-12-15 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Gonder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isim', models.CharField(max_length=100)),
                ('adres', models.CharField(max_length=100)),
                ('sehir', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('aciklama', models.CharField(max_length=100)),
            ],
        ),
    ]
