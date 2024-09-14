function togglePersonalInfo() {
    var infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(function (item) {
        item.classList.toggle('hidden');
    });
}
// Adding event listener once the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-info');
    var toggleButton1 = document.getElementById('toggle-info');
    if (toggleButton) {
        toggleButton.addEventListener('click', togglePersonalInfo);
    }
});
