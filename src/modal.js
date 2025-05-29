import sideBar from "./sidebar";
export function hiddenModal(){
    const content = document.querySelector(".content");
    const modal = document.createElement('div');
    modal.id='taskModal';
    modal.className='modal';
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


const submitTitle = document.querySelector("#submit2");
const taskTitle = document.querySelector("#taskName");

cancelButton.addEventListener('click', ()=>{
    modal.style.display = 'none';
    inputTitle.value = '';
})

let input;

var projectTitleInput = 0;
submitButton.addEventListener('click', ()=>{
    projectTitleInput = inputTitle.value.trim();
    if(projectTitleInput){
        console.log(projectTitleInput);
        input = document.createElement('div');
        input.textContent = projectTitleInput;
        document.querySelector('.project').appendChild(input);

        modal.style.display = 'none';
        inputTitle.value = '';


        input.addEventListener('click', ()=>{
            content.textContent = projectTitleInput ;
        })
        

    }
    else{
        alert('Please Enter a Project Title');
    }
});

return {
    open: () => modal.style.display = 'flex',
    close: () => modal.style.display = 'none',
  };


  const modal2 = document.createElement('div');
modal.innerHTML = `
<div class = modal2-content>
<input type = "text" id = "taskName" placeholder = "TaskName">
<div class = modal2-button>
<button id = "submit2">Submit</button>
<button id = "cancel">Cancel</button>
`
content.appendChild(modal2);
}