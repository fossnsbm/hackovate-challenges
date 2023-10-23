var totGuns = 1;
var totprice = 0;
function getQuantity()
{
    totGuns = document.getElementById("qty-1").value;
    totprice = 0;
    document.getElementById("price").innerHTML = "$" + totprice;
}

function calculatePrice(price)
{
    var gun = document.getElementById.value;
    if (totGuns > 0)
    {
        totprice += price;
        totGuns--;
        document.getElementById("price").innerHTML = "$" + totprice;
    }
    else
    {
        alert("You maxed out on the quantity!");    
    }
}

