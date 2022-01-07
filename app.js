/**
 * Application of Principles of Programming
 * Assignment Template 2021 - Javascript
 * @author Tim Orman
 */

/**
 * event handlers can go here
 */
//calculator event handlers - one for each button
document.getElementById("btnSubtract").addEventListener("click", subtractNumbers);
document.getElementById("btnMultiply").addEventListener("click", multiplyNumbers);
document.getElementById("btnDivide").addEventListener("click", divideNumbers);
//calculator api event handlers - for each single button
document.getElementById("btnAddAPI").addEventListener("click", addNumbersAPI);
document.getElementById("btnSubtractAPI").addEventListener("click", subtractNumbersAPI);
document.getElementById("btnMultiplyAPI").addEventListener("click", multiplyNumbersAPI);
document.getElementById("btnDivideAPI").addEventListener("click", divideNumbersAPI);
//journal event handlers - one for each button
document.getElementById("btnUploadJournal").addEventListener("click", uploadJournal);
document.getElementById("btnDeleteEntry").addEventListener("click", deleteEntry);
document.getElementById("btnAddEntry").addEventListener("click", addEntry);
//thoughts of the day event listeners
document.getElementById("btnUploadThoughts").addEventListener("click", uploadThoughts);
document.getElementById("btnDeleteThought").addEventListener("click", deleteThoughtEntry);
document.getElementById("btnAddThought").addEventListener("click", addThoughtEntry);

/**
 * callAPI()
 *
 * This function uses the built-in (to the browser) XMLHttpRequest object to request data from a server
 * The responseText property returns the response from the server as a string.
 *
 * You can use this function to complete calls to the api from the calculator functions.
 * Examine the url and elResponse parameters.
 * What types of values should they contain when passing them as arguments and calling this function?
 * @param url
 * @param elResponse
 */
function callAPI(url, elResponse) {
    //use the code from the lab task to complete the function
    let xhttp = new XMLHttpRequest();
    let response;
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
             response = JSON.parse(this.responseText);
            //console.log(response.result);
            document.getElementById(elResponse).setAttribute("value", response.result);
        }
      // document.getElementById(elResponse).setAttribute("value", response.result);
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

/**
 * Calculator Stuff
 */
/**
 * addNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function addNumbers(){
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.getElementById("add2").value);
    let total = add1+add2;
     document.getElementById("inputAdd").setAttribute("value", total.toString());
}

/**
 * addNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function addNumbersAPI(){
    //use the code from the lab task to complete the function
    let add1 = Number(document.getElementById("add1").value);
    let add2 = Number(document.getElementById("add2").value);
    let result = "/api/add?num1="+add1+"&num2="+add2;
    callAPI(result,"inputAdd");
}

/**
 * subtractNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function subtractNumbers(){
    let num1 = Number(document.getElementById("sub1").value);
    let num2 = Number(document.getElementById("sub2").value);
    let difference = num1 - num2;
    document.getElementById("inputSubtract").setAttribute("value", difference.toString());
}

/**
 * subtractNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function subtractNumbersAPI(){
    let num1 = Number(document.getElementById("sub1").value);
    let num2 = Number(document.getElementById("sub2").value);
    let difference = "/api/subtract?num1="+num1+"&num2="+num2;
    callAPI(difference,"inputSubtract");
}

/**
 * multiplyNumbers()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function multiplyNumbers(){
    let num1 = Number(document.getElementById("multi1").value);
    let num2 = Number(document.getElementById("multi2").value);
    let multiple = num1*num2;
   document.getElementById("inputMultiply").setAttribute("value", multiple.toString());
}

/**
 * multiplyNumbersAPI()
  * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function multiplyNumbersAPI(){
    let num1 = Number(document.getElementById("multi1").value);
    let num2 = Number(document.getElementById("multi2").value);
    let result = "/api/multiply?num1="+num1+"&num2="+num2;
    callAPI(result,"inputMultiply");

}

/**
 * divideNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 * NOTE: once you have this function operational you need to validate the divisor
 * and ensure you do not have divide by zero errors.
 */
function divideNumbers(){
    let num1 = Number(document.getElementById("divi1").value);
    let num2 = Number(document.getElementById("divi2").value);
    let divisor = num1/num2;
    let result = "#DIV/0";
    if (num2 == 0){
        document.getElementById("inputDivide").setAttribute("value", result);
    }
    else{
        document.getElementById("inputDivide").setAttribute("value", divisor.toString());
    }
}

