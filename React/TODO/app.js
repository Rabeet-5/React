var ulist = document.getElementById("un0rderlist")

function addtodo (){
    var uval = document.getElementById("uservalue");
    
    // creating li 
    var cli = document.createElement('li');
    var cliText = document.createTextNode(uval.value)
    cli.appendChild(cliText)
    ulist.appendChild(cli)

    // after input value , doing it empty
    uval.value = "" ;

    // now creating del btn on li 
    var dbtn = document.createElement('button') ;
    var dbtnText = document.createTextNode("DELETE")
    dbtn.appendChild(dbtnText)
    cli.appendChild(dbtn)
    dbtn.setAttribute("class","btn")
    dbtn.setAttribute("onclick" , "deleteli(this)")

    // now creating edit btn on li 
    var ebtn = document.createElement('button') ;
    var eText = document.createTextNode("Edit ") ;
    ebtn.appendChild(eText) ;
    cli.appendChild(ebtn)

    ebtn.setAttribute("class" , "btn")
    ebtn.setAttribute("onclick" , "edittodovalue(this)")

    // console.log(cli)

}


// now creating Delete button Function from li 

function deleteli(e){
    e.parentNode.remove()
}

// now creating delete all button 

function deleteall(){
    un0rderlist.innerHTML = "" ;
}

// now creating edit todo function 

function edittodovalue(e){
    
    var val = e.parentNode.firstChild.nodeValue ;
    var edittodo = prompt("Edit Value" , val) ;
    e.parentNode.firstChild.nodeValue = edittodo ;
}



