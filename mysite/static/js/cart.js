$('.increase-quantity').click(function() {
    var row = $(this).closest('tr');
    var quantityInput = row.find('.product-quantity');
    var totalCostInput = row.find('.total-cost');
    var productId = row.data('product-id');
    
    var currentQuantity = parseInt(quantityInput.val());
    var newQuantity = currentQuantity + 1;
    quantityInput.val(newQuantity);
    
    // Update total cost based on the new quantity
    var unitPrice = parseInt(row.find('td:eq(1)').text());
    var newTotalCost = unitPrice * newQuantity;
    totalCostInput.val(newTotalCost);
    var cartUrl = $(this).data('url');
    var gameId = $(this).data('id'); // Get the game ID from data attribute
    x += 1;
    
  
    let productElement = document.querySelector('.Badge');
    productElement.innerText = x;
    $.ajax({
        url: cartUrl,
        method: 'POST',
        data: {'id': gameId,'X':x},
        dataType: 'json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken);
        },
        success: function(response) {
            console.log("Helllo");
            location.reload();
           
            console.log("Hello")
           
  
           
        },
        error: function(xhr, status, error) {
            console.error('Request failed with status:', status);
        }
    });
  });
  
//   {% comment %} inCRASE INI CART {% endcomment %}
//   {% comment %} dECREASE IN cART {% endcomment %}
  $('.decrease-quantity').click(function() {
    var row = $(this).closest('tr');
    var quantityInput = row.find('.product-quantity');
    var totalCostInput = row.find('.total-cost');
    var productId = row.data('product-id');
    
    var currentQuantity = parseInt(quantityInput.val());
    if (currentQuantity > 0) {
        var newQuantity = currentQuantity - 1;
        quantityInput.val(newQuantity);
        
        // Update total cost based on the new quantity
        var unitPrice = parseInt(row.find('td:eq(1)').text());
        var newTotalCost = unitPrice * newQuantity;
        totalCostInput.val(newTotalCost);
    }
    var cartUrl = $(this).data('url');
    var gameId = $(this).data('id'); // Get the game ID from data attribute
    if(x>0){
      x -= 1;
    }
    
  
    let productElement = document.querySelector('.Badge');
    productElement.innerText = x;
    $.ajax({
        url: cartUrl,
        method: 'POST',
        data: {'id': gameId,'X':x},
        dataType: 'json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken);
        },
        success: function(response) {
            console.log("Helllo");
            location.reload();
           
            console.log("Hello")
           
  
           
        },
        error: function(xhr, status, error) {
            console.error('Request failed with status:', status);
        }
    });
  });
  
  