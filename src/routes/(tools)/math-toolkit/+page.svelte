<script>

</script>

<div class="card gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 overflow-hidden rounded-lg">
	<!-- Add tool here -->
</div>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}
 .navbar{
  width: 100%;
  margin: auto;
  padding: 35px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
 }
 .logo{
  width: 120px;
  cursor: pointer;
  background-color: white;
 }
 .navbar ul li{
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  position: relative;
 }
 .navbar ul li a{
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
 }
 .navbar ul li::after{
  content: '';
  height: 3px;
  width: 0;
  background: #009688;
  position: absolute;
  left: 0;
  bottom: -10px;
  transition: 0.5s;
 }
 .navbar ul li:hover::after{
  width: 100%;
 }
body,
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
   background-image: linear-gradient(214deg,
      #ffffff 14%,
      #f7c9f8 46%,
      #a0aea9 86%);
  background-image: url(num.png);
  min-height: 100vh;
}

main {
  background-image: linear-gradient(325deg, #101010, #101010, #101010);


  padding: 120px 100px;
  border-radius: 10px;
}

#select-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

select {
  margin: 10px 20px;
  padding: 7px 15px;
  outline: none;
}

input {
  background-color: #fff;
  min-width: 350px;
  margin: 15px;
  padding: 15px;
  border: none;
  border-radius: 8px;
  outline: none;
  transition: 0.5s;
}

input:focus {
  box-shadow: 0px 6px 10px 1px rgb(255, 255, 255);
}

#convert-button {
  padding: 7px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s transform;
}

#convert-button:active {
  transform: scale(0.9);
}

#input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#error {
  display: none;
  color: #f00;
  font-size: small;
  margin: 0 0 10px 30px;
  text-align: start;
}

#written-by-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 5px;
}

#written-by-container a {
  color: #000;
}
</style>
