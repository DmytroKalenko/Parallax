window.onload = function() {
    const parallax = document.querySelector(".parallax");
    if (parallax) {

        const content = document.querySelector(".parallax__container"),
            clouds = document.querySelector(".clouds"),
            mountains = document.querySelector(".mounthains"),
            human = document.querySelector(".human");

        const forCloud = 40,
            forMountain = 20,
            forHuman = 10;

        const speed = 0.05;

        let positionX = 0,
            positionY = 0,
            coordXprocent = 0,
            coordYprocent = 0;

        function Animation() {
            const distX = coordXprocent - positionX,
                distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            clouds.style.cssText = `transform: translate(${positionX/forCloud}%,${positionY/forCloud}%)`;
            mountains.style.cssText = `transform: translate(${positionX/forMountain}%,${positionY/forMountain}%)`;
            human.style.cssText = `transform: translate(${positionX/forHuman}%,${positionY/forHuman}%)`;

            requestAnimationFrame(Animation);
        };
        Animation();

        parallax.addEventListener("mousemove", function(e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;

        });


        //parallax on scroll 
        // let thresholdSet = [];
        // for (let i = 0; i <= 1.0; i += 0.005) {
        //     thresholdSet.push(i);
        // };
        // const callback = function(entries, observer) {
        //     const scrollTopProcent = window.pageXOffset / parallax.offsetHeight * 100;
        //     Animation2(scrollTopProcent);
        // };
        // const observer = new IntersectionObserver(callback, {
        //     threshold: thresholdSet
        // });

        // observer.observe(document.querySelector('.content'));

        // function Animation2(scrollTopProcent) {
        //     clouds.style.cssText = `transform: translate(0%,-${scrollTopProcent/9}%);`;
        //     mountains.style.cssText = `transform: translate(0%,-${scrollTopProcent/6}%);`;
        //     human.style.cssText = `transform: translate(0%,-${scrollTopProcent/3}%);`;
        // };

    };
}