// Listen for heart Button 
document.getElementById('heartButton').addEventListener('click', saveCard);


function saveCard() {
//Get Entire Card from Main dashboard
var cardDetails = document.getElementById('cardTest');

var hearts = document.getElementById('heartz');

if (hearts.className === "fa fa-heart") {
    hearts.className = 'fa fa-heart-o';
}
else {
    hearts.className = 'fa fa-heart';
}

var Me = document.getElementById('saveHere')

// Me.appendChild(cardDetails);

console.log(Me);
console.log(cardDetails);

}
//Remove first Card on Page Load. 
window.addEventListener('pageshow', hideCard);

function hideCard() {
  document.getElementById("mainCard").style.display = 'none';

}


// Listen for Post Button 
document.getElementById('postBtn').addEventListener('click', PostNew);
// var mainContainer = getElementById('mainContainer');


// cardContent.innerHTML= '<p>I have <b>' + DollarValue + 'CAD</b> for sale, looking to exchange for <b>Naira(NGN)</b> at the rate of <b>'+ Rate + '</b> per Dollar.</p>';

//Assign Function
function PostNew() {
// e.preventDefault();


//Get value from first Field
var DollarValue =  document.getElementById('DollarValue').value;
var mainContainer = document.getElementById('mainContainer');
//Get Rate value
var Rate = document.getElementById('xRate').value;


var cardContent = document.getElementById('cardBody');

cardContent.innerHTML= '<p>I have <b>' + DollarValue + 'CAD</b> for sale, looking to exchange for <b>Naira(NGN)</b> at rate of <b>'+ Rate + '</b> per Dollar.</p>';



var mainCard = document.getElementById('mainCard').innerHTML;


// console.log(mainCard);

//create new div
var divParent = document.createElement('div');
//Getclassname from mainCard
divParent.innerHTML = mainCard;


mainContainer.appendChild(divParent);

// mainContainer.insertBefore(divParent, mainContainer.childNodes[0]);
}








var have = document.getElementById('have');
have.addEventListener('input', SwitchCurrency);
// var need = document.getElementById('need');


function SwitchCurrency() {
    console.log("You have changed Currency to " +have.value);
    // console.log(have.value);
    var need = document.getElementById('need');

}