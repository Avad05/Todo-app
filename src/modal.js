import sideBar from "./sidebar";
import severity from "./severity";
export function hiddenModal(){
    const content = document.querySelector(".content");
    const modal = document.createElement('div');
    const modal2 = document.createElement('div');

    modal.id='taskModal';
    modal.className='modal';
    modal2.classList.add("modal2");
    modal.style.display = 'none'; 
    modal.innerHTML = `
    <div class = "modal-content">
    <h2>Enter the Project Title</h2>
    <input type = "text" id = "projectTitle" placeholder = "Project Title">
    <div class = "Modal-button">
    <button id = "submit">Submit</button>
    <button id = "cancel">Cancel</button>
    </div>
     </div>`


content.appendChild(modal);

const cancelButton = document.querySelector("#cancel");
const submitButton = document.querySelector("#submit");
const inputTitle = document.querySelector("#projectTitle");


/*const submitTitle = document.querySelector("#submit2");
const taskTitle = document.querySelector("#taskName");*/

cancelButton.addEventListener('click', ()=>{
    modal.style.display = 'none';
    inputTitle.value = '';
})

let input;
let output;
let inputTaskName;

var projectTitleInput = 0;
submitButton.addEventListener('click', ()=>{
    projectTitleInput = inputTitle.value.trim();
    if(projectTitleInput){
        console.log(projectTitleInput);
        input = document.createElement('div');
        input.textContent = projectTitleInput;
        document.querySelector('.project').appendChild(input);
}
else{
    alert('Please Enter a Project Title');
}
modal.style.display = 'none';
inputTitle.value = '';


input.addEventListener('click', ()=>{
    let inside = document.createElement('div');
    inside.textContent = projectTitleInput;
    content.appendChild(inside); 
    modal2.innerHTML = `
<div class = modal2-content>
<input type = "text" id = "taskName" placeholder = "TaskName">
<div class = modal2-button>
<button id = "submit2">Submit</button>
<button id = "cancel2">Cancel</button>
`
content.appendChild(modal2);

    const cancelButton2 = document.getElementById("cancel2");
    const submitButton2 = document.getElementById("submit2");
    const inputTask = document.getElementById("taskName");

   cancelButton2.addEventListener('click', ()=>{
       modal2.style.display = 'none';
       inputTask.value = '';
   });
     
   

   submitButton2.addEventListener('click', ()=>{
       inputTaskName = inputTask.value.trim();
       if(inputTaskName){
           console.log(inputTaskName);
           output = document.createElement('div');
           output.textContent = inputTaskName;
           content.appendChild(output);
       }
       else{
        alert('Please enter a task');
       }
        })  

})
    })

return {
    open: () => modal.style.display = 'flex',
    close: () => modal.style.display = 'none',
  };


  
}