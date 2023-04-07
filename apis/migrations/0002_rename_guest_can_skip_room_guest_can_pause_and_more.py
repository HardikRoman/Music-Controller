# Generated by Django 4.1.7 on 2023-04-04 06:58

import apis.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='room',
            old_name='guest_can_skip',
            new_name='guest_can_pause',
        ),
        migrations.AlterField(
            model_name='room',
            name='code',
            field=models.CharField(default=apis.models.generate_unique_code, max_length=8, unique=True),
        ),
    ]