from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'user_name', 'first_name', 'last_name', 'date_of_birth', 'address', 'email_address']
        depth = 1
