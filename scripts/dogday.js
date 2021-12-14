"use strict"



const getOutput = document.querySelector("#getOutput");

const getAllDogs = () => {
    axios
        .get("http://localhost:8080/getAll")
        .then(res => {
            const dogs = res.data
            getOutput.innerHTML = "";
            for (let dog of dogs) {
            const dogCol = document.createElement("div");
            dogCol.classList.add("col");

            const dogCard = document.createElement("div");
            dogCard.classList.add("card");

            const dogBody = document.createElement("div");
            dogBody.classList.add("card");

            // const userContainer = document.createElement("div");

            const dogName = document.createElement("h5");
            dogName.classList.add("card-title");
            dogName.innerText = `Name: ${dog.name}`;
            dogBody.appendChild(dogName);

            const dogId = document.createElement("p");
            dogId.classList.add("card-text");
            dogId.innerText = `ID: ${dog.id}` ;
            dogBody.appendChild(dogId);

            const dogBreed = document.createElement("p");
            dogBreed.classList.add("card-text");
            dogBreed.innerText = `Breed: ${dog.breed}` ;
            dogBody.appendChild(dogBreed);

            const dogFriendly = document.createElement("p");
            dogFriendly.classList.add("card-text");
            dogFriendly.innerText = `Plays well: ${dog.friendly}`;
            dogBody.appendChild(dogFriendly);

            const dogFee = document.createElement("p");
            dogFee.classList.add("card-text");
            dogFee.innerText = `Weekly fee: ${dog.fee}`;
            dogBody.appendChild(dogFee);

            const deleteDog = document.createElement("button");
            deleteDog.innerText = "Remove dog";
            deleteDog.classList.add("btn", "btn-danger");
            deleteDog.addEventListener("click", () => {
                axios
                    .delete(`http://localhost:8080/remove/${dog.id}`)
                    .then(res => getAllDogs().window.location.reload())
                    .catch(err => console.error(err))
            })

            // const updateDogInit = document.createElement("button");
            // updateDogInit.innerText = "update";
            // updateDogInit.classList.add("btn", "btn-warning");
            // updateDogInit.addEventListener("click", (id) => {
            //     const id = form.dogId.value;
            //     const data = {
            //         name: form.dogName.value,
            //         breed: form.dogBreed.value,
            //         friendly: form.dogFriendly.value,
            //         fee: form.dogFee.value,
            
            //     };
            //     axios
            //         .put(`http://localhost:8080/replace/${id}`)
            //         .then(res => getAllDogs().window.location.reload())
            //         .catch(err => console.error(err))
                
            // })
 

            dogCard.appendChild(dogBody);
            dogCol.appendChild(dogCard);
            dogBody.appendChild(deleteDog);
            // dogBody.appendChild(updateDogInit);

            getOutput.appendChild(dogCol);
            }

        })

}


document.querySelector("#dogForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("THIS:", this);
    const form = this;

    const data = {
        name: form.dogName.value,
        breed: form.dogBreed.value,
        friendly: form.dogFriendly.value,
        fee: form.dogFee.value,

    };

    axios
        .post("http://localhost:8080/create", data)
        .then(res => {
            getAllDogs();
            form.reset();

        })
        .catch(err => console.error(err));

});

// document.querySelector("#dogForm").addEventListener("submit", function() {

//     console.log("THIS:", this);
//     const form = this;
//     const id = form.dogId.value;
//     const data = {
//         name: form.dogName.value,
//         breed: form.dogBreed.value,
//         friendly: form.dogFriendly.value,
//         fee: form.dogFee.value,

//     };

//     axios
//         .put(`http://localhost:8080/replace/${id}`, data)
//         .then(res => {
//             getAllDogs();
//             form.reset();

//         })
//         .catch(err => console.error(err));

// });


const updateDog = () => {

    // const id = form.dogId.value;
    const updateId = document.getElementById("updateDogId");

    const data = {
        name: document.getElementById("dogName").value,
        breed: document.getElementById("dogBreed").value,
        friendly: document.getElementById("dogFriendly").value,
        fee: document.getElementById("dogFee").value,

    };

    axios
        .put(`http://localhost:8080/replace/${updateId.value}`, data)
        .then(res => {
            getAllDogs();
            form.reset();
        })
        .catch(err => console.error(err));

}   

getAllDogs();

// document.querySelector("#dogForm").addEventListener("updateDog", updateDog);






