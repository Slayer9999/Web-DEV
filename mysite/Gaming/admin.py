from django.contrib import admin
from .models import Game
from .models import NewC
from .models import Big 

class GameAdmin(admin.ModelAdmin):
    list_display = ('GName', 'GCat', 'GPrice','GDesc','GPic','GDate','ShoppingC')
admin.site.register(Game, GameAdmin)
class CategoryAdmin(admin.ModelAdmin):
    list_display=('CatName',)
admin.site.register(NewC,CategoryAdmin)
class BigAdmin(admin.ModelAdmin):
    list_display=('Total',)
admin.site.register(Big,BigAdmin)


# Register your models here.
