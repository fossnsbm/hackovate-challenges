
<!DOCType html>
<html>
    <head>document.addEventListener("DOMContentLoaded", function () {
    const quantityInputs = document.querySelectorAll("input[type=number]");

    quantityInputs.forEach(function (input) {
        input.addEventListener("input", function () {
            const maxQuantity = parseInt(input.value);
            const items = input.parentNode.querySelector(".items").querySelectorAll("input[type=checkbox]");
            
            items.forEach(function (item) {
                item.disabled = false;
            });
            
            for (let i = maxQuantity; i < items.length; i++) {
                items[i].disabled = true;
                items[i].checked = false;
            }
        });
    });
});</head>
    <body>
        <h2>Gunsmith.onion</h2>
        <table align="left", style="outline-style: inset ; padding:14px; border-radius: 12px;">
            <tr>
                <td>Select Guns Quantity : </td>
                <td>
                   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    <select id="amount" style="width:2cm; height:0.5cm;">
                      <option value="1">1</option>
                      <option value="2" selected>2</option>
                      <option value="3">3</option>
                      <option value="4" >4</option>
                    </select></td>
                
            </tr>
            <tr>
                <td> <button style="width:3cm; height:1cm;">Assault-Rifle</button></td>
                <td> <button style="width:3cm; height:1cm;">Pistol</button></td>

            </tr>
            <tr>
                <td> <button style="width:3cm; height:1cm;">Sniper</button></td>
                <td> <button style="width:3cm; height:1cm;">Revolver</button></td>

            </tr>
            <tr>
                <td> <button style="width:3cm; height:1cm;">Shotgun</button></td>
                <td> <button style="width:3cm; height:1cm;">RPG</button></td>

            </tr>
            <tr>
                <td> <button style="width:3cm; height:1cm;">Machine-Gun</button></td>
                <td> <button style="width:3cm; height:1cm;">Laser-Gun</button></td>

            </tr>
            <tr>
                <td> Gun Subtotal:</td>
                <td>$<textarea style="width:2.5cm; height:0.5cm;"></textarea></td>

            </tr>
        </table>

        <table align="right", style="outline-style: inset ;padding:14px; border-radius: 12px;">
            <tr>
                <td>Select Inventory Quantity : </td>
                <td>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    <select id="amount" style="width:2cm; height:0.5cm;">
                      <option value="1">1</option>
                      <option value="2" >2</option>
                      <option value="3" selected>3</option>
                      <option value="4" >4</option>
                    </select></td>
                
            </tr>
            <tr>
                <td> <button style="width:3cm; height:1cm;">Medi-Kit</button></td>
                <td> <button style="width:3cm; height:1cm;">Molotov</button></td>

            </tr>
            <tr>
                <td> <button style="width:3cm; height:1cm;">Grenade</button></td>
                <td> <button style="width:3cm; height:1cm;">Sword</button></td>

            </tr>
            <tr>
                <td> <button style="width:3cm; height:1cm;">Knife</button></td>
                <td> <button style="width:3cm; height:1cm;">Armour</button></td>

            </tr>
            <tr>
                <td> <button style="width:3cm; height:1cm;">Land-Mine</button></td>
                <td> <button style="width:3cm; height:1cm;">C4</button></td>

            </tr>
            <tr>
                <td> Inventory Subtotal:</td>
                <td>$<textarea style="width:2.5cm; height:0.5cm;"></textarea></td>

            </tr>
        </table>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <center><button  style="width:3cm; height:1cm;">Order Now</button></center>
    </body>
</html>