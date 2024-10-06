document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    const formData = new FormData(this); 
    const responseMessage = document.getElementById("response-message");

    
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            const name = document.getElementById("name").value; 
            responseMessage.textContent = `Thank you, ${name}! Your thoughts have been submitted.`;
            this.reset(); 
        } else {
            responseMessage.textContent = 'There was an error. Please try again.';
        }
    })
    .catch(error => {
        responseMessage.textContent = 'There was an error. Please try again.';
        console.error('Error:', error);
    });
});
