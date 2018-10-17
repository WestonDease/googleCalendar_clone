//global variable view to specify view type (month, week, day)
var view 


// function to take in view variable and alter styling
function styleChange(view) {
    //grab div block relating to view type 
    var x = document.getElementById(`${view}View`);
    //logically 
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}

// function to set view variable based on drop down selection
function setView(){
    var e = document.getElementById("viewSelect").value;
    var view = e.options[e.selectedIndex].text;
}


// call styleChange function when view is selected
$('#dropDown').on('click', setview)
$('#dropDown').on('click', styleChange )
