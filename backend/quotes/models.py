from statistics import mode
from django.db import models

class Quote(models.Model):
    quote = models.CharField(max_length=256)
    author = models.CharField(max_length=50)

    def __str__(self):
        return self.author
