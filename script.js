//Write your JavaScript code here!



/* This block of code shows how to format the HTML once you fetch some planetary JSON!

<h2>Mission Destination</h2>

<ol>

   <li>Name: ${}</li>

   <li>Diameter: ${}</li>

   <li>Star: ${}</li>

   <li>Distance from Earth: ${}</li>

   <li>Number of Moons: ${}</li>

</ol>

<img src="${}">

 */



function init(){



	let planetoryDiv = document.getElementById("missionTarget");

	fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {

		response.json().then( function(json) {

			planetoryDiv.innerHTML = `<h2>Mission Destination</h2>

				<ol>

				<li>Name: ${json[0].name}</li>

				<li>Diameter: ${json[0].diameter}</li>

				<li>Star: ${json[0].star}</li>

				<li>Distance from Earth: ${json[0].distance}</li>

				<li>Number of Moons: ${json[0].moons}</li>

				</ol>

				<img src="${json[0].image}">`

		});

	} );

	let button = document.getElementById("formSubmit");

	let faultyItemDiv = document.getElementById("faultyItems");

	faultyItemDiv.style.visibility = "hidden";



	// add event handler for when button clicked

	button.addEventListener("click", function(e) {

		let pilotName = document.getElementById("pilotName").value;

		let coPilotName = document.getElementById("copilotname").value;

		let fuelLevel = document.getElementById("fuellevel").value;

		let cargoMass = document.getElementById("cargomass").value;





		if(pilotName === '' || coPilotName === '' || fuelLevel === '' 

				|| cargoMass === '' ){

			alert('All fields are mandetory. Please provide mandetory values');

			return;

		}else{
			if(isNaN(fuelLevel) || isNaN(cargoMass)){
				alert('Make sure to enter valid information for each field')
			}
		}









		let pilotStatusLi = document.getElementById("pilotStatus");

		let copilotStatusLi = document.getElementById("copilotStatus");

		let fuelStatusLi = document.getElementById("fuelStatus");

		let cargoStatusLi = document.getElementById("cargoStatus");



		let lunchStatusHeader = document.getElementById("launchStatus");

		lunchStatusHeader.style.color='green'



			pilotStatusLi.innerHTML = pilotName+" "+pilotStatusLi.innerHTML;

		

		copilotStatusLi.innerHTML = coPilotName+" "+copilotStatusLi.innerHTML;

		let isError=false;

		if(fuelLevel < 10000){

			fuelStatusLi.innerHTML = "fuel status stating that there is not enough fuel for the journey";

			faultyItemDiv.style.visibility = "visible";

			lunchStatusHeader.innerHTML='Shuttle not ready for launch';

			lunchStatusHeader.style.color='red'

			isError = true;



		}else{

			fuelStatusLi.innerHTML = 'Fuel level high enough for launch';

		}

		if(cargoMass > 10000){



			cargoStatusLi.innerHTML = "There is too much mass for the shuttle to take off";

			faultyItemDiv.style.visibility = "visible";

			lunchStatusHeader.innerHTML='Shuttle not ready for launch';

			lunchStatusHeader.style.color='red'

			isError = true;



		}else{

			cargoStatusLi.innerHTML = 'Cargo mass low enough for launch'

		}

		if(!isError){

			lunchStatusHeader.style.color='black'

			lunchStatusHeader.innerHTML='Shuttle is ready to lunch';



		}

		e.preventDefault();



	});



}



window.onload = init;

