const noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseover', () => {
    noBtn.style.left = Math.random() * 60 + "%";
    noBtn.style.top = Math.random() * 40 + "%";
});

function showMsg() {
    document.getElementById('section-invitation').style.display = 'none';
    document.getElementById('section-message').style.display = 'block';
    setTimeout(() => document.getElementById('section-message').style.opacity = '1', 50);
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('preview');
        output.src = reader.result;
        output.style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
}
