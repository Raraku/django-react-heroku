from django.db import models
from django.contrib.auth.models import User
import datetime

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=120, blank=True, null=True)
    content = models.TextField()
    description = models.TextField(blank=True)
    date_created = models.DateField(auto_now=True)

    def __str__(self):
        return self.title


class Articletime(models.Model):
    mytime = models.DateField()

    def save(self, *args, **kwargs):
        a = datetime.datetime.fromtimestamp(1440455313.0)
        super(Articletime, self).save(*args, **kwargs)
