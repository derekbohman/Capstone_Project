from django.db import models
from authentication.models import User

class Registered_User(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField()
    last_name = models.CharField()
    date_of_birth = models.DateField()
    address = models.CharField()
    email_address = models.EmailField()
