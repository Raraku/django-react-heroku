# Generated by Django 2.2.6 on 2019-10-27 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_article_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='date_created',
            field=models.DateField(auto_now=True),
        ),
    ]
