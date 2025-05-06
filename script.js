document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing to FragKD.gg!');
    this.reset();
});
