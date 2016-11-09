/**
 * Created by Spencer on 10/20/2016.
 */

/*** SET MAIN VARIABLES ***/
var body = document.getElementsByTagName("body")[0];
var sky = document.getElementsByTagName("a-sky")[0];
var camera = document.getElementById('camera');
var panonav = document.getElementById('panonav');
var panoposEle = document.getElementById('panopos');

/*** NAVIGATE WITHIN SCENE ***/
/* NEED TO THINK ON THIS MORE
panonav.addEventListener('click', function () {
    var cameraPos = camera.getAttribute('rotation');
    console.log(cameraPos);

    var panoposVal = panoposEle.value;
    var panoPos;
    if(panoposVal < 2) {
        panoPos = ++panoposVal;
    } else {
        panoPos = panoposVal;
    }

    var newPanoPos = '1 1 ' + panoPos + '000';

    sky.setAttribute('position', newPanoPos);

    panoposEle.value = panoPos;
});
*/

/*** NAVIGATE TO ANOTHER SCENE ***/
var navpoint = document.querySelector('.navpoint');
navpoint.addEventListener('click', function () {
    // CURRENTLY THE ONLY WAY WE SEEM TO BE ABLE TO MAKE THIS WORK IS BY CHANGING THE SKY SRC ATTRIBUTE
    var nextScene = this.getAttribute('nextscene');
    var panoposVal = panoposEle.value;

    /*** FADE OUT ***/
    body.setAttribute('class', 'a-body fadeout'); // USING CSS TRANSITION ON BODY BUT VR NEEDS BELOW TO WORK...
    sky.setAttribute("material", "opacity", 0.9);
    setTimeout(function() {
        sky.setAttribute("material", "opacity", 0.8);
        setTimeout(function() {
            sky.setAttribute("material", "opacity", 0.7);
            setTimeout(function() {
                sky.setAttribute("material", "opacity", 0.6);
                setTimeout(function() {
                    sky.setAttribute("material", "opacity", 0.5);
                    setTimeout(function() {
                        sky.setAttribute("material", "opacity", 0.4);
                        setTimeout(function() {
                            sky.setAttribute("material", "opacity", 0.3);
                            setTimeout(function() {
                                sky.setAttribute("material", "opacity", 0.2);
                                setTimeout(function() {
                                    sky.setAttribute("material", "opacity", 0.1);
                                    setTimeout(function() {
                                        sky.setAttribute("material", "opacity", 0);
                                        // CHANGE SKYBOX BACKGROUND
                                        sky.setAttribute('src', '#' + nextScene);

                                        sky.setAttribute('position', '1 1 1');
                                        panoposEle.value = 1;
                                    },50);
                                },50);
                            },50);
                        },50);
                    },50);
                },50);
            },50);
        },50);
    },50);

    if(nextScene == 'lobby-sky') {
        this.setAttribute('nextscene', 'hall-sky');
    } else if(nextScene == 'hall-sky') {
        this.setAttribute('nextscene', 'lobby-sky');
    }

    /*** FADE IN ***/
    setTimeout(function() { // USING CSS TRANSITION ON BODY BUT VR NEEDS BELOW TO WORK...
        body.setAttribute('class', 'a-body fadein');
        sky.setAttribute("material", "opacity", 0.1);
        setTimeout(function() {
            sky.setAttribute("material", "opacity", 0.2);
            setTimeout(function() {
                sky.setAttribute("material", "opacity", 0.3);
                setTimeout(function() {
                    sky.setAttribute("material", "opacity", 0.4);
                    setTimeout(function() {
                        sky.setAttribute("material", "opacity", 0.5);
                        setTimeout(function() {
                            sky.setAttribute("material", "opacity", 0.6);
                            setTimeout(function() {
                                sky.setAttribute("material", "opacity", 0.7);
                                setTimeout(function() {
                                    sky.setAttribute("material", "opacity", 0.8);
                                    setTimeout(function() {
                                        sky.setAttribute("material", "opacity", 0.9);
                                        setTimeout(function() {
                                            sky.setAttribute("material", "opacity", 1);
                                        },50);
                                    },50);
                                },50);
                            },50);
                        },50);
                    },50);
                },50);
            },50);
        },50);
    }, 2000);
});










/* UPDATING VIA AJAX BREAKS YOU OUT OF VR
 var ajaxRequest;  // The variable that makes Ajax possible!
 try{
 // Opera 8.0+, Firefox, Safari
 ajaxRequest = new XMLHttpRequest();
 } catch (e){
 // Internet Explorer Browsers
 try{
 ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
 } catch (e) {
 try{
 ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
 } catch (e){
 // Something went wrong
 alert("Your browser broke!");
 return false;
 }
 }
 }
 // Create a function that will receive data sent from the server
 ajaxRequest.onreadystatechange = function(){
 var ajaxDisplay = document.getElementsByTagName("body")[0];
 if(ajaxRequest.readyState == 4){
 $('body').fadeOut().promise().done(function() {
 ajaxDisplay.innerHTML = ajaxRequest.responseText;
 $('body').fadeIn();
 });
 }
 else {
 }
 }
 var queryString = "?nextscene=" + nextScene;
 ajaxRequest.open("GET", "http://www.codemonkeysllc.com/tesla/2017/vr/scenes/" + nextScene + ".php" + queryString, true);
 ajaxRequest.send(null);
 */

/* JQUERY AJAX DOESN'T SEEM TO WORK IN VR AT ALL
 $.ajax({
 url: "http://www.codemonkeysllc.com/tesla/2017/vr/scenes/" + nextScene + ".php",
 type: "POST",
 data: {nextScene: 'nextScene'},
 success: function(data) {
 // UPDATE SCENE
 $('body').fadeOut().promise().done(function() {
 $('body').html(data).fadeIn();
 });
 },
 error: function (errorThrown) {
 jQuery('.error').html(errorThrown);
 }
 });
 */