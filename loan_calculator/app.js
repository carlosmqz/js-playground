document.querySelector('#loan-form').addEventListener('submit',function(e){
    e.preventDefault();
    document.getElementById('loading').removeAttribute("hidden");
    setTimeout(calculateResults,2000);
});

function clearForm(){
    console.log('Clear');
    document.getElementById('results').setAttribute('hidden', 'false');
    document.getElementById('amount').value = '';
    document.getElementById('interest').value = '';
    document.getElementById('years').value = '';
};

function calculateResults(e){
    const txtAmount = document.getElementById('amount');
    const txtInterest = document.getElementById('interest');
    const txtYears = document.getElementById('years');
    const txtMonthPayment = document.getElementById('monthlypayment');
    const txtTotalInterest = document.getElementById('totalInterest');
    const txtTotalPayment = document.getElementById('totalToPay');

    const principal = parseFloat(txtAmount.value);
    const interest = parseFloat(txtInterest.value)/100/12;
    const calculatedPayment = parseFloat(txtYears.value) * 12;

    const x = Math.pow(1+interest,calculatedPayment);
    const monthly = (principal*x*interest)/(x-1);

    if(isFinite(monthly)){
        txtMonthPayment.value = monthly.toFixed(2);
        txtTotalPayment.value = (monthly*calculatedPayment).toFixed(2);
        txtTotalInterest.value = ((monthly*calculatedPayment)-principal).toFixed(2);
        showResults();
        document.getElementById('loading').setAttribute('hidden','true');
        
    }else{
        document.getElementById('loading').setAttribute('hidden','true');
        showError('Please check your numbers');
    }
}

function showError(error){
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //create div
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);

    setTimeout( () => {
        document.querySelector('.alert').remove();
    }, 3000)
}

function showResults(){
    const results = document.getElementById('results');
    if(results.getAttribute("hidden") === "true"){
        results.removeAttribute("hidden");     
    }
}