from django.contrib import admin
from .models import Game
from .models import NewC

class GameAdmin(admin.ModelAdmin):
    list_display = ('GName', 'GCat', 'GPrice','GDesc','GPic','GDate','ShoppingC')
admin.site.register(Game, GameAdmin)
class CategoryAdmin(admin.ModelAdmin):
    list_display=('CatName',)
admin.site.register(NewC,CategoryAdmin)
# Register your models here.
