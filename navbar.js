// donate part 

function goToDonatePage() {
    window.location.href = 'donate.html'
}




document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    const sideBarContainer = document.querySelector('.side-bar-container');

    // Function to show sidebar and swap buttons
    function openSidebar() {
        sideBarContainer.style.display = 'flex';
        menuButton.style.display = 'none';
        closeButton.style.display = 'block';
    }

    // Function to hide sidebar and swap buttons back
    function closeSidebar() {
        sideBarContainer.style.display = 'none';
        menuButton.style.display = 'block';
        closeButton.style.display = 'none';
    }

    // Add event listeners to buttons
    menuButton.addEventListener('click', openSidebar);
    closeButton.addEventListener('click', closeSidebar);
});
