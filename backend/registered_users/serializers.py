from rest_framework import serializers
from .models import Registered_User


class RegisteredUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registered_User
        fields = ['id', 'username', 'first_name', 'last_name', 'date_of_birth', 'address', 'email_address']
        depth = 1
