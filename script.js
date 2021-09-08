var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-button");
var outputBox = document.querySelector("#output-box");



submitButton.addEventListener("click",submitHandler);

function submitHandler()
{
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, curr);
    
}


function calculateProfitAndLoss(initial, quantity, current){

    if(initial>current)
    {
        //loss
        var loss = ( initial - current ) *quantity;
        var lossPercentage = (loss/initial) * 100;
        showOutput(`Loss is ${loss.toFixed(2)} and loss percentage is ${lossPercentage.toFixed(2)} %`) ;
        

    }
    else if(current > initial)
    {
        //profit
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;
        showOutput(`Profit is ${profit.toFixed(2)} and profit percentage is ${profitPercentage.toFixed(2)} %`) ;
      

    }
    else
    {
    
      showOutput(`No pain no gain & No gain no pain`);

    }

}

function showOutput(message)
{
    outputBox.style.display = "inline-block";
    outputBox.innerText = message;
}