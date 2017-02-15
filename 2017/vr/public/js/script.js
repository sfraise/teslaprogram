function load(target, url) {
    var r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        target.innerHTML = r.responseText;
    };
    r.send();
}

/*** NAVIGATE TO ANOTHER SCENE ***/
document.onclick = function(e) {
    /*** SET MAIN VARIABLES ***/
    var body = document.getElementsByTagName("body")[0];
    var sky = document.getElementsByTagName("a-sky")[0];
    var camera = document.getElementById('camera');
    var panonav = document.getElementById('panonav');
    var panoposEle = document.getElementById('panopos');
    var sceneWrapper = document.getElementById('scene-wrapper');

    var navpoint = document.querySelector('.navpoint');
    navpoint.addEventListener('click', function () {
        // CURRENTLY THE ONLY WAY WE SEEM TO BE ABLE TO MAKE THIS WORK IS BY CHANGING THE SKY SRC ATTRIBUTE
        var nextScene = this.getAttribute('nextscene');
        var panoposVal = panoposEle.value;
        /*** FADE OUT ***/
        body.setAttribute('class', 'a-body fadeout'); // USING CSS TRANSITION ON BODY BUT VR NEEDS BELOW TO WORK...
        sky.setAttribute("material", "opacity", 0.9);
        setTimeout(function () {
            sky.setAttribute("material", "opacity", 0.8);
            setTimeout(function () {
                sky.setAttribute("material", "opacity", 0.7);
                setTimeout(function () {
                    sky.setAttribute("material", "opacity", 0.6);
                    setTimeout(function () {
                        sky.setAttribute("material", "opacity", 0.5);
                        setTimeout(function () {
                            sky.setAttribute("material", "opacity", 0.4);
                            setTimeout(function () {
                                sky.setAttribute("material", "opacity", 0.3);
                                setTimeout(function () {
                                    sky.setAttribute("material", "opacity", 0.2);
                                    setTimeout(function () {
                                        sky.setAttribute("material", "opacity", 0.1);
                                        setTimeout(function () {
                                            sky.setAttribute("material", "opacity", 0);
                                            // LOAD THE NEXT SCENE
                                            load(sceneWrapper, nextScene);
                                        }, 50);
                                    }, 50);
                                }, 50);
                            }, 50);
                        }, 50);
                    }, 50);
                }, 50);
            }, 50);
        }, 50);
        /*** FADE IN ***/
        setTimeout(function () { // USING CSS TRANSITION ON BODY BUT VR NEEDS BELOW TO WORK...
            body.setAttribute('class', 'a-body fadein');
            sky.setAttribute("material", "opacity", 0.1);
            setTimeout(function () {
                sky.setAttribute("material", "opacity", 0.2);
                setTimeout(function () {
                    sky.setAttribute("material", "opacity", 0.3);
                    setTimeout(function () {
                        sky.setAttribute("material", "opacity", 0.4);
                        setTimeout(function () {
                            sky.setAttribute("material", "opacity", 0.5);
                            setTimeout(function () {
                                sky.setAttribute("material", "opacity", 0.6);
                                setTimeout(function () {
                                    sky.setAttribute("material", "opacity", 0.7);
                                    setTimeout(function () {
                                        sky.setAttribute("material", "opacity", 0.8);
                                        setTimeout(function () {
                                            sky.setAttribute("material", "opacity", 0.9);
                                            setTimeout(function () {
                                                sky.setAttribute("material", "opacity", 1);
                                            }, 50);
                                        }, 50);
                                    }, 50);
                                }, 50);
                            }, 50);
                        }, 50);
                    }, 50);
                }, 50);
            }, 50);
        }, 2000);
    });
}
