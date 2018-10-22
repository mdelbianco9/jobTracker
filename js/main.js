
// Holds the new const Objs created by clicking on Submit
var newJobArray = [];

// Date Stuff
var date = new Date();
var dates = [];
var getDate = date;
dates.push(getDate.toString().split(' '));
console.log(dates)
var day = dates[0][0];
var month = dates[0][1];
var date = dates[0][2];
var year = dates[0][3];
var theDate = day + " " + month + " " + date + " " + year;
console.log(theDate);

 // Gets info from Inputs 
var getCompany = document.getElementById('company');
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
	var newObj = new Job(getCompany.value, theDate, getJobTitle.value, getAppLink.value, getNotes.value)

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
		createLeftDiv.classList.add('leftDiv', 'effect7');

		createLeftDiv.appendChild(createCompany);
		createLeftDiv.appendChild(createCloseBtn);
		createLeftDiv.appendChild(createDate);
		createLeftDiv.appendChild(createTitle);
		createLeftDiv.appendChild(createNotesLabel);
		createLeftDiv.appendChild(createNotes);
		createLeftDiv.appendChild(createRatingsLabel);
		
		document.getElementById('jobList').appendChild(createLeftDiv);

		// Makes the new list item apppend to the beggining of the list
		var list = document.getElementById('jobList');
		document.getElementById('jobList').insertBefore(createLeftDiv, list.childNodes[0]);
		

		// Makes it so the transition effect can happen
		setTimeout(function(){
			createLeftDiv.classList.add('show');
		},100);

		// Closes Li when clos eis clicked
		for (i = 0; i < close.length; i++) {
		    close[i].onclick = function() {
		      var div = this.parentElement;
		      div.style.display = "none";
	    	}
	  	}

		break;
	}
	// Focuses on the fist input
		getCompany.focus();

		// Clears inputs upon submission
		var inputs = document.getElementsByClassName('clear');
		setTimeout(function(){
			for(i=0; i<inputs.length; i++){
			inputs[i].value = "";	
		}
	}, 500);
		
};

// Invokes createJob() function on press of enter key for all inputs
var inputs = document.getElementsByClassName('form-control');
for(i=0; i<inputs.length; i++){
	inputs[i].addEventListener('keypress', function(event){
	if(event.keyCode === 13){
		createJob();

	}
});
}


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
		createLeftDiv.classList.add('leftDiv', 'effect7', 'show');

		createLeftDiv.appendChild(createCompany);
		createLeftDiv.appendChild(createCloseBtn);
		createLeftDiv.appendChild(createDate);
		createLeftDiv.appendChild(createTitle);
		createLeftDiv.appendChild(createNotesLabel);
		createLeftDiv.appendChild(createNotes);
		createLeftDiv.appendChild(createRatingsLabel);
		
		document.getElementById('jobList').appendChild(createLeftDiv);

		// Focuses on the fist input
		getCompany.focus();

		// THIS IS CAUSING MY 2ND CHILD TO DISAPEAR!!!
		// Closes Li when close is clicked
		for (i = 0; i < close.length; i++) {
		    close[i].onclick = function() {
		      var div = this.parentElement;
		      div.style.display = "none";
	    	}
	  	}


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


// Chaneg Theme
document.getElementById('changeTheme').addEventListener('click', function(){
	document.getElementById('jobEntry').style.backgroundColor = "red";
	document.getElementById('side-nav').style.backgroundColor = "red";
})



