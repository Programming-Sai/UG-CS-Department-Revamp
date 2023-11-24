


function dropDown(id, idForDrop) {      
            document.getElementById(`${id}`).classList.toggle("drop-down");
            if(document.getElementById(`${id}`).classList.contains("drop-down")){
                document.getElementById(`${idForDrop}`).innerHTML = `<i class="fa-solid fa-caret-up" style="color: #ffffff;"></i>`;        
            }else {
                document.getElementById(`${idForDrop}`).innerHTML = '<i class="fa-solid fa-caret-down" style="color: #ffffff;"></i>';
            }        
}
 
 
 
    
