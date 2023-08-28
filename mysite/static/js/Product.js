window.addEventListener('load', function() {
    let Product = document.getElementsByClassName("header-content");
    Product[0].classList.add('header-content1');
});
$('.cart-link').click(function(event) {
    event.preventDefault(); // Prevent default link behavior
    var cartUrl = $(this).data('cart-url');
    var gameId = $(this).data('id'); // Get the game ID from data attribute
    
    $.ajax({
        url: cartUrl,
        method: 'POST',
        data: {'id': gameId},
        dataType: 'json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken);
        },
        success: function(response) {
            console.log(response.message);
        },
        error: function(xhr, status, error) {
            console.error('Request failed with status:', status);
        }
    });
});