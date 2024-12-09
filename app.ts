// Get references to the button and the skills section
const toggleButton = document.getElementById("toggle-button") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

// Check if elements are found before adding event listener
if (toggleButton && skillsSection) {
    

    // Add click event listener
    toggleButton.addEventListener('click', () => {
        // Toggle the display of the skills section
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = "Hide Skills";
        } else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = "Show Skills";
        }
    });
} else {
    console.error("Required element not found in the DOM");
}