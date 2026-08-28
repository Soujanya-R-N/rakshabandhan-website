document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById("startButton");
    const tieRakhiButton = document.getElementById("tieRakhiButton");

    const welcomeScreen = document.getElementById("welcomeScreen");
    const rakhiScreen = document.getElementById("rakhiScreen");
    const messageScreen = document.getElementById("messageScreen");
    const photoScreen = document.getElementById("photoScreen");

    const rakhi = document.getElementById("rakhi");
    const finalPhoto = document.getElementById("finalPhoto");



    /* ==========================================
       CHANGE SCREEN
    ========================================== */

    function changeScreen(screenToShow) {

        document.querySelectorAll(".screen").forEach(function (screen) {
            screen.classList.remove("active");
        });

        screenToShow.classList.add("active");
    }



    /* ==========================================
       START BUTTON
    ========================================== */

    startButton.addEventListener("click", function () {

        changeScreen(rakhiScreen);

    });



    /* ==========================================
       TIE RAKHI BUTTON
    ========================================== */

    tieRakhiButton.addEventListener("click", function () {

        /* Rakhi animation */
        if (rakhi) {
            rakhi.classList.add("tied");
        }

        tieRakhiButton.disabled = true;
        tieRakhiButton.innerHTML = "Rakhi Tied ❤️";


        /* Show message */
        changeScreen(messageScreen);


        /*
         * IMPORTANT
         * After 4 seconds, automatically
         * move to the PHOTO screen.
         */

        setTimeout(function () {

            changeScreen(photoScreen);

        }, 4000);

    });



    /* ==========================================
       PHOTO
    ========================================== */

    if (finalPhoto) {

        finalPhoto.src = "./images/raksha-photo.jpg";

        finalPhoto.onload = function () {

            console.log("PHOTO LOADED SUCCESSFULLY");

        };

        finalPhoto.onerror = function () {

            console.error(
                "PHOTO ERROR: images/raksha-photo.jpg not found"
            );

        };

    }

});
