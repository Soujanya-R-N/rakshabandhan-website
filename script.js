/* =====================================================
   RAKSHA BANDHAN WEBSITE
   FINAL JAVASCRIPT
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const startButton =
    document.getElementById(
        "startButton"
    );


const tieRakhiButton =
    document.getElementById(
        "tieRakhiButton"
    );


const rakhi =
    document.getElementById(
        "rakhi"
    );


const photoButton =
    document.getElementById(
        "photoButton"
    );


const backgroundMusic =
    document.getElementById(
        "backgroundMusic"
    );



/* =====================================================
   CHANGE SCREEN
===================================================== */

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(
            screen => {

                screen.classList.remove(
                    "active"
                );

            }
        );


    const nextScreen =
        document.getElementById(
            screenId
        );


    if (nextScreen) {

        nextScreen.classList.add(
            "active"
        );

    }

}



/* =====================================================
   SCREEN 1
   BEGIN CELEBRATION
===================================================== */

startButton.addEventListener(
    "click",
    () => {


        showScreen(
            "rakhiScreen"
        );


        createConfetti();


        /*
           Music will play only if
           the music file exists.
        */

        backgroundMusic
            .play()
            .catch(
                () => {}
            );

    }
);



/* =====================================================
   SCREEN 2
   TIE RAKHI
===================================================== */

tieRakhiButton.addEventListener(
    "click",
    () => {


        /*
           Start Rakhi animation
        */

        rakhi.classList.add(
            "tied"
        );


        /*
           Prevent repeated clicks
        */

        tieRakhiButton.disabled =
            true;


        tieRakhiButton.innerText =
            "Rakhi Tied ❤️";


        /*
           Celebration effect
        */

        createConfetti();


        /*
           Move to Manoj message
           after animation.
        */

        setTimeout(
            () => {

                showScreen(
                    "messageScreen"
                );

            },
            1800
        );

    }
);



/* =====================================================
   SCREEN 3
   SHOW PHOTO
===================================================== */

photoButton.addEventListener(
    "click",
    () => {


        showScreen(
            "photoScreen"
        );


        /*
           Small celebration when
           photo appears.
        */

        setTimeout(
            () => {

                createConfetti();

            },
            300
        );

    }
);



/* =====================================================
   CONFETTI FUNCTION
===================================================== */

function createConfetti() {


    const container =
        document.getElementById(
            "confettiContainer"
        );


    const colors = [

        "#d71958",

        "#f5a623",

        "#ffd45a",

        "#e87596",

        "#c44c75",

        "#f4c2d0"

    ];


    /*
       Create 90 pieces
    */

    for (
        let i = 0;
        i < 90;
        i++
    ) {


        const piece =
            document.createElement(
                "div"
            );


        piece.classList.add(
            "confetti"
        );


        /*
           Random horizontal position
        */

        piece.style.left =
            Math.random() * 100 + "%";


        /*
           Random color
        */

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        /*
           Random animation delay
        */

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        /*
           Random size
        */

        piece.style.width =
            (
                6 +
                Math.random() * 8
            ) + "px";


        piece.style.height =
            (
                8 +
                Math.random() * 10
            ) + "px";


        /*
           Random shape
        */

        piece.style.borderRadius =

            Math.random() > 0.5
                ? "50%"
                : "2px";


        /*
           Add to page
        */

        container.appendChild(
            piece
        );


        /*
           Remove after animation
        */

        setTimeout(
            () => {

                piece.remove();

            },
            4500
        );

    }

}