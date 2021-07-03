function memberFunc() {
  // Get the checkbox
  var checkBox = document.getElementById("member");
  // Get the output text
  var text = document.getElementById("caption");
  
  console.log("Success! I am from javascript");
  console.log(checkBox);
  console.log(text);
  
  // If the checkbox is checked, display the output text
  if (checkBox.checked === true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}