/**
 * divideNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function divideNumbersAPI(){
    let num1 = Number(document.getElementById("divi1").value);
    let num2 = Number(document.getElementById("divi2").value);
    let result = "/api/divide?num1="+num1+"&num2="+num2;
    callAPI(result,"inputDivide");

}

/**
 * Journal Stuff
 */
//journalEntriesArray.journalEntry = undefined;


/**
 * getJournalEntries() - Get list of journal entries
 *
 * Write a function that will
 * * retrieve the JSON file of journal entries
 * * format the entries into a single string with appropriate html tags
 * * set the content of the "listEntries" element to the formatted string
 */
function getJournalEntries(){
    let journalEntry;
    let url = "/api/journal";
    let response = "ERROR has occurred whilst getting journal entries.";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            response = JSON.parse(this.responseText);
            journalEntry = JSON.parse(response.result);
            let journalEntriesArray = "";
            for (let journalEntryObject of journalEntry.journals) {
                journalEntriesArray = journalEntriesArray + "<li date= '" + String(journalEntryObject.date)  + "' onclick ='populateEntry(this)'  name = '" + String(journalEntryObject.name) + "' note= '" + String(journalEntryObject.note)  + "' id='" + journalEntry.journals.indexOf(journalEntryObject) + "' >" + String(journalEntryObject.date) + "</li>";
            }
            document.getElementById("listEntries").innerHTML = journalEntriesArray;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

getJournalEntries();
/**
 * Dont forget to call the function that will retrieve the list entries when the page loads
 */


/**
 * populateEntry(item)
 *
 * Write a function that will
 * * get the data for a single journal entry from item parameter
 * * extract the individual pieces of data from the entry
 * * and put each piece of information into the text fields on the html page
 * @param item
 */
function populateEntry(item){
    document.getElementById("idEntry").setAttribute("value", item.getAttribute("id"));
     document.getElementById("dateEntry").setAttribute("value", item.getAttribute("date"));
     document.getElementById("namEntry").value = item.getAttribute("name");
     document.getElementById("txtNote").value =  item.getAttribute("note");
}

/**
 * addEntry() - add a journal entry
 *
 * Write a function that will
 * * create a new node list item element
 * * create a new text node element for the new list item and attach it to the new list item
 * * set other values of the list item - date, class, id, notes, student
 * * append the new node to the list of entries
 */
function addEntry(){
     let newEntryNode = document.createElement("li");
     let newEntryText = document.createTextNode((document.getElementById("dateAdd").value));
     newEntryNode.appendChild(newEntryText);
     newEntryNode.setAttribute("date", document.getElementById("dateAdd").value);
     newEntryNode.setAttribute("class", "w3-hover-blue");
     newEntryNode.setAttribute("id", document.getElementById("idAdd").value);
     newEntryNode.setAttribute("name", document.getElementById("nameAdd").value);
     newEntryNode.setAttribute("note", document.getElementById("txtAdd").value);
     newEntryNode.setAttribute("onclick", "populateEntry(this)");
     document.getElementById("listEntries").appendChild(newEntryNode);


}

/**
 * deleteEntry()
 *
 * Write a function that will
 * * delete a journal entry (list item) from the html page
 */
function deleteEntry(){
    let deleter = document.getElementById("idEntry").getAttribute("value");
    document.querySelector("li[id='"+ deleter+"']").remove();

}


/**
 * uploadJournal()
 *
 * Write a function that will
 * * get the data from the list entries on the html page
 * * put the entries from the list into a collection
 * * convert the collection into a JSON object
 * * send JSON object to the url in the flask api
 * * and handle the response
 */
function uploadJournal(){
    let listEntries = document.getElementById("listEntries");
    let listItems  = listEntries.getElementsByTagName("li");
    let uploadObject = {journals: []};

    for(let item of listItems){
        let entry = {};
        entry.name = item.getAttribute("name");
        entry.note = item.getAttribute("note");
        entry.date = item.getAttribute("date");
        uploadObject.journals.push(entry);
    }
    let url = "/api/journal";
    let response = "";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
             response = JSON.parse(this.responseText);
             alert("hurray you have uploaded the journal");
        }
    };
    xhttp.open("PUT", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(uploadObject));

}


