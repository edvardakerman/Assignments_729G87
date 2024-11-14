const images = [];
const thumbnails = [];
let currentImageIndex = 0;

for (let i = 1; i <= 8; i++) {
    images.push({
       path: "images/image" + i + ".jpg",
       title: "Cat " + i}
    );
    thumbnails.push({
        path: "images/image" + i + "-small.jpg",
    });
};


document.addEventListener("DOMContentLoaded", () => {
const image = document.getElementById("image");
const Imagetitle = document.getElementById("image-title");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

function showImage() {
    image.src = images[currentImageIndex].path;
    Imagetitle.textContent = images[currentImageIndex].title;
}

nextButton.addEventListener("click", function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showImage();
});

prevButton.addEventListener("click", function() {
    currentImageIndex--;
    if (currentImageIndex <= 0) {
        currentImageIndex = images.length - 1;
    }
    showImage();
});

// Add thumbnails
thumbnails.forEach((thumbnail, index) => {
    const img = document.createElement("img");
    img.src = thumbnail.path;
    img.addEventListener("click", function() {
        currentImageIndex = index;
        showImage();
    });
    document.getElementById("thumbnails").appendChild(img);
});

showImage();
});