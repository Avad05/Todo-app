import { hiddenModal } from "./modal";
export default function severity(){
    const severityOptions = ['High', 'Medium', 'Low'];
    const container = document.querySelector('.modal2');
    
    const form = document.createElement('form');
    
    severityOptions.forEach(option => {
        // Create label
        const label = document.createElement('label');
        label.textContent = option;
    
        // Create radio input
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'severity';  // All radios must share the same name to be exclusive
        radio.value = option.toLowerCase();
    
        // Append to label
        label.prepend(radio);  // adds radio before the text
        label.style.marginRight = '10px';
    
        // Append to form
        form.appendChild(label);
    });
    
    container.appendChild(form);
    
}