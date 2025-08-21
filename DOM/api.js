/*
const container = document.getElementById('posts-container');

fetch('https://dummyjson.com/posts')
    .then(response => response.json()) //get the data from our fetch then turn it to a json format
    .then(data => {
    
        //display the data on the webpage
        data.posts.forEach(post => {
            // create a new div for each 
            const postElement = document.createElement('div');

            //add new contents to our created div
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            //now we add a div (postemelemt) to our container
            container.appendChild(postElement)
        });
    })

    .catch(error => console.error("Error fetching data:", error)); */


/*
const container = document.getElementById('posts-container');

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {

        data.products.forEach(product => {
            const postElement = document.createElement('div')
            
            postElement.innerHTML = `
                <h2>${product.title}</h2>
                <h4>${product.description}</h4>
                <p>${product.category}</p>
                <p>${product.price}</p>
                <p>${product.discountPercentage}</p>
                <p>${product.rating}</p>
                <p>${product.stock}</p>
            `
            container.appendChild(postElement)
        });
    }) */

    // .catch(error => console.error("Error fetching data:", error));




const container = document.getElementById('post-container');

function getPost(){
    container.innerHTML = '<p>Loading.......</p>';

    const randomId = Math.floor(Math.random() * 100) + 1;

    fetch(`https://dummyjson.com/posts/${randomId}`)
    .then(response => response.json())
    .then(post => {

        container.innerHTML = `
            <h3 class="py-3 font-bold">${post.title}</h3>
            <p>${post.body}</p>
        `;
    })
    .catch(error => console.error("Error fetching data:", error));
}