# Generated by Django 4.1.2 on 2022-12-09 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('urunler', '0003_alter_urun_resim'),
    ]

    operations = [
        migrations.AlterField(
            model_name='urun',
            name='resim',
            field=models.FileField(null=True, upload_to='urunler/'),
        ),
    ]
