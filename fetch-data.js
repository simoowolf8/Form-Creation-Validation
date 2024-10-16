// Define an asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Define the API URL
    const dataContainer = document.getElementById('api-data'); // Select the data container element

    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const users = await response.json(); // Convert the response to JSON
        
        dataContainer.innerHTML = ''; // Clear the loading message

        const userList = document.createElement('ul'); // Create a <ul> element to hold user names
        users.forEach(user => {
            const li = document.createElement('li'); // Create a <li> for each user
            li.textContent = user.name; // Set the <li> text to the user's name
            userList.appendChild(li); // Append the <li> to the userList
        });

        dataContainer.appendChild(userList); // Append the userList to the data container
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.'; // Display error message
        console.error('Error fetching user data:', error); // Log the error to the console
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
