document.addEventListener("DOMContentLoaded", function () {
    // Asynchronous function to fetch and display user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
        const dataContainer = document.getElementById('api-data'); // Data container element

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const users = await response.json(); // Parse JSON response
            
            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a list to display user names
            const userList = document.createElement('ul');

            // Loop through users and add each name to the list
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the user's name as the list item's text
                userList.appendChild(listItem); // Append the list item to the list
            });

            // Append the complete list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle any errors that occur during the fetch
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Call the function once the DOM content has loaded
    fetchUserData();
});
