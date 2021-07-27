const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch ("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    //console.log(images);
    selectRandomImage(images);
};

const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() *images.length);
    //console.log(randomIndex);
    const randomImage = images[randomIndex];
    //console.log(randomImage);
};

const displayImage = function (randomImage) {
    const author = randomImage.author;   //access author property from randomImage object
    const imageAddress = randomImage.download_url;  //access dawnload-url property from randomImage object
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function() {
    getImage();  //Moved here to call the getImage function only the button is clicked
});