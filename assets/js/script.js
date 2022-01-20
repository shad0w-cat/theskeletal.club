window.onload = placeImage(2);
window.onload = animation();

function placeImage(i) {
    setTimeout(function () {
        let imgName = "assets/images/";
        document.getElementById("img1").src = imgName + i + ".png";
        document.getElementById("img2").src = imgName + (i + 1) + ".png";
        document.getElementById("img3").src = imgName + (i + 2) + ".png";
        document.getElementById("img4").src = imgName + (i + 3) + ".png";
        document.getElementById("img5").src = imgName + (i + 4) + ".png";
        document.getElementById("img6").src = imgName + (i + 5) + ".png";
        document.getElementById("img7").src = imgName + (i + 6) + ".png";
        document.getElementById("img8").src = imgName + (i + 7) + ".png";
        document.getElementById("img9").src = imgName + (i + 8) + ".png";
        document.getElementById("img10").src = imgName + (i + 9) + ".png";
        i += 10;
        if (i < 1000)
            placeImage(i);
    }, 9000);
}
/*
function animation() {
    let elements = document.getElementsByClassName('gallery-img');
    let i = 0;
    while (i < elements.length) {
        console.log(elements[i].classList.contains('gallery-div-' + (i + 1)));
        elements[i].classList.add('slide' + (i + 1))
        i++;
    }
}*/