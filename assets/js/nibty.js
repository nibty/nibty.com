/**
 * nibty.com javascript
 *
 * Author: Nicholas Pettas <npettas@gmail.com>
 *
 */

var doNotChangeMenu = false;

$(document).ready(function () {

    var sabnzbdUrl       = "https://nzb.nibty.com";
    var sabnzbdUrlMobile = "https://nzb.nibty.com/m";
    var plexUrl          = "https://plex.tv/web/app";
    var plexUrlMobile    = "https://itunes.apple.com/us/app/plex/id383457673";
    var couchPotatoUrl   = "https://nzbmovies.nibty.com";
    var sonarrUrl        = "https://sonarr.nibty.com";
    var headPhonesUrl    = "https://nzbmusic.nibty.com/home";

    // Switch to home page
    $("li.home-menu").click(function () {
        doNotChangeMenu = true;
        changeUrl("home", "#");

        $(".footer").show();
        $(".info-container").show();
        $("#embed").hide();
        goToByScroll(".top-container");
    });

    // Scroll to projects
    $('li.projects-menu').click(function () {
        doNotChangeMenu = true;
        changeUrl("projects", "#projects");

        $(".footer").show();
        $(".info-container").show();
        $("#embed").hide();
        goToByScroll(".projects-container");
    });

    // Switch to plex webapp or mobile App
    $("li.plex-menu").click(function () {
        doNotChangeMenu = true;
        if (isMobile(navigator.userAgent)) {
            window.location = plexUrlMobile;
        } else {
            window.location = plexUrl;
        }
    });

    // Switch to Sabnzbd App
    $("li.sabnzbd-menu").click(function () {
        $(".footer").hide();
        $(".info-container").hide();
        if (isMobile(navigator.userAgent)) {
            $("#embed").html("<iframe class='webapp-iframe' src='" + sabnzbdUrlMobile + "'></iframe>").show();
        } else {
            $("#embed").html("<iframe class='webapp-iframe' src='" + sabnzbdUrl + "'></iframe>").show();
        }
    });

    // Switch to CouchPotato App
    $("li.couchpotato-menu").click(function () {
        $(".footer").hide();
        $(".info-container").hide();
        $("#embed").html("<iframe class='webapp-iframe' src='" + couchPotatoUrl + "'></iframe>").fadeIn();
    });

    // Switch to SickBeard App
    $("li.sonarr-menu").click(function () {
        $(".footer").hide();
        $(".info-container").hide();
        $("#embed").html("<iframe class='webapp-iframe' src='" + sonarrUrl + "'></iframe>").fadeIn();
    });

    // Switch to Headphones App
    $("li.headphones-menu").click(function () {
        $(".footer").hide();
        $(".info-container").hide();
        $("#embed").html("<iframe class='webapp-iframe' src='" + headPhonesUrl + "'></iframe>").fadeIn();
    });

    // Set current menu item as active
    $('.navbar li').click(function (e) {
        var $this = $(this);
        $('.navbar li.active').removeClass('active');
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }

        // Remove dropdown window on click
        if ($(".navbar-toggle").is(":visible")) {
            $(".navbar-collapse").removeClass("in").addClass("collapse");
        }
    });

    // Load correct page using the url hash
    if (window.location.hash) {
        $('.navbar .' + window.location.hash.replace("#", "") + '-menu').click();
    }
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

/**
 * Scroll to div
 *
 * @param id
 */
function goToByScroll(id) {
    $('html,body').animate({
        scrollTop: $(id).offset().top - 50
    }, 'slow', function () {
        doNotChangeMenu = false;
    });
}

/**
 * Update browser url without reloading
 *
 * @param page
 * @param url
 */
function changeUrl(page, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = {Page: page, Url: url};
        history.pushState(obj, obj.Page, obj.Url);
    }
}

/**
 * Scroll listener
 */
$(window).scroll(function () {
    var currentClass;

    if ($(window).scrollTop() < 20 && !doNotChangeMenu && !$("#embed").is(":visible")) {
        $('.navbar li.active').removeClass('active');
        currentClass = $('li.home-menu');
        if (!currentClass.hasClass('active')) {
            currentClass.addClass('active');
        }

    } else if ($(window).scrollTop() >= $('.projects-container').offset().top - 50 && !doNotChangeMenu && !$("#embed").is(":visible")) {
        $('.navbar li.active').removeClass('active');
        currentClass = $('li.projects-menu');
        if (!currentClass.hasClass('active')) {
            currentClass.addClass('active');
        }
    }
});