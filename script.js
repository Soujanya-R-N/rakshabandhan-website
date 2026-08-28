/* =====================================================
   RAKSHA BANDHAN WEBSITE
   FINAL WORKING SCRIPT
===================================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       GET ELEMENTS
    ================================================= */

    const startButton =
        document.getElementById("startButton");

    const tieRakhiButton =
        document.getElementById("tieRakhiButton");

    const rakhi =
        document.getElementById("rakhi");

    const finalPhoto =
        document.getElementById("finalPhoto");

    const messageScreen =
        document.getElementById("messageScreen");

    const photoScreen =
        document.getElementById("photoScreen");



    /* =================================================
       SHOW SCREEN
    ================================================= */

    function showScreen(screenId) {

        const screens =
            document.querySelectorAll(".screen");


        screens.forEach(function (screen) {

            screen.classList.remove("active");

        });


        const selectedScreen =
            document.getElementById(screenId);


        if (selectedScreen) {

            selectedScreen.classList.add("active");

        }

    }



    /* =================================================
       CONFETTI
    ================================================= */

    function createConfetti() {

        const container =
            document.getElementById(
                "confettiContainer"
            );


        if (!container) {
            return;
        }


        const colors = [
            "#d71958",
            "#f5a623",
            "#ffd45a",
            "#e87596",
            "#c44c75",
            "#f4c2d0"
        ];


        for (let i = 0; i < 80; i++) {


            const piece =
                document.createElement("div");


            piece.className =
                "confetti";


            piece.style.left =
                Math.random() * 100 + "%";


            piece.style.background =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];


            piece.style.animationDelay =
                Math.random() * 1.5 + "s";


            piece.style.width =
                6 + Math.random() * 8 + "px";


            piece.style.height =
                8 + Math.random() * 10 + "px";


            piece.style.borderRadius =
                Math.random() > 0.5
                    ? "50%"
                    : "2px";


            container.appendChild(piece);


            setTimeout(function () {

                piece.remove();

            }, 4500);

        }

    }



    /* =================================================
       PRELOAD PHOTO
    ================================================= */

    if (finalPhoto) {

        const preload =
            new Image();


        preload.src =
            "./images/raksha-photo.jpg";

    }



    /* =================================================
       SCREEN 1
       BEGIN CELEBRATION
    ================================================= */

    if (startButton) {

        startButton.addEventListener(
            "click",
            function () {


                showScreen(
                    "rakhiScreen"
                );


                createConfetti();


            }
        );

    }



    /* =================================================
       SCREEN 2
       TIE RAKHI
    ================================================= */

    if (tieRakhiButton) {

        tieRakhiButton.addEventListener(
            "click",
            function () {


                /* -------------------------------------
                   Rakhi animation
                ------------------------------------- */

                if (rakhi) {

                    rakhi.classList.add(
                        "tied"
                    );

                }



                /* -------------------------------------
                   Disable button
                ------------------------------------- */

                tieRakhiButton.disabled =
                    true;



                tieRakhiButton.innerHTML =
                    "Rakhi Tied ❤️";



                /* -------------------------------------
                   Celebration
                ------------------------------------- */

                createConfetti();



                /* -------------------------------------
                   Show Manoj message
                   after Rakhi animation
                ------------------------------------- */

                setTimeout(
                    function () {


                        showScreen(
                            "messageScreen"
                        );



                        /* -----------------------------
                           WAIT 5 SECONDS
                        ----------------------------- */

                        setTimeout(
                            function () {


                                /*
                                 * Make absolutely sure
                                 * the image source is set.
                                 */

                                if (finalPhoto) {

                                    finalPhoto.src =
                                        "./images/raksha-photo.jpg";

                                }



                                /*
                                 * SHOW PHOTO SCREEN
                                 */

                                showScreen(
                                    "photoScreen"
                                );



                                /*
                                 * Extra confetti
                                 */

                                createConfetti();


                            },
                            5000
                        );


                    },
                    1800
                );


            }
        );

    }



    /* =================================================
       FINAL PHOTO SAFETY
    ================================================= */

    if (finalPhoto) {

        finalPhoto.src =
            "./images/raksha-photo.jpg";


        finalPhoto.onload =
            function () {

                console.log(
                    "Raksha Bandhan photo loaded successfully."
                );

            };


        finalPhoto.onerror =
            function () {

                console.error(
                    "Photo not found. Check images/raksha-photo.jpg"
                );

            };

    }


});
