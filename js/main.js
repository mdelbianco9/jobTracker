

var newJob = [];

var demoObj = {
	company: "",
	date: '',
	jobTitle: '',
	link: '',
	notes: '',
	rating: '',
	closed: '',
	response: '',
}

// Calculates rating
	// getRating: function(){}
	// Toggle: makes closed true or false
	// getStatus: function(){}


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
	this. notes = notes;
	// function that creates text box
	// function toggle close button 

	pushToArray(newJob, this);

}

// Pushes new object to array

function pushToArray(arr, object){
	arr.push(object);
}



// Function for button, creates constructor

function createJob() {

	// Creates new job from inputs
	var newObj = new Job(getCompany.value, getDate.value, getJobTitle.value, getAppLink.value, getNotes.value)

	console.log(newJob)


	for(prop in newObj){

	var createLeftDiv = document.createElement('div');
	var createRightDiv = document.createElement('div');

	var createCompany = document.createElement('h2');
	var createDate = document.createElement('h6');

	var createNotesLabel = document.createElement('h5');
	var createNotes = document.createElement('p');
	var createRatingsLabel = document.createElement('h5');


	console.log(newObj.company);
	break;


	}


	
};


// function createHTML(arr){
	
	

// 	createCompany.textContent = arr[0].company;
// 	createDate.textContent = arr[0].date;

	
// 	createLeftDiv.appendChild(createCompany);
// 	createLeftDiv.appendChild(createDate);

// 	document.getElementById('jobList').appendChild(createLeftDiv);
// 	document.getElementById('jobList').appendChild(createRightDiv);
// }






