//SELECTING QUEURIES

let water_freq = document.querySelector(".water_freq");
let sunlight = document.querySelector(".sunlight");

let growth_rate = document.querySelector(".growth_rate");

let firstBox =document.querySelector(".firstBox");
let secondBox=document.querySelector(".secondBox");
let thirdBox =document.querySelector(".thirdBox");


let name1 = document.querySelector(".name1");
let family1 = document.querySelector(".family1");
let pruning1 =document.querySelector(".pruning1");
let indoor1 =document.querySelector(".indoor1");

let name2 = document.querySelector(".name2");
let family2 = document.querySelector(".family2");
let pruning2 =document.querySelector(".pruning2");
let indoor2 =document.querySelector(".indoor2");

let name3 = document.querySelector(".name3");
let family3 = document.querySelector(".family3");
let pruning3 =document.querySelector(".pruning3");
let indoor3 =document.querySelector(".indoor3");

let map = document.querySelector(".bubba");
let closebtn = document.getElementById("close-popup");
let pop_up =document.querySelector(".popup-container");
closebtn.addEventListener("click",function(){
  pop_up.style.display = "none";
})

const key = "sk-lTBg65342cce4eac12622";
let plant = "sunflower";
const searchInput = document.getElementById('searchInput');
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


/*
So this is the search bar
//Commons names is the list of names
//identity is the list of identities
//



//three photos

*/


function initialBox(position,id){
  fetch(`https://perenual.com/api/species/details/` + id + `?key=` + key, requestOptions)

    .then(response => response.json())

    .then(result => {

      
      name1.innerHTML = "Common Name: "+result.common_name;
        family1.innerHTML = "Plant Family: "+result.family;
        pruning1.innerHTML= "Pruining Month: "+result.pruning_month[0];
        console.log(result.family);
        position.src = result.default_image.original_url;
      
      
      
      
      })

    
    .catch(error => console.log('error', error));
}//this is going to give the 
//photo, name, family, pruning month, and indoor


function middleBox(position,id){
  fetch(`https://perenual.com/api/species/details/` + id + `?key=` + key, requestOptions)

    .then(response => response.json())

    .then(result => {

      
      name2.innerHTML = "Common Name: "+result.common_name;
        family2.innerHTML = "Plant Family: "+result.family;
        pruning2.innerHTML= "Pruining Month: "+result.pruning_month[0];
        console.log(result.family);
        position.src = result.default_image.original_url;
      
      
      
      
      })

    
    .catch(error => console.log('error', error));
}
function lastBox(position,id){
  fetch(`https://perenual.com/api/species/details/` + id + `?key=` + key, requestOptions)

    .then(response => response.json())

    .then(result => {

      
      name3.innerHTML = "Common Name: "+result.common_name;
        family3.innerHTML = "Plant Family: "+result.family;
        pruning3.innerHTML= "Pruining Month: "+result.pruning_month[0];
        console.log(result.family);
        position.src = result.default_image.original_url;
      
      
      
      
      })

    
    .catch(error => console.log('error', error));
}

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {

    const query = searchInput.value.trim().toLowerCase();
    
    fetch(`https://perenual.com/api/species-list?key=` + key + `&q=` + query, requestOptions)
      .then(response => response.json())
      .then(result => {
          
          const commonNames = result.data.slice(0, 3).map(species => species.common_name);
          const identity = result.data.slice(0, 3).map(species => species.id);

          speciesIDs = identity;

          //###test function
          // idsOfPlants.innerHTML = identity;
          // namesOfPlants.innerHTML = commonNames;

          //3 buttons now
          let box_1 = document.querySelector(".box-1");
          let box_2 = document.querySelector(".box-2");
          let box_3 = document.querySelector(".box-3");
          dynamicHover1(speciesIDs[0]);
          dynamicHover2(speciesIDs[1]);
          dynamicHover3(speciesIDs[2]);
          box_1.addEventListener("click",function(){

            fetchSpeciesDetails(speciesIDs[0])
            pop_up.style.display  = "block";
            pop_up.style.justifyContent = "center";
            pop_up.style.alignItems = "center";
          })

          
          box_2.addEventListener("click",function(){
            fetchSpeciesDetails(speciesIDs[1])
            pop_up.style.display  = "block";
            pop_up.style.justifyContent = "center";
            pop_up.style.alignItems = "center";
          })
          
          box_3.addEventListener("click",function(){
            fetchSpeciesDetails(speciesIDs[3])
            pop_up.style.display  = "block";
            pop_up.style.justifyContent = "center";
            pop_up.style.alignItems = "center";
          })
          
          // let dscrpbtn2 = document.querySelector(".description_button2");
          // dscrpbtn2.addEventListener("click",function(){
          //   fetchSpeciesDetails(speciesIDs[1])
          // })
          // let dscrpbtn3 = document.querySelector(".description_button3");
          // dscrpbtn3.addEventListener("click",function(){
          //   fetchSpeciesDetails(speciesIDs[2])
          // })
          //fetchSpeciesDetails(speciesIDs[0])
          
        }
      )
      .catch(error => console.log('error', error));
  }
});

