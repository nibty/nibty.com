$(document).ready(function () {
    $(".main").fadeIn(500);

    $(".navbar-collapse").click(function (event) {
        $(".navbar-collapse").removeClass("in").addClass("collapse");
    });

    $("#home").click(function () {
        $("#embed").hide();
        $(".footer").show();
        $(".main").show();
    });

    $("#plex_menu").click(function () {
        $(".main").hide();
        $(".footer").hide();
        if (isMobile(navigator.userAgent))  {
            window.location = "https://itunes.apple.com/us/app/plex/id383457673";
        } else {
            window.location = "http://plex.tv/web/app";
        }
     });

    $("#sabnzbd_menu").click(function () {
        $(".main").hide();
        $(".footer").hide();
        if (isMobile(navigator.userAgent)) {
            $("#embed").html("<iframe class='iframe' src='http://nzb.nickpettas.com/m'></iframe>").fadeIn();
        } else {
            $("#embed").html("<iframe class='iframe' src='http://nzb.nickpettas.com/'></iframe>").fadeIn();
        }
    });

    $("#couchpotato_menu").click(function () {
        $(".main").hide();
        $(".footer").hide();
        $("#embed").html("<iframe class='iframe' src='http://nzbmovies.nibty.com/'></iframe>").fadeIn();
    });

    $("#sickbeard_menu").click(function () {
        $(".footer").hide();
        $(".main").hide();
        $("#embed").html("<iframe class='iframe' src='http://tvshows.nibty.com/'></iframe>").fadeIn();
    });

    $("#headphones_menu").click(function () {
        $(".main").hide();
        $(".footer").hide();
        $("#embed").html("<iframe class='iframe' src='http://nzbmusic.nibty.com/'></iframe>").fadeIn();
    });

    $("#ganglia_menu").click(function () {
        $(".footer").hide();
        $(".main").hide();
        if (isMobile(navigator.userAgent)) {
            $("#embed").html("<iframe class='iframe' src='http://nibty.com/ganglia/mobile.php'></iframe>").fadeIn();
        } else {
            $("#embed").html("<iframe id='iframe' class='iframe' src='http://nibty.com/ganglia/?c=unspecified&h=192.168.0.101&m=load_one&r=hour&s=by%20name&hc=4&mc=2'></iframe>").fadeIn();
        }
    });

    $("#ebooks_menu").click(function () {
        $(".main").hide();
        $(".footer").hide();
        $("#embed").html("<iframe class='iframe' src='http://ebooks.nibty.com/'></iframe>").fadeIn();
    });

    $('.navbar li').click(function (e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });

    if (window.location.hash) {
        $('.navbar a[href=' + window.location.hash + ']').click();
    }

    // Background slideshow
    $.backstretch([
        "img/background/1.jpg",
        "img/background/2.jpg",
        "img/background/3.jpg"
    ], {duration: 3000, fade: 750});

});

function isMobile(userAgent) {
    return(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
}

