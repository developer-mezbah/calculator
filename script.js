function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  if (document.getElementById("display").value == "") {
    document.getElementById("display").value == "";
    return alert("Your calculation is not Valid!!!");
  }
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {
    document.getElementById("display").value = "Error";
    alert("Something went Wrong, Your calculation is not done!!!");
  }
}
function back() {
  const totalValue = document.getElementById("display").value;
  document.getElementById("display").value = totalValue.slice(0, -1);
}
