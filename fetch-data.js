// Step 1: Define the async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear existing content
        dataContainer.innerHTML = '';

        // Create <ul> element
        const userList = document.createElement('ul');

        // Populate list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 2: Run after DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
