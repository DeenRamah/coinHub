// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on a setting, open the modal
document.querySelectorAll('.setting').forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = "block";
        document.getElementById('modalTitle').textContent = "Change " + item.querySelector('span').textContent;
    });
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