function testJSON(){
    console.log("testJSON output");
    let journalEntryObject = {
        "journalEntries": [{
            date: "Week31(Feb 1st)",
            name: "Completed",
            note: "Finished all the tasks since they were pretty doable and straight forward."
        },
            {
                date: "Week32(Feb 9th)",
                name: "Completed",
                note: "Finished most of the python tasks though still have a bit of issues with how to use loops"
            },
            {
                date: "Week 33(Feb15th)",
                name: "Completed and tested tasks",
                note: "Completed tasks and found it easier to finish the tasks prior to the lab so that I can complete all my failed tasks then and also tried using “use strict “method."
            }]
    }; // declare journal entries in javascript
    let journalEntryString = JSON.stringify(journalEntryObject); // turn into JSON string
    console.log(journalEntryString);
}

testJSON();

/**
 * Thought of the day stuff
 */

function thoughtJSON(){
    let thoughtsOfDay = {
        "thoughts": [{
                id: "T01",
                name: "Iam proud of myself for all the big and little victories."
            },
            {
                id: "T02",
                name: "Its only a thought and a thought can be changed."
            },
            {
                id: "T03",
                name: "My future will be what i choose to make it."
            },
            {
                id: "T04",
                name: "Iam fine with who I am and I love who am becoming."
            }]
    };
    let thoughtString = JSON.stringify(thoughtsOfDay);
    console.log(thoughtString);
}

thoughtJSON();
// below is work needed to be done for thought of the day
function getThoughtsEntries() {
    let thoughtEntry;
    let url = "/api/thoughtOfTheDay";
    let response = "ERROR has occurred whilst getting thoughts.";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            response = JSON.parse(this.responseText);
            thoughtEntry = JSON.parse(response.result);
            let thoughtEntriesArray = "";
            for (let thoughtEntryObject of thoughtEntry.thoughts) {
                thoughtEntriesArray = thoughtEntriesArray + "<li id= '" + String(thoughtEntryObject.id) + "' onclick ='populateThought(this)'  name = '" + String(thoughtEntryObject.name) + "' id='" + thoughtEntry.thoughts.indexOf(thoughtEntryObject) +  "' >" + String(thoughtEntryObject.id) + "</li>";
            }
            document.getElementById("thoughtEntries").innerHTML = thoughtEntriesArray;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

getThoughtsEntries();

function populateThought(thing){
    document.getElementById("idThoughtEntry").setAttribute("value", thing.getAttribute("id"));
     document.getElementById("nameThoughtEntry").value =  thing.getAttribute("name");
}


function addThoughtEntry(){
     let newEntryNode = document.createElement("li");
     let newEntryText = document.createTextNode((document.getElementById("idAddThought").value));
     newEntryNode.appendChild(newEntryText);
     newEntryNode.setAttribute("id", document.getElementById("idAddThought").value);
     newEntryNode.setAttribute("class", "w3-hover-blue");
     newEntryNode.setAttribute("name", document.getElementById("nameAddThought").value);
     newEntryNode.setAttribute("onclick", "populateThought(this)");
     document.getElementById("thoughtEntries").appendChild(newEntryNode);


}


function deleteThoughtEntry(){
    let deleter = document.getElementById("idThoughtEntry").getAttribute("value");
    document.querySelector("li[id='"+ deleter+"']").remove();

}



function uploadThoughts(){
    let thoughtEntries = document.getElementById("thoughtEntries");
    let thoughtItems  = thoughtEntries.getElementsByTagName("li");
    let uploadObject = {thoughts: []};

    for(let item of thoughtItems){
        let entry = {};
        entry.name = item.getAttribute("name");
        entry.id = item.getAttribute("id");
        uploadObject.thoughts.push(entry);
    }
    let url = "/api/thoughtOfTheDay";
    let response = "";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
             response = JSON.parse(this.responseText);
             alert("hurray you have uploaded a thought");
        }
    };
    xhttp.open("PUT", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(uploadObject));

}
function randomGenerator(){
    let thoughtEntries = document.getElementById("thoughtEntries");
    let thoughtItems  = thoughtEntries.getElementsByTagName("li");

    let randomNumber = Math.floor(Math.random() * thoughtItems.length);
    document.getElementById('thoughtDisplay').innerHTML = thoughtItems[randomNumber].getAttribute("name");
}
randomGenerator();







