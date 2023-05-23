


document.getElementById("notes").value = localStorage.getItem("notes");


//const save = document.getElementById('save');
//save.onclick =()=> {
    //notevalue = document.getElementById('notes').value;
    //updateLS()
    //document.getElementById('date').innerHTML = 'Last Saved:' + Date();
  
//}

function save() {
    notevalue = document.getElementById('notes').value;
    updateLS()
    document.getElementById('time').value = Date();
    timevalue = document.getElementById('time').innerHTML;
    
}
function updateLS() {
    localStorage.setItem("notes", notevalue);
    
    
}