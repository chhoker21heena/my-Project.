// Array to store events
let events = [];

// Function to add new event
function addEvent() {

    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;

    if (title === "" || date === "" || description === "") {
        alert("Please fill all fields!");
        return;
    }

    let event = {
        title: title,
        date: date,
        category: category,
        description: description
    };

    events.push(event);

    displayEvents();

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}


// Function to display events
function displayEvents() {

    let eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    events.forEach(function(event, index) {

        eventList.innerHTML += `
            <div style="border:1px solid #ccc; padding:10px; margin-bottom:10px; border-radius:5px;">
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Category:</strong> ${event.category}</p>
                <p>${event.description}</p>
                <button onclick="deleteEvent(${index})">Delete</button>
            </div>
        `;
    });
}


// Function to delete single event
function deleteEvent(index) {
    events.splice(index, 1);
    displayEvents();
}


// Function to clear all events
function clearAllEvents() {
    events = [];
    displayEvents();
}


// Function to add sample events
function addSampleEvents() {

    events = [
        {
            title: "Project Submission",
            date: "2026-03-01",
            category: "College",
            description: "Submit web development project."
        },
        {
            title: "Birthday Party",
            date: "2026-04-10",
            category: "Personal",
            description: "Attend friend's birthday party."
        }
    ];

    displayEvents();
}
