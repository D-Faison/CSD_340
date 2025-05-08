//DeJanae Faison To Do List Logic


//Add new element
function addTask(){
    //Check if input is empty and send alert if empty
    const userInput = document.getElementById("userInput");
    const task = userInput.value.trim();

    if(task ===""){

        alert("+++++ Please Enter Task +++++");
    } else{
        
        //Create a new list item and append it to the list
        const listItem = document.createElement("li")
        listItem.textContent = task;
        document.getElementById("userList").appendChild(listItem);
        //Clear input field 
        userInput.value="";
    }
    
}


function lastTaskDelete(){
    //find the last child of the list 
    const userList = document.getElementById('userList');
    if(userList.lastElementChild){
        userList.removeChild(userList.lastElementChild);
    }else{
        //if there is no more items display message
        alert("+++++++ No Items to Delete +++++++")
    }

}

function displayToDoList(){
    //Fecth all the elements of the list and the empty display
    const originalList = document.querySelectorAll('#userList li');
    const displayList = document.getElementById("displayList");

    //Clear display
    displayList.innerHTML="";

    //Copy tasks and number
    originalList.forEach((item,index)=>{
        //For each item in the index create a new li element
        const numberedItem = document.createElement('li');
        //each item gets a number + 1 of it's index 
        numberedItem.textContent = `Item ${index + 1}. ${item.textContent}`;
        //each item is then appended to the list
        displayList.appendChild(numberedItem)
    })
}