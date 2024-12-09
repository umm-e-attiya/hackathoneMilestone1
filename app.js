// Get references to the button and the skills section
var toggleButton = document.getElementById("toggle-button");
var skillsSection = document.getElementById("skills");
// Check if elements are found before adding event listener
if (toggleButton && skillsSection) {
    // Add click event listener
    toggleButton.addEventListener('click', function () {
        // Toggle the display of the skills section
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = "Hide Skills";
        }
        else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = "Show Skills";
        }
    });
}
else {
    console.error("Required element not found in the DOM");
}
