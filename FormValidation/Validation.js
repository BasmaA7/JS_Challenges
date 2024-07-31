const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorMessage = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
    }
    
    if (email.value === '' || email.value == null) {
        messages.push('Email is required');
    } else if (!emailPattern.test(email.value)) {
        messages.push("Attention, votre email est incorrect");
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        errorMessage.innerText = messages.join(', ');
    }
});
