/*Name this external file gallery.js*/

function upDate(previewPic) {
    console.log("upDate function triggered");
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo() {
    console.log("unDo function triggered");
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
}

function initializeGallery() {
    console.log("Gallery initialized");
    let images = document.querySelectorAll(".preview");
    
    images.forEach((img) => {
        img.setAttribute("tabindex", "0");
        img.addEventListener("focus", function() {
            upDate(this);
        });
        img.addEventListener("blur", function() {
            unDo();
        });
    });
}
