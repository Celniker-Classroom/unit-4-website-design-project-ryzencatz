let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Toggle 'active' on the parent div (.section) 
        // This allows one class to trigger both the dash and the panel
        this.parentElement.classList.toggle("active");
    
    });
}
