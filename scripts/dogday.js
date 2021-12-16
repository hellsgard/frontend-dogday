"use strict"


const getOutput = document.querySelector("#getOutput");
const dogModal = new bootstrap.Modal(document.getElementById("updateFormModal"), {
})

const updateToast = document.getElementById("updateToast");
const createToast = document.getElementById("createToast");

const updateDogForm = document.querySelector("#updateForm");
const findDogName = document.querySelector("#findDogName");
const findDogBreed = document.querySelector("#findDogBreed");
const findDogId = document.querySelector("#findDogId");
const findDogFriendly = document.querySelector("#findUnfriendly");

// RENDER DOG CARD DISPLAY

const renderDog = (dog, outputRes) => {
            const dogCol = document.createElement("div");
            dogCol.classList.add("col");

            const dogCard = document.createElement("div");
            dogCard.classList.add("card", );

            const dogBody = document.createElement("div");
            dogBody.classList.add("card", "two");

            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("button-container");

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
            dogFee.innerText = `Weekly fee: £ ${dog.fee}`;
            dogBody.appendChild(dogFee);
            
            const updateModal = document.createElement("button");
            updateModal.innerText = "";
            updateModal.classList.add("btn", "btn-secondary");
            updateModal.classList.add("bi", "bi-wrench")
            updateModal.addEventListener("click", () => {
                axios
                    .get(`http://localhost:8080/getById/${dog.id}`)
                    .then(res => {
                        document.getElementById("updateDogName").setAttribute(`value`, dog.name);
                        document.getElementById("updateDogBreed").setAttribute(`value`, dog.breed);
                        document.getElementById("updateDoggieId").setAttribute(`value`, dog.id);
                        document.getElementById("updateDogFriendly").setAttribute(`value`, dog.friendly);
                        document.getElementById("updateDogFee").setAttribute(`value`, dog.fee);
                    })
                dogModal.show();
            })

            const deleteDog = document.createElement("button");
            deleteDog.innerText = "";
            deleteDog.classList.add("btn", "btn-danger");
            deleteDog.classList.add("bi", "bi-trash");

            deleteDog.addEventListener("click", () => {
                if (confirm(`are you sure you want to delete ${dog.name} ?`) == true){              
                axios
                    .delete(`http://localhost:8080/remove/${dog.id}`)
                    .then(res => getAllDogs().window.location.reload())
                    .catch(err => console.error(err))
                } else {
                    form.reset;
                }
            })

            dogCard.appendChild(dogBody);
            dogCol.appendChild(dogCard);
            dogBody.appendChild(buttonContainer);
            buttonContainer.appendChild(deleteDog);
            buttonContainer.appendChild(updateModal);
            outputRes.appendChild(dogCol);

}

// GET FUNCTIONS

const getAllDogs = () => {
    axios
        .get("http://localhost:8080/getAll")
        .then(res => {
            const dogs = res.data;
            getOutput.innerHTML = "";
            for(let dog of dogs) {
                
                renderDog(dog, getOutput);
            }
        })
        .catch(err => console.error(err))
    }


const getById = () => {
    axios
        .get(`http://localhost:8080/getById/${findDogId.value}`)
        .then(res => {
            const dog = res.data;
            getOutput.innerHTML = "";
            renderDog(dog, getOutput);
        })
        .catch(err => console.error(err))
}

const getByName = () => {
    axios
        .get(`http://localhost:8080/getByName/${findDogName.value}`)
        .then(res => {
            const dogs = res.data;
            getOutput.innerHTML = "";
            for(let dog of dogs) {
                
                renderDog(dog, getOutput);
            }
        })
        .catch(err => console.error(err))
}

const getByBreed = () => {
    axios
        .get(`http://localhost:8080/getByBreed/${findDogBreed.value}`)
        .then(res => {
            const dogs = res.data;
            getOutput.innerHTML = "";
            for(let dog of dogs) {
                
                renderDog(dog, getOutput);
            }
        })
        .catch(err => console.error(err))
}

const getByFriendly = () => {
    axios
        // .get(`http://localhost:8080/getByFriendly/${findDogFriendly.value}`)
        .get(`http://localhost:8080/getByFriendly/no`)
        .then(res => {
            const dogs = res.data;
            getOutput.innerHTML = "";
            for(let dog of dogs) {
                
                renderDog(dog, getOutput);
            }
        })
        .catch(err => console.error(err))
}


