// fetch api

// example 1: fetch or accessing file data from local storage

fetch('myfile.text')
.then(response =>{
    if(!response.ok){
        throw new Error("Network is not responding")
    }
    return response.text();
})
.then(data => console.log(data))
.catch(error => console.error(error))


// example 2: fetching data from some random json url
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => {
    if (!response.ok) {
        throw new Error("Network is not responding");
    }
    return response.json(); 
})
.then(data => {
    console.log(data);
    // accessing only name from the json data
    data.forEach(element => {
        console.log(element.name);
    });
})
.catch(error => console.error(error));

// example 3: Sending data to server
// POST request
fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify({
        name: 'John Doe',
        email: 'johndoegmail.com',
        postID: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
