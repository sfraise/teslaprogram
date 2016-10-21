/**
 * Created by Spencer on 10/20/2016.
 */

var navpoint = document.querySelector('.navpoint');
navpoint.addEventListener('click', function () {
    // CURRENTLY THE ONLY WAY WE SEEM TO BE ABLE TO MAKE THIS WORK IS BY CHANGING THE SKY SRC ATTRIBUTE
    var nextScene = this.getAttribute('nextscene');
    var body = document.getElementsByTagName("body")[0];
    var sky = document.getElementsByTagName("a-sky")[0];

    body.setAttribute('class', 'a-body fadeout');

    setTimeout(function() {
        sky.setAttribute('src', 'assets/img/scene-backgrounds/' + nextScene + '.jpg');
    }, 1000);

    if(nextScene == 'lobby') {
        this.setAttribute('nextscene', 'lobby2');
    } else if(nextScene == 'lobby2') {
        this.setAttribute('nextscene', 'lobby');
    }

    setTimeout(function() {
        body.setAttribute('class', 'a-body fadein');
    }, 2000);

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
});

/*
$(document).ready(function() {
    // NAVIGATION
    $(document).on('click', '.navpoint', function() {
        var nextScene = $(this).attr('nextscene');

        $.ajax({
            url: "http://www.codemonkeysllc.com/tesla/2017/vr/scenes/" + nextScene + ".php",
            type: "POST",
            data: {nextScene: 'nextScene'},
            success: function(data) {
                // UPDATE SCENE
                $('.scene').fadeOut().promise().done(function() {
                    $('body').html(data);
                });
            },
            error: function (errorThrown) {
                jQuery('.error').html(errorThrown);
            }
        });
    });
});
*/