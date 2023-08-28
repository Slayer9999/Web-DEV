from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
from django.shortcuts import redirect
from Gaming.models import Game
from Gaming.models import NewC
from django.shortcuts import get_object_or_404
from django.urls import reverse

from django.views.decorators.csrf import csrf_exempt

def Home(request):
    try:
         Da_ta=NewC.objects.all()
         GameDa_ta=Game.objects.all()
         recent_records = Game.objects.all().order_by('-id')[:10]

    except:
       pass
    return render(request, 'main.html',{'Data':Da_ta,'GameDa_ta':GameDa_ta,'Recent':recent_records})
def AdminHome(request):
    try:
         Da_ta=NewC.objects.all()
         GameDa_ta=Game.objects.all()
    except:
       pass
    return render(request, 'MainAdmin.html',{'Data':Da_ta,'GameDa_ta':GameDa_ta})
def Category(request):
     return render(request,'Category.html')





def saveData(request):
    if request.method == 'POST':
        id = request.POST.get('id')
        GName = request.POST.get('GName', '')
        GPrice = request.POST.get('GPrice', '')
        GDesc = request.POST.get('GDescription', '')
        GCategoryId = request.POST.get('GCategory', '')  # Get the selected category ID
        GPic = request.FILES.get('GPic')

        if not GName:
            return JsonResponse({'status': 'error', 'message': 'Game name is required.'})

        try:
            if GCategoryId:
                category = get_object_or_404(NewC, pk=GCategoryId)  # Retrieve the correct NewC instance
                if id:
                    ajax = Game.objects.get(pk=id)
                    ajax.GName = GName
                    ajax.GPrice = GPrice
                    ajax.GCat = category  # Set the foreign key field
                    ajax.GDesc = GDesc
                    if GPic:
                        ajax.GPic = GPic
                    
                    ajax.save()
                else:
                    ajax = Game(GName=GName, GPrice=GPrice, GCat=category, GDesc=GDesc, GPic=GPic)
                    ajax.save()
                return JsonResponse({'status': 'success', 'message': 'Game saved successfully.'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Invalid category.'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method.'})



def Delete(request):
    if request.method=="POST":
        id=request.POST.get('sid')
        
        pi=Game.objects.get(pk=id)
        pi.delete()
        return JsonResponse({'status':1})
    return JsonResponse({"status":0})
def update(request):
    if request.method == 'POST':
        id = request.POST.get('sid')
        employee = Game.objects.get(pk=id)
        category = NewC.objects.get(pk=employee.GCat.id)
        
        # Assuming you have fields 'id', 'name', 'email', 'bio' in your model
        data = {
            'Id': employee.id,
            'name': employee.GName,
            'price': employee.GPrice,
            'Cat':category.CatName,
            'Desc': employee.GDesc, 
            'ImageURL': employee.GPic.url if employee.GPic else None, # Assuming you have a field named 'price'
              # Assuming you have a field named 'category'
        }
        
        return JsonResponse(data)
csrf_exempt
def SaveCat(request):
    if request.method == 'POST':
        Name = request.POST.get('Name', '')
        new_category = NewC(CatName=Name)
        new_category.save()
        return JsonResponse({'status': 'success', 'message': 'Category saved successfully.'})

        
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method.'})
def category_view(request, category_id):
    # Filter Game records with matching category_id
    game_records = Game.objects.filter(GCat_id=category_id)
    Da_ta=NewC.objects.all()
    
    context = {
        'game_records': game_records,
        'Data':Da_ta,
    }
    
    return render(request, 'Product.html', context)

def Cart(request):
    gameId = request.POST.get('id')
        
    if gameId:
            try:
                game_instance = Game.objects.get(pk=gameId)
                game_instance.ShoppingC += 1
                game_instance.save()
                return JsonResponse({'message': 'Item added to cart.'})
            except Game.DoesNotExist:
                return JsonResponse({'message': 'Game not found.'}, status=404)
    else:
            return JsonResponse({'message': 'Invalid request.'}, status=400)






