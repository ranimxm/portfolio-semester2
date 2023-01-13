
    // var textValue = document.querySelector('input[name="categories"]:checked').value;
    // if(textValue == "All")
    // {
    //     window = "projects.html";
    // }
    // else if(textValue == "FrontEnd")
    // {
    //     window = "projects.html";
    // }
    // else if(textValue == "Media")
    // {
    //     location = "projects.html";
    // }
    // else
    // {
    //     location = "/projects.html";
    // };
function redirect(){
    const ucd= document.querySelector("input[value='ucd']:checked");
    var getSelectedValue = document.querySelector( 'input[name="categories"]:checked').value;  
    if(getSelectedValue === 'Media') {   
        alert(getSelectedValue + 'is checked')}
    else if(getSelectedValue === 'UCD'){
        location.href = "/projects.html";
        ucd.checked = true;
    }
    else if(getSelectedValue === 'project'){
        alert('project')
    }
    else if (getSelectedValue === 'media'){
        alert('media')
    }
    else {   
       alert("*You have not selected any season") 
        
    }  
}


