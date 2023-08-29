window.addEventListener('load', function() {
    let Product = document.getElementsByClassName("header-content");
    Product[0].classList.add('header-content1');
});

$('.cart-link').click(function(event) {
    event.preventDefault()
    var cartUrl = $(this).data('cart-url');
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
        success: function() {
             
          
            
           
            console.log("Hello")
           

           
        },
        error: function(xhr, status, error) {
            console.error('Request failed with status:', status);
        }
    });
});
