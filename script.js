function showMessage() {
  document.getElementById("result").style.display = "block";
}

function compute(){
  let principal = document.getElementById("principal").value;
  
  if (principal < 1 || principal == 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return;
  }

  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;


  let interest = principal * years * rate / 100;
  let year = new Date().getFullYear()+parseInt(years); 
  

document.getElementById("depositmessage").innerHTML = ""+principal;
document.getElementById("interestmessage").innerHTML = ""+rate+"%";
document.getElementById("amountmessage").innerHTML = ""+interest;
document.getElementById("yearmessage").innerHTML = ""+year;

  showMessage();

  return false;
}
      

function updateRate() {
  let rateVal = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateVal + "%";
}

