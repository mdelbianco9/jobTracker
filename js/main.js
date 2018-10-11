

var newJob = [];

var demoObj = {
	company: "",
	date: '',
	jobTitle: '',
	link: '',
	notes: '',
	rating: '',
	closed: '',
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
	this.notes = notes;
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
		var createTitle = document.createElement('h5');

		var createNotesLabel = document.createElement('h5');
		var createNotes = document.createElement('textarea');
		var createRatingsLabel = document.createElement('h5');

		var createCloseBtn = document.createElement('button');

		createCompany.textContent = newObj.company;
		createCompany.classList.add('company');

		createDate.textContent = "Date Applied: " + newObj.date;
		createDate.classList.add('date');

		createNotesLabel.textContent = "Notes";
		createNotesLabel.classList.add('notesLabel')
		createNotes.textContent = newObj.notes;
		createNotes.classList.add('notes', 'form-control');

		createTitle.textContent = "Position type: " + newObj.jobTitle;

		createCloseBtn.textContent = "Close";
		createCloseBtn.classList.add('btn', 'btn-yellow', 'btn-md', 'closeBtn');

		createLeftDiv.classList.add('leftDiv', 'animated', 'fadeIn');

		createLeftDiv.appendChild(createCompany);
		createLeftDiv.appendChild(createCloseBtn);
		createLeftDiv.appendChild(createDate);
		createLeftDiv.appendChild(createTitle);
		createLeftDiv.appendChild(createNotesLabel);
		createLeftDiv.appendChild(createNotes);
		createLeftDiv.appendChild(createRatingsLabel);
		

		document.getElementById('jobList').appendChild(createLeftDiv);

		console.log(newObj.company);
		break;
	}
};


// Close Btn function

function closeBtn(){
	var counter = 0;

}


$(".btn-green").click(function(){
    $(".leftDiv").fadeIn();
});




