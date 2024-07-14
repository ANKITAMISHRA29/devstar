<script>
	
const fromSelected = document.getElementById("from-select");
const toSelected = document.getElementById("to-select");
const from = document.getElementById("from-input");
const to = document.getElementById("to-input");
const error = document.getElementById("error");

let fromNS = "Binary", toNS = "Binary";

fromSelected.addEventListener("change", function () {
   fromNS = fromSelected.options[fromSelected.selectedIndex].text;
   from.placeholder = fromNS + " Number";
});

toSelected.addEventListener("change", function () {
   toNS = toSelected.options[toSelected.selectedIndex].text;
   to.placeholder = toNS + " Number";
});

from.addEventListener("input", function () {
   error.style.display = "none";
});

let fromValue;
document.getElementById("convert-button").addEventListener("click", function () {
   switch (fromNS) {
      case "Binary":
         fromValue = from.value;
         if (/^[01]*$/.test(fromValue)) {
            switch (toNS) {
               case "Decimal": to.value = parseInt(fromValue, 2);
                  break;
               case "Hexadecimal": to.value = parseInt(fromValue, 2).toString(16).toUpperCase();
                  break;
               case "Octal": to.value = parseInt(fromValue, 2).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Decimal":
         fromValue = from.value;
         if (/^[0-9]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": to.value = Math.abs(fromValue).toString(2);
                  break;
               case "Hexadecimal": to.value = Math.abs(fromValue).toString(16).toUpperCase();
                  break;
               case "Octal": to.value = Math.abs(fromValue).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Hexadecimal":
         fromValue = from.value;
         if (/^[0-9a-fA-F]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": to.value = parseInt(fromValue, 16).toString(2);
                  break;
               case "Decimal": to.value = parseInt(fromValue, 16);
                  break;
               case "Octal": to.value = parseInt(fromValue, 16).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Octal":
         fromValue = from.value;
         if (/^[0-7]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": to.value = parseInt(fromValue, 8).toString(2);
                  break;
               case "Decimal": to.value = parseInt(fromValue, 8);
                  break;
               case "Hexadecimal": to.value = parseInt(fromValue, 8).toString(16).toUpperCase();
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;
   }
});

</script>

<div class="card gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 overflow-hidden rounded-lg">
	<!-- Add tool here -->

	<!DOCTYPE html>
	<html lang="en">
	
	<head>
	   <meta charset="UTF-8">
	   <meta http-equiv="X-UA-Compatible" content="IE=edge">
	   <meta name="viewport" content="width=device-width, initial-scale=1.0">
	   <title>Number System Converter</title>
	
	   <link rel="stylesheet" href="style.css">
	   <script src="script.js" defer></script>
	</head>
	
	<body>
		  <div class="navbar">
			 <img src="logo.png.png" class="logo">
			  <ul>
				  <li><a href="#">Home</a></li>
				  <li><a href="#">About</a></li>
				  <li><a href="#">Contact</a></li>
			  </ul>
	   </div>
	   <main>
		  <h1 style="color:white;">Number System Converter</h1>
		  
		  <div id="select-container">
			 <select id="from-select">
				<option value="from-binary">Binary</option>
				<option value="from-decimal">Decimal</option>
				<option value="from-hexadecimal">Hexadecimal</option>
				<option value="from-octal">Octal</option>
			 </select>
			 <span>to</span>
			 <select id="to-select">
				<option value="to-binary">Binary</option>
				<option value="to-decimal">Decimal</option>
				<option value="to-hexadecimal">Hexadecimal</option>
				<option value="to-octal">Octal</option>
			 </select>
		  </div>
	
		  <div id="input-container">
			 <input type="text" id="from-input" placeholder="Binary Number">
			 <span id="error"></span>
		  </div>
	
		  <button id="convert-button">Convert</button>
	
		  <input type="text" id="to-input" placeholder="Binary Number" readonly>
	   </main>
	
	
	</body>
	
	</html>
	
</div>

<style>

</style>