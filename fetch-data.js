
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
       
        // Clear existing content
        dataContainer.innerHTML = '';

         // Create a <ul> element
        const userList = document.createElement('ul');
    
        // Loop through the users array
        users.forEach(user => {
          // Create a <li> element for each user
          const listItem = document.createElement('li');
          // Set the text content to the user's name
          listItem.textContent = user.name;
          // Append the <li> to the userList
          userList.appendChild(listItem);
        });
        
        // Append the userList to the dataContainer
        dataContainer.appendChild(userList);


        
      } catch (error) {
         // Clear existing content
        dataContainer.innerHTML = '';
        // Set error message
        dataContainer.textContent = 'Failed to load user data.';
      }
    }
    document.addEventListener('DOMContentLoaded', fetchUserData);