// UPDATE

const amendDog = () => {
                    const upId = document.querySelector("#updateDoggieId");
                    const data = {
                    name: document.getElementById("updateDogName").value,
                    breed: document.getElementById("updateDogBreed").value,
                    friendly: document.getElementById("updateDogFriendly").value,
                    fee: document.getElementById("updateDogFee").value,
            
                };
                axios
                    .put(`http://localhost:8080/replace/${upId.value}`, data)
                    .then(res => {
                        updateDogForm.reset();
                        getAllDogs();
                        dogModal.hide();
                        const getDogToast = bootstrap.Toast.getOrCreateInstance(updateToast);
                        getDogToast.show();
                        
                        
                    })
                    .catch(err => console.error(err))
                    

            }
                   

//CREATE

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
            const getDogToast = bootstrap.Toast.getOrCreateInstance(createToast);
            getDogToast.show();

        })
        .catch(err => console.error(err));

});
getAllDogs();

// CODE GRAVEYARD

    // const getAllDogFee = () => {
    //     axios
    //         .get("http://localhost:8080/getAll")
    //         .then(res => {
    //             const dogFee = res.data.fee;
    //             getOutput.innerHTML = "";
    //             for(let dog of dogs) {
                    
    //                 dogFee.add;
    //             }
    //         })
    //         .catch(err => console.error(err))
    //     }

    
            // const updateDogModal = document.createElement("button");
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
 

// const updateDogButton = document.querySelector("button#saveUpdateDog");
//             updateDogButton.addEventListener("click", () =>{
// const updateDogButton = document.querySelector("button#saveUpdateDog");
            // updateDogButton.addEventListener("click", () =>{
            //         const upId = document.querySelector("#updateDoggieId");
            //         const data = {
            //         name: document.getElementById("updateDogName").value,
            //         breed: document.getElementById("updateDogBreed").value,
            //         friendly: document.getElementById("updateDogFriendly").value,
            //         fee: document.getElementById("updateDogFee").value,
            
            //     };
            //     axios
            //         .put(`http://localhost:8080/replace/${upId.value}`, data)
            //         .then(res => {
            //             getAllDogs();
            //             updateDogForm.reset();
            //         })
            //         .catch(err => console.error(err))

            // })

            // const updateDogForm = document.querySelector("#updateForm");
            // updateDogForm.addEventListener("submit", function(event) {
            //     const modFormId = dogId;

            //     // const form = this;
            //     const data = {
            //         // updateDogId: const updateId = document.getElementById(dog.id)
            //         name: document.getElementById("updateDogName").value,
            //         breed: document.getElementById("updateDogBreed").value,
            //         friendly: document.getElementById("updateDogFriendly").value,
            //         fee: document.getElementById("updateDogFee").value,
            
            //     };
            //     axios
            //         .put(`http://localhost:8080/replace/${dog.id}`, data)
            //         .then(res => {
            //             getAllDogs();
            //             form.reset();
            //         })

            // })

                    //         axios
        //         .put(`http://localhost:8080/replace/${updateId.value}`, data)
        //         .then(res => {
        //             getAllDogs();
        //             form.reset();
        //         })
        //         .catch(err => console.error(err));
        
        // }


            // var updateModal = document.querySelector("button#updateModal");
            // // updateModal.classList.add();
            // dogBody.appendChild(updateModal);
            // var modal = bootstrap.Modal.getInstance(updateModal);

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


// const updateDog = () => {

//     // const id = form.dogId.value;
//     const updateId = document.getElementById("");

//     const data = {
//         name: document.getElementById("updateDogName").value,
//         breed: document.getElementById("updateDogBreed").value,
//         friendly: document.getElementById("updatesDogFriendly").value,
//         fee: document.getElementById("updateDogFee").value,

//     };

//     axios
//         .put(`http://localhost:8080/replace/${updateId.value}`, data)
//         .then(res => {
//             getAllDogs();
//             form.reset();
//         })
//         .catch(err => console.error(err));

// } 

// const updateDogNew = () => {

// }



// document.querySelector("#dogForm").addEventListener("updateDog", updateDog);

            // const dogImage = document.createElement("img");
            // dogImage.src = "http://vision.stanford.edu/aditya86/ImageNetDogs/thumbnails/n02093428-American_Staffordshire_terrier/n02093428_19906.jpg"
            // dogBody.appendChild(dogImage);




 


