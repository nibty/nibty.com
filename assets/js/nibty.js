/**
 * nibty.com javascript
 *
 * Author: Nicholas Pettas <npettas@gmail.com>
 *
 */
$(document).ready(function () {

    var sabnzbdUrl = "http://nzb.nickpettas.com";
    var sabnzbdUrlMobile = "http://nzb.nickpettas.com/m";
    var plexUrl = "http://plex.tv/web/app";
    var plexUrlMobile = "https://itunes.apple.com/us/app/plex/id383457673";
    var couchPotatoUrl = "http://nzbmovies.nibty.com";
    var sickBeardUrl = "http://tvshows.nibty.com";
    var headPhonesUrl = "http://nzbmusic.nibty.com";

    // Fade main content in
    $(".main").fadeIn(500);

    // Switch to home page
    $("#home").click(function () {
        $("#embed").hide();
        $(".footer").show();
        $(".main").show();
    });

    // Switch to plex webapp or mobile App
    $("#plex_menu").click(function () {
        $(".main").hide();
        $(".footer").hide();
        if (isMobile(navigator.userAgent)) {
            window.location = plexUrlMobile;
        } else {
            window.location = plexUrl;
        }
    });

    // Switch to Sabnzbd App
    $("#sabnzbd_menu").click(function () {
        $(".main").hide();
        $(".footer").hide();
        if (isMobile(navigator.userAgent)) {
            $("#embed").html("<iframe class='iframe' src='" + sabnzbdUrlMobile + "'></iframe>").fadeIn();
        } else {
            $("#embed").html("<iframe class='iframe' src='" + sabnzbdUrl + "'></iframe>").fadeIn();
        }
    });

    // Switch to CouchPotato App
    $("#couchpotato_menu").click(function () {
        $(".main").hide();
        $(".footer").hide();
        $("#embed").html("<iframe class='iframe' src='" + couchPotatoUrl + "'></iframe>").fadeIn();
    });

    // Switch to SickBeard App
    $("#sickbeard_menu").click(function () {
        $(".footer").hide();
        $(".main").hide();
        $("#embed").html("<iframe class='iframe' src='" + sickBeardUrl + "'></iframe>").fadeIn();
    });

    // Switch to Headphones App
    $("#headphones_menu").click(function () {
        $(".main").hide();
        $(".footer").hide();
        $("#embed").html("<iframe class='iframe' src='" + headPhonesUrl + "'></iframe>").fadeIn();
    });

    // Set current menu item as active
    $('.navbar li').click(function (e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });

    // Load correct page using the url hash
    if (window.location.hash) {
        $('.navbar a[href=' + window.location.hash + ']').click();
    }

    // Background slideshow
    $.backstretch([
        "img/background/1.jpg",
        "img/background/2.jpg",
        "img/background/3.jpg",
        "img/background/4.jpg"
    ], {duration: 3000, fade: 750});
});


/**
 * Detect mobile browser
 *
 * @param userAgent
 * @returns {boolean}
 */
function isMobile(userAgent) {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
}

