function sayHello() {
    fetch('/api/hello') // Call the API
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Parse as text
        })
        .then(data => {
            alert(data); // Alert the plain text response
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
