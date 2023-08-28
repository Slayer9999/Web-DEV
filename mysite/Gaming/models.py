from django.db import models
from django.utils import timezone

class NewC(models.Model):
    CatName=models.CharField(max_length=100)
     # Import timezone module

   


class Game(models.Model):
    GName=models.CharField(max_length=100)
    GCat = models.ForeignKey(NewC,on_delete=models.CASCADE)
    GPrice=models.IntegerField()
    GDesc=models.CharField(max_length=250)
    GPic = models.ImageField(upload_to='images')
    GDate = models.DateTimeField(auto_now_add=True)
    ShoppingC=models.IntegerField(default=0)

   
