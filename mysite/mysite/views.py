from django.http import HttpResponse,JsonResponse
from django.shortcuts import render
from django.shortcuts import redirect
from Gaming.models import Game
from Gaming.models import NewC
from django.shortcuts import get_object_or_404
from django.urls import reverse
from Gaming.models import Big

from django.views.decorators.csrf import csrf_exempt

global new_total
new_total=0

def Home(request):
    global new_total
    
    try:
         
         
         Da_ta=NewC.objects.all()
         GameDa_ta=Game.objects.all()
         Bi_g=Big.objects.last()
         Initial_Value=Bi_g.Total
         recent_records = Game.objects.all().order_by('-id')[:10]
         
         

    except:
       pass
    return render(request, 'main.html',{'Data':Da_ta,'GameDa_ta':GameDa_ta,'Recent':recent_records,'Initial_Value':Initial_Value,})
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
   
   try:
        
    game_records = Game.objects.filter(GCat_id=category_id)
    Da_ta=NewC.objects.all()
    Bi_g=Big.objects.last()
    Initial_Value=Bi_g.Total
    
    context = {
        'game_records': game_records,
        'Data':Da_ta,
        'Total':Bi_g,
        'Initial_Value':Initial_Value

        
    }
   except:
      pass
    
   return render(request, 'Product.html', context)

def Cart(request):
    
    gameId = request.POST.get('id')
    new_total=request.POST.get('X')
    new_total=int(new_total)
        
    if gameId:
            try:
                game_instance = Game.objects.get(pk=gameId)
                game_instance.ShoppingC += 1
                new_total=new_total+1
                new = Big.objects.last()
                new.Total+=1
                new.save()

               
                game_instance.save()
                return JsonResponse({'message': 'Item added to cart.'})
            except Game.DoesNotExist:
                return JsonResponse({'message': 'Game not found.'}, status=404)
    else:
            return JsonResponse({'message': 'Invalid request.'}, status=400)
def CartMinus(request):
    
    gameId = request.POST.get('id')
    new_total=request.POST.get('X')
    new_total=int(new_total)
        
    if gameId:
            try:
                game_instance = Game.objects.get(pk=gameId)
                if game_instance.ShoppingC>0:
                    game_instance.ShoppingC -= 1
                new_total=new_total-1
                new = Big.objects.last()
                if(new.Total>0):
                    new.Total-=1
                new.save()

               
                game_instance.save()
                return JsonResponse({'message': 'Item added to cart.'})
            except Game.DoesNotExist:
                return JsonResponse({'message': 'Game not found.'}, status=404)
    else:
            return JsonResponse({'message': 'Invalid request.'}, status=400)



def CartPage(request):
        try:
         Shopping = Game.objects.filter(ShoppingC__gt=0)
         total_cost = []
         for cost in Shopping:
            total = cost.ShoppingC * cost.GPrice
            total_cost.append((cost, total))
         Bi_g=Big.objects.last()
         Initial_Value=Bi_g.Total
         Da_ta=NewC.objects.all()
        except:
         pass
        
        return render(request,'cart.html',{'total_cost':total_cost,'Initial_Value':Initial_Value,'Data':Da_ta}) 
