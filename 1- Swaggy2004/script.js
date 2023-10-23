var totGuns = 1;
var totInv = 0;
var totprice = 0;
var totprice2= 0;
function getQuantity()
{
    totGuns = document.getElementById("qty-1").value;
    totprice = 0;
    document.getElementById("price").innerHTML = "$" + totprice;
}

function getQuantity2()
{
    totInv = document.getElementById("qty-2").value;
    totprice2 = 0;
    document.getElementById("price2").innerHTML = "$" + totprice2;
}

function calculatePrice(price)
{
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

function calculatePrice2(price)
{
    if (totInv > 0)
    {
        totprice2 += price;
        totInv--;
        document.getElementById("price2").innerHTML = "$" + totprice2;
    }
    else
    {
        alert("You maxed out on the quantity!");    
    }
}

