# Generated by Django 4.0.4 on 2022-08-23 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registered_users', '0003_registered_user_password_registered_user_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registered_user',
            name='email_address',
            field=models.EmailField(max_length=255),
        ),
    ]
