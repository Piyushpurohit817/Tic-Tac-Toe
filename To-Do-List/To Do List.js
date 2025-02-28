document.querySelector("button").addEventListener("click", function () {
  let value = document.querySelector("#taskInput").value;
  let input = document.querySelector("#taskInput")
  if (value == "") {

    alert("Please enter a valid input!");
  
} else {

    let list = document.createElement("li");
    list.classList.add("taskItem")
    
    let textnode = document.createTextNode(value  + " ")
    list.appendChild(textnode)
    
    let check = document.createElement("input");
    check.type = "checkbox";
    check.setAttribute("class","check")
    list.appendChild(check)

    check.addEventListener("change", function(){
      if(this.checked){
        this.parentElement.style.textDecoration = "line-through"
      }else{
        this.parentElement.style.textDecoration = "none"
      }
    })

    let del = document.createElement("button")
    del.innerHTML = "Delete"
    del.classList.add("deleteBtn")
    let span = document.createElement("span")
    span.appendChild(del)
    list.appendChild(span)

    document.querySelector('#taskList').appendChild(list)  

    del.addEventListener("click",function(){
      list.parentNode.removeChild(list)
    })
 
  }
});
