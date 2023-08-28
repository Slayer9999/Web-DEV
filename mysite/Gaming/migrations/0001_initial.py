# Generated by Django 4.1.7 on 2023-08-28 14:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NewC',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CatName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('GName', models.CharField(max_length=100)),
                ('GPrice', models.IntegerField()),
                ('GDesc', models.CharField(max_length=250)),
                ('GPic', models.ImageField(upload_to='images')),
                ('GDate', models.DateTimeField(auto_now_add=True)),
                ('ShoppingC', models.IntegerField()),
                ('GCat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Gaming.newc')),
            ],
        ),
    ]
