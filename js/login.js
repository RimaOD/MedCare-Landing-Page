const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".options-container2");

const optionsList2 = document.querySelectorAll(".option2");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

optionsList2.forEach(o => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
  });
});

const selected3 = document.querySelector(".selected3");
const optionsContainer3 = document.querySelector(".options-container3");

const optionsList3 = document.querySelectorAll(".option3");

selected3.addEventListener("click", () => {
  optionsContainer3.classList.toggle("active");
});

optionsList3.forEach(o => {
  o.addEventListener("click", () => {
    selected3.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer3.classList.remove("active");
  });
});

const selected4 = document.querySelector(".selected4");
const optionsContainer4 = document.querySelector(".options-container4");

const optionsList4 = document.querySelectorAll(".option4");

selected4.addEventListener("click", () => {
  optionsContainer4.classList.toggle("active");
});

optionsList4.forEach(o => {
  o.addEventListener("click", () => {
    selected4.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer4.classList.remove("active");
  });
});

const selected5 = document.querySelector(".selected5");
const optionsContainer5 = document.querySelector(".options-container5");

const optionsList5 = document.querySelectorAll(".option5");

selected5.addEventListener("click", () => {
  optionsContainer5.classList.toggle("active");
});

optionsList5.forEach(o => {
  o.addEventListener("click", () => {
    selected5.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer5.classList.remove("active");
    let citizenDiv = document.getElementById("CitizenDiv");
    let doctorDiv = document.getElementById("DoctorDiv");
    let id = o.querySelector("input").id;
    if(id === "Citizen"){
      doctorDiv.style.display = "none";
      citizenDiv.style.display = "block";
    }else{
      citizenDiv.style.display = "none";
      doctorDiv.style.display = "block";
    }

  });
});

const selected6 = document.querySelector(".selected6");
const optionsContainer6 = document.querySelector(".options-container6");

const optionsList6 = document.querySelectorAll(".option6");

selected6.addEventListener("click", () => {
  optionsContainer6.classList.toggle("active");
});

optionsList6.forEach(o => {
  o.addEventListener("click", () => {
    selected6.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer6.classList.remove("active");
  });
});

