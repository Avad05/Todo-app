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

cancelButton.addEventListener('click', ()=>{
    modal.style.display = 'none';
    inputTitle.value = '';
})

submitButton.addEventListener('click', ()=>{
    const projectTitleInput = inputTitle.value.trim();
    if(projectTitleInput){
        console.log(projectTitleInput);
        const input = document.createElement('div');
        input.textContent = projectTitleInput;
        document.querySelector('.project').appendChild(input);
        modal.style.display = 'none';
        inputTitle.value = '';
    }
    else{
        alert('Please Enter a Project Title');
    }
});

return {
    open: () => modal.style.display = 'flex',
    close: () => modal.style.display = 'none',
  };
}