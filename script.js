// script.js

// Function to change the role with typewriter effect
function changeRoleTypewriter() {
    const roles = ["Software Developer","Web Developer", "AI ML Enthusiast","Final Year Undergrad"];
    const roleSpan = document.getElementById("role");
    let currentIndex = 0;

    // Function to type out the role text
    function typeRole(roleIndex) {
        let role = roles[roleIndex];
        let charIndex = 0;
        let typingInterval = setInterval(function() {
            // Add one character at a time
            roleSpan.textContent += role.charAt(charIndex);
            charIndex++;

            // Check if all characters are typed
            if (charIndex === role.length) {
                clearInterval(typingInterval); // Stop typing
                // Start deleting after a brief pause
                setTimeout(function() {
                    deleteRole(roleIndex);
                }, 1000);
            }
        }, 100); // Typing speed
    }

    // Function to delete the role text
    function deleteRole(roleIndex) {
        let role = roles[roleIndex];
        let charIndex = role.length+1;
        console.log(charIndex);
        let deletingInterval = setInterval(function() {
            // Remove one character at a time
            roleSpan.textContent = role.substring(0, charIndex -1);
            charIndex--;

            // Check if all characters are deleted
            if (charIndex === 0) {
                clearInterval(deletingInterval); // Stop deleting
                // Move to the next role after a brief pause
                setTimeout(function() {
                    currentIndex = (roleIndex + 1) % roles.length;
                    typeRole(currentIndex);
                }, 1000);
            }
        }, 100); // Typing speed for deletion
    }

    // Start typing the first role
    typeRole(currentIndex);
}

// Call the function when the window loads
window.onload = changeRoleTypewriter;
