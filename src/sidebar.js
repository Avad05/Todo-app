import "./style.css";
import { hiddenModal } from "./modal.js";
export default function sideBar(){
    const content = document.querySelector(".sidebar");
     
    const home = document.createElement("div");
    home.classList.add("Home");
    home.textContent = "Home";
    

    const allTask = document.createElement("div");
    allTask.classList.add("allTask");
    allTask.textContent = "All-Task";

    const today = document.createElement("div");
    today.classList.add("today");
    today.textContent = "Today";

    const next = document.createElement("div");
    next.classList.add("next");
    next.textContent = "Next 7 days";
    
    home.appendChild(today);
    home.appendChild(next);
    home.appendChild(allTask);
    content.appendChild(home);
    
    const project = document.createElement("div");
    project.classList.add("project");
    project.textContent = "Projects";


    const add = document.createElement("div");
    add.classList.add("add");
    add.textContent = "Add Project";

    project.appendChild(add);
    content.appendChild(project);    

      /*modal shit */
    const taskModal = hiddenModal();
    const addingPro = document.querySelector(".add");
    addingPro.addEventListener('click', ()=>{
        taskModal.open();
    });
    
    
}


