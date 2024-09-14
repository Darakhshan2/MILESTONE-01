function togglePersonalInfo(): void {
    const infoItems = document.querySelectorAll('.info-item');
  
    infoItems.forEach(item => {
        item.classList.toggle('hidden');
    });
}

// Adding event listener once the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-info');
    const toggleButton1 = document.getElementById('toggle-info')
    if (toggleButton ) {
        toggleButton.addEventListener('click', togglePersonalInfo);
    }
});