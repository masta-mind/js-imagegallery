const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */
for (i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');

    newImage.setAttribute('src', "images/" + images[i]);
    newImage.onclick = function () {
        displayedImage.src = newImage.src;
    };
    thumbBar.appendChild(newImage);
}

btn.addEventListener('click', function () {
    if (overlay.style.visibility === "hidden") {
        btn.setAttribute('class', 'dark');
        overlay.style.visibility = "visible";
        btn.textContent = "Lighten";
    }
    else {
        btn.setAttribute('class', 'light');
        overlay.style.visibility = "hidden";
        btn.textContent = "Darken";
    }
});