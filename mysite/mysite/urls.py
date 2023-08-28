"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from mysite import views
from django.conf import settings 
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.Home,name='Home'),
    path('AdminHome', views.AdminHome,name='AdminHome'),
    path('Category', views.Category,name='Category'),
    path('category/<int:category_id>/', views.category_view, name='category_view'),
    path('SaveData',views.saveData,name='Save'),
    path('delete',views.Delete,name='delete'),
    path('update',views.update,name='update'),
    path('Save',views.SaveCat,name='SaveCat'),
    path('Cart',views.Cart,name='Cart'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

