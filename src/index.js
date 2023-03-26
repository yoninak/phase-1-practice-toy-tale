let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


fetch("http://localhost:3000/toys")
  .then((response) => response.json())
  .then((data) => data.forEach((element) => {
    let div = document.getElementById( "toy-collection")
    div.class  = element
    console.log (element)
  })
)