
// Holds the new const Objs created by clicking on Submit
var newJobArray = [];

var date = new Date();
 // Gets info from Inputs 
var getCompany = document.getElementById('company');
var getDate = date.getMonth()  + "/" + date.getDay() + "/" + date.getFullYear();
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

// Closes Li when Close btn is clicked
var close = document.getElementsByClassName("closeBtn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function createJob() {

	// Creates new job from inputs
	var newObj = new Job(getCompany.value, getDate, getJobTitle.value, getAppLink.value, getNotes.value)

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
		createLeftDiv.classList.add('leftDiv', 'effect7', 'animated', 'fadeOut');

		createLeftDiv.appendChild(createCompany);
		createLeftDiv.appendChild(createCloseBtn);
		createLeftDiv.appendChild(createDate);
		createLeftDiv.appendChild(createTitle);
		createLeftDiv.appendChild(createNotesLabel);
		createLeftDiv.appendChild(createNotes);
		createLeftDiv.appendChild(createRatingsLabel);
		
		document.getElementById('jobList').appendChild(createLeftDiv);

		// Closes Li when clos eis clicked
		for (i = 0; i < close.length; i++) {
		    close[i].onclick = function() {
		      var div = this.parentElement;
		      div.style.display = "none";
	    	}
	  	}

		break;
	}
};

// Click on List item to turn red
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('changeLeftDivBg');
    console.log(ev.target);
  }
}, false);


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

function createSortedJobs(newObj) {
	// Goes through the newly created Constr Obj and does stuff 
	for(i=0; i<newObj.length; i++){

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
		createCompany.textContent = newObj[i].company;
		createCompany.classList.add('company');

		// Date
		createDate.textContent = "Date Applied: " + newObj[i].date;
		createDate.classList.add('date');

		// NotesLabel & Notes
		createNotes.textContent = newObj[i].notes;
		createNotes.classList.add('notes', 'form-control');

		// Job Title
		createTitle.textContent = "Position type: " + newObj[i].jobTitle;
		createTitle.classList.add('title')

		// Yellow Close Btn
		createCloseBtn.textContent = "Close";
		createCloseBtn.classList.add('btn', 'btn-yellow', 'btn-md', 'closeBtn');

		// Newly Created Job
		createLeftDiv.classList.add('leftDiv', 'effect7', 'animated', 'fadeOut');

		createLeftDiv.appendChild(createCompany);
		createLeftDiv.appendChild(createCloseBtn);
		createLeftDiv.appendChild(createDate);
		createLeftDiv.appendChild(createTitle);
		createLeftDiv.appendChild(createNotesLabel);
		createLeftDiv.appendChild(createNotes);
		createLeftDiv.appendChild(createRatingsLabel);
		
		document.getElementById('jobList').appendChild(createLeftDiv);


		// Gives an id number to each created obj/div
		// newObj.id=counter;


		// break;
	}
};



// Sort by Company
document.getElementById('sortCompany').addEventListener('click', function(){
	var func = sortBy(newJobArray, "company");
	console.log(func);
	document.getElementById('jobList').innerHTML = "";
	createSortedJobs(newJobArray)
	
})


// Sort by job Title
document.getElementById('sortJobTitle').addEventListener('click', function(){
	var func = sortBy(newJobArray, "jobTitle");
	console.log(func);
	document.getElementById('jobList').innerHTML = "";
	// Create a function that appends newJobsArray stuff
	createSortedJobs(newJobArray)
})






