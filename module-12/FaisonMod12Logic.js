//DeJanae Faison Module 12 Logic

//Favorite Book Array
const favoriteBooks = ["Fantastic Mr Fox",
    "The Outsiders (King)",
    "Salem Lot",
    "Priory of the Orange Tree",
    "The Lord of the Rings",
    "Warrior of the Altaii",
    "Genki",
    "DND Player Handbook",
    "Japanes Kanji Power",
    "100 Things Every Design Should Know About People"
]



function topBottom(){
    //  Get the area where the list is
    const listHolder = document.getElementById("listContainer");
    // Empty its previous contents
    listHolder.innerHTML="";

    //For each book in the index:
    favoriteBooks.forEach((book,index)=>{
     //
     const numberBook = document.createElement('ol');
     numberBook.textContent = `Book #${index+1}: ${book}`;
     listHolder.appendChild(numberBook);

    });
}

function bottomTop(){
    const listHolder = document.getElementById("listContainer");
    listHolder.innerHTML="";
    const bookLength = favoriteBooks.length;

    favoriteBooks.slice().reverse().forEach((book,index)=>{
     const numberBook = document.createElement('ol');
     numberBook.textContent = `Book #${bookLength-index}: ${book}`;
     listHolder.appendChild(numberBook);

    });
    
}