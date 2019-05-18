from django.db import models


# Create your models here.
class District(models.Model):
    adi = models.CharField(max_length=255)
    status = models.BooleanField(default=True)
