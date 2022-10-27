//wrap the whole thing in a event listener that listens for load and runs an anonymous function.

//function to hide the divs
window.addEventListener("load", function() {
  function setToHidden(){
    document.getElementById("years1").setAttribute("class", "hidden");
    document.getElementById("pet-weight").setAttribute("class", "hidden");
    document.getElementById("miracles").setAttribute("class", "hidden");
    document.getElementById("cuddlier").setAttribute("class", "hidden");
    document.getElementById("coffee").setAttribute("class", "hidden");
  }
  function resetFormFields(){
    //here's your problem
    const yearField = document.querySelector("input#years");
    yearField.value = '';
  }
  function whatsYourLanguage(){
    //establish variables for the values of each input
    const years = parseInt(document.querySelector("input#years").value);
    const petWeight = parseInt(document.querySelector("input#pet-weight").value);
    const miracles = parseInt(document.querySelector("input#miracles").value);
    const cuddlier = parseInt(document.querySelector("input#cuddlier").value);
    const beverage = parseInt(document.querySelector("input#coffee").value);
    const yourScore = years + petWeight + miracles + cuddlier + beverage;
    console.log(yourScore);
    if (yourScore > 100){
      document.getElementById("python").removeAttribute("class");
    } else if ((yourScore >= 25) && (yourScore <= 100)) {
      document.getElementById("ruby").removeAttribute("class");
    } else if (yourScore <=25) {
      document.getElementById("rust").removeAttribute("class");
    } else {
      document.getElementById("no-language").removeAttribute("class");
    }
  }

  let form = document.querySelector("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();
    setToHidden();
    whatsYourLanguage();
    form.reset();
    resetFormFields();
  })
})