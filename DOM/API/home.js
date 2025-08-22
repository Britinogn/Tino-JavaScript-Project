/*
const searchText = document.getElementById('searchInput');
const container = document.getElementById('search-container');

function searchPost(){
    authorName = searchText.value.trim();

    //validate

    if (authorName === '') {
        container.innerHTML = '<h2>Author Name Cannot Be Empty</h2>';
        return;
    }

fetch(`https://dummyjson.com/quotes/search?q=${authorName}`)
    .then(response => response.json())
    .then (data => {

        data.quotes.forEach(quote => {
            const postElement = document.createElement('div');

            postElement.innerHTML = `
                <h3>${quote.quote}</h3>
                <h3>${quote.author}</h3>
            `;

            container.appendChild(postElement)
        })
})

}

*/

// this is Authunticator section

const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const usernamePass = document.getElementById('password');
const container = document.getElementById('result-container');

async  function handleLogin(event){
    //prevents the page from reloading after the form is submitted
    event.preventDefault();

    container.innerHTML = '<h2>Loading</h2>';

    try {

        //step 1
        const loginResponse = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
    
                username: usernameInput.value,
                password: usernamePass.value,
               
            }),
        
        })
        //if  the logins fails
        if(!loginResponse.ok){
            throw new Error('Login Failed , Please check your Credentails.')
        }

        const loginData = await loginResponse.json();
        const authToken = loginData.accessToken

        container.innerHTML = '<h2>Login Successful.......... Fetching Profile.......</h2>';

        //use the token to get the profile Step 2
        const profileResponse = await fetch('https://dummyjson.com/auth/me',{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken} `, /* YOUR_ACCESS_TOKEN_HERE */
            }, 
        })

        // IF profile fetch fails eg invalid token
        if(!profileResponse.ok){
            throw new Error('Profile fetch failed. Token might be invalid')
        }
        const profileData = await profileResponse.json();

        container.innerHTML = `
            <h2>Hello, ${profileData.username} </h2>
            <p><strong>Name: </strong>${profileData.firstName} ${profileData.lastName}</p>
            <p><strong>Email: </strong>${profileData.email}</p>
            <p><strong> Gender:</strong> ${profileData.gender}</p>
            <img src=" ${profileData.image}"/>




        `;


    } catch (error) {
        container.innerHTML = `<p style="color: #ef1010ff;">Error: ${error.message}</p>`;
        console.error("An Error Occured", error);
        
    }
}


// loginform section

loginForm.addEventListener('submit', handleLogin)