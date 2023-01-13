
//  fetch('https://dummyjson.com/users/1')
// .then(res => res.json())
// .then(json => 
//     //console.log(json)
//     json.name.array.forEach(name => {
//         Object.setPrototypeOf(name,nameClass);
//         document.body.innerHTML += <section><h1>${name.title}</h1></section>
//     })

// fetch('https://dummyjson.com/users/1')
// .then(res => res.json())
// .then(json => {
//     json.users.forEach(users => {
//         document.body.innerHTML += `<section><h1>${users.address}</h1>price:${users.firstName}</section>`
   
//     });

//     console.log(json)
// })

      // Object.keys(json).forEach(key => {
      //   console.log(key);
      //   console.log(json[key]);
      // });
        document.addEventListener("DOMContentLoaded", function() {
          fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
              window.classmates = data.users; 
              displayclassmate();
            });
        });
      
      function displayclassmate() {
        document.querySelector("#classmate-list").innerHTML = "";  
        
        const searchInput = document.querySelector("#search-input").value.toLowerCase(); 

        const filteredClassmates = window.classmates.filter(user => {
          return user.firstName.toLowerCase().includes(searchInput) || user.email.toLowerCase().includes(searchInput);
        });
      
        // Display the filtered data
        filteredClassmates.forEach(user => {
          const classmateItem = document.createElement("li");
          classmateItem.innerHTML = `
          <img src =${user.image}>
          <dl>
            <p class = "ff">Introduction:</p>
            <dt>Name</dt>
            <dd>${user.firstName} ${user.lastName}</dd>
            <dt>Age</dt>
            <dd>${user.age}</dd>
            <dt>Gender</dt>
            <dd>${user.gender}</dd>
            <dt>Birthdate</dt>
            <dd>${user.birthDate}</dd>
          </dl>
          <dl>
            <br>
            <dt>Address</dt>
            <dd>${user.address.address} ${user.address.city}</dd>
            <dt>City</dt>
            <dd>${user.address.city}</dd>
            <dt>Postalcode</dt>
            <dd>${user.address.postalCode}</dd>
          </dl>
          <dl>
          <p class = "ff">Company:</p>
          <dt>Name of Company</dt>
          <dd>${user.company.name}</dd>
          <dt>Function</dt>
          <dd>${user.company.department} ${user.company.title}</dd>
          <dt>Company Address</dt>
          <dd>${user.company.address.address} ${user.company.address.city}</dd>
          <dd>${user.company.address.postalCode} ${user.company.address.state} </dd>
          </dl>
          `;
          document.querySelector("#classmate-list").appendChild(classmateItem);
        });
      };
      
      document.querySelector("#search-input").addEventListener("input", displayclassmate);
      //
           //simulator in pc and run take screenshot