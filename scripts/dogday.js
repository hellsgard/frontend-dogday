"use strict"

const getOutput = document.querySelector("#getOutput");

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
            getDogs();
            form.reset();

        })
        .catch(err => console.error(err));

});


const getDogs = () => {
    axios
        .get("http://localhost:8080/getAll")
        .then(res => {
            const dogs = res.data
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

            dogCard.appendChild(dogBody);
            dogCol.appendChild(dogCard);

            getOutput.appendChild(dogCol);
            }

        })

}
getDogs();