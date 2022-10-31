
//function to hide the divs
function setToHidden(){

  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  document.getElementById("no-language").setAttribute("class", "hidden");
  // document.getElementById("results").setAttribute("class", "hidden");
}
function whatsYourLanguage(){
  //establish variables for the values of each input
  const years = parseInt(document.getElementById("years").value);
  const petWeight = parseInt(document.getElementById("pet-weight").value);
  const miracles = parseInt(document.querySelector("input[name='miracles']:checked").value);
  const cuddlier = parseInt(document.querySelector("input[name='cuddle']:checked").value);
  const beverage = parseInt(document.querySelector("input[name='bev']:checked").value);
  const yourScore = parseInt(years + petWeight + miracles + cuddlier + beverage);
  
  console.log("your score" + yourScore);
  console.log(yourScore.typeOf);
  if (yourScore > 40){
    document.getElementById("python").removeAttribute("class");
  } else if ((yourScore >= 20) && (yourScore <= 40)) {
    document.getElementById("ruby").removeAttribute("class");
  } else if (yourScore <= 20) {
    document.getElementById("rust").removeAttribute("class");
  } else {
    document.getElementById("no-language").removeAttribute("class");
  }
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    setToHidden();
    whatsYourLanguage();
    form.reset();
  });
});