# Generated by Django 4.0.4 on 2022-08-23 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='is_student',
        ),
        migrations.AddField(
            model_name='user',
            name='appointment_date',
            field=models.CharField(default='No appointment scheduled', max_length=255),
        ),
    ]