function dynamicHover1(id){
  fetch(`https://perenual.com/api/species/details/` + id + `?key=` + key, requestOptions)

    .then(response => response.json())

    .then(result => {
      let final_photo = document.querySelector(".final_photo");
      name1.innerHTML = "Common Name: "+result.common_name;
      family1.innerHTML = "Plant Family: "+result.family;
      pruning1.innerHTML= "Pruining Month: "+result.pruning_month[0];
      console.log(result.family);
      
      firstBox.src = result.default_image.medium_url;

      
      })

    
    .catch(error => console.log('error', error));
}
function dynamicHover2(id){
  fetch(`https://perenual.com/api/species/details/` + id + `?key=` + key, requestOptions)

    .then(response => response.json())

    .then(result => {

      name2.innerHTML = "Common Name: "+result.common_name;
      family2.innerHTML = "Plant Family: "+result.family;
      pruning2.innerHTML= "Pruining Month: "+result.pruning_month[0];
      secondBox.src = result.default_image.medium_url;

      
      })

    
    .catch(error => console.log('error', error));
}
function dynamicHover3(id){
  fetch(`https://perenual.com/api/species/details/` + id + `?key=` + key, requestOptions)

    .then(response => response.json())

    .then(result => {

      name3.innerHTML = "Common Name: "+result.common_name;
      family3.innerHTML = "Plant Family: "+result.family;
      pruning3.innerHTML= "Pruining Month: "+result.pruning_month[0];
      console.log(result.family);

      thirdBox.src = result.default_image.medium_url;

      
      })

    
    .catch(error => console.log('error', error));
}

// Function to fetch species details by ID
function fetchSpeciesDetails(id) {
  fetch(`https://perenual.com/api/species/details/` + id + `?key=` + key, requestOptions)

    .then(response => response.json())

    .then(result => {

      //data here!

      let plantName = document.querySelector(".plantName");
      let water = document.querySelector(".water");
      let sunlight = document.querySelector(".sunlight");
      let growth = document.querySelector(".growth");
      let description = document.querySelector(".description");
      plantName.innerHTML = "Common Name: "+result.common_name;
      water.innerHTML ="Water Frequency: "+ result.watering;
      sunlight.innerHTML = "Sunlight Needed: "+result.sunlight;
      growth.innerHTML = "Growth Rate: "+result.growth_rate;
      description.innerHTML= "Description: "+result.description;
      map.src=result.hardiness_location.full_url;
      let final_photo =document.querySelector(".final_photo");
      final_photo.src = result.default_image.medium_url;
      console.log(result.hardiness_location.full_url)
      //firstBox.src = result.default_image.medium_url;

      
      })

    
    .catch(error => console.log('error', error));
};

function debugga(){
console.log("hi");
fetch(`https://perenual.com/api/species-list?key=sk-u7aS6534625429dfd2627`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


}
//debugga()
initialBox(firstBox,540);
middleBox(secondBox,677);
lastBox(thirdBox,253);