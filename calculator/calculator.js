window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.querySelector('#loan-amount').value = 1000;
  const loanYears = document.querySelector('#loan-years').value = 5;
  const loanRate = document.querySelector('#loan-rate').value = .25;
  const values = {'amount':loanAmount,'years':loanYears,'rate':loanRate}
  calculateMonthlyPayment(values);

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const loanAmount = document.querySelector('#loan-amount').value;
  const loanYears = document.querySelector('#loan-years').value;
  const loanRate = document.querySelector('#loan-rate').value;
  const values = {'amount':loanAmount,'years':loanYears,'rate':loanRate}
  updateMonthly(calculateMonthlyPayment(values));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const interest = values.rate/12;
  const totalN = values.years*12;
  const subtracted = Math.pow(1+interest,totalN*-1)
  const monthlyPayment = ((values.amount*interest)/(1-subtracted)).toFixed(2).toString(10);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerHTML = monthly;
}
