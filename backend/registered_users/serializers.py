from rest_framework import serializers
from .models import Registered_User


class RegisteredUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registered_User
        fields = ['id', 'username', 'password', 'first_name', 'last_name', 'email_address']
        depth = 1
