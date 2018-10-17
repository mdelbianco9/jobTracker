
// Holds the new const Objs created by clicking on Submit
var newJobArray = [];


 // Gets info from Inputs 
var getCompany = document.getElementById('company');
var getDate = document.getElementById('date');
var getJobTitle = document.getElementById('jobTitle');
var getAppLink = document.getElementById('appLink');
var getNotes = document.getElementById('notes');
var jobList = document.getElementById('jobList');


// Constructor Function

function Job(company, date, title, link, notes){
	this.company = company;
	this.date = date; 
	this.jobTitle = title;
	this.jobLink = link;
	this.notes = notes;
	// function that creates text box
	// function toggle close button 

	// Pushes obj to newJobArray array
	pushToArray(newJobArray, this);

}

// Pushes new object to array

function pushToArray(arr, object){
	arr.push(object);
}



// Function for button, creates constructor
var counter = 0;
function createJob() {

	// Creates new job from inputs
	var newObj = new Job(getCompany.value, getDate.value, getJobTitle.value, getAppLink.value, getNotes.value)

	console.log(newJobArray)

	// Goes through the newly created Constr Obj and does stuff 
	for(prop in newObj){


		var createLeftDiv = document.createElement('li');
		var createRightDiv = document.createElement('li');

		var createCompany = document.createElement('h2');
		var createDate = document.createElement('h6');
		var createTitle = document.createElement('h5');

		var createNotesLabel = document.createElement('h5');
		var createNotes = document.createElement('textarea');
		var createRatingsLabel = document.createElement('h5');

		var createCloseBtn = document.createElement('button');

		// Company
		createCompany.textContent = newObj.company;
		createCompany.classList.add('company');

		// Date
		createDate.textContent = "Date Applied: " + newObj.date;
		createDate.classList.add('date');

		// NotesLabel & Notes
		createNotes.textContent = newObj.notes;
		createNotes.classList.add('notes', 'form-control');

		// Job Title
		createTitle.textContent = "Position type: " + newObj.jobTitle;
		createTitle.classList.add('title')

		// Yellow Close Btn
		createCloseBtn.textContent = "Close";
		createCloseBtn.classList.add('btn', 'btn-yellow', 'btn-md', 'closeBtn');

		// Newly Created Job
		createLeftDiv.classList.add('leftDiv', 'animated', 'fadeOut');

		createLeftDiv.appendChild(createCompany);
		createLeftDiv.appendChild(createCloseBtn);
		createLeftDiv.appendChild(createDate);
		createLeftDiv.appendChild(createTitle);
		createLeftDiv.appendChild(createNotesLabel);
		createLeftDiv.appendChild(createNotes);
		createLeftDiv.appendChild(createRatingsLabel);
		

		document.getElementById('jobList').appendChild(createLeftDiv);

		// Gives an id number to each created obj/div
		newObj.id=counter;

		break;
	}

	var selectBtn = document.querySelectorAll('.btn-yellow');
	var selectLi = document.querySelectorAll('.leftDiv');
	
	for(i=0; i<selectBtn.length; i++){
		selectBtn[i].addEventListener('click', function(){
			var div = this.parentElement;
	    	var on = div.style.display = "none";
	    	// div.classList.toggle('changeLeftDivBg')
	    	console.log(selectBtn)

		})
	}
};

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('changeLeftDivBg');
    console.log(ev.target);
  }
}, false);


// Copy newJobArray
function copy(arr){
	var copy = [];
	for(i=0; i<arr.length; i++){
		copy.push(arr[i]);
	}
	return copy;
}


// Dynamic sort function
function sortBy(someObjArray, prop){
	someObjArray.sort(
		function(a,b){
			  if (a[prop].toUpperCase() > b[prop].toUpperCase()){
			  	 return 1;
			  }else {
			    return -1;
			}
		}
	);
	return someObjArray;
}

// WHy doesnt this work? Scope? 
var sortCompany = sortBy(copy(newJobArray), "company");

// Trying to get the sort function to work on the click of a button
// function funcOne(arr, prop, sort){
// 	console.log(sort(arr, prop));
// }

// funcOne(newJobArray, "company", sortBy);

// It works!!!
document.getElementById('sortCompany').addEventListener('click', function(){
	console.log(sortBy(copy(newJobArray), "company")); 
})




