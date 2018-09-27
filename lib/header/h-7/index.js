function CCHeader7() {
    $('.canhcam-header-7 .navbar-toggler').on("click", function() {
        $('.canhcam-header-7').toggleClass('expand')
    });
    $('.canhcam-header-7 .btnsearch .btn').on("click", function() {
        $('.canhcam-header-7 .search').toggleClass('active')
        $('.canhcam-header-7 .btnsearch').toggleClass('active')
    });
    $('.canhcam-header-7 .closebnt').on("click", function() {
        $('.canhcam-header-7').toggleClass('expand')
    });
};

function getMapto() {
    if ($(window).width() <= CANHCAM_APP.CHANGE_GRID_SM) {
        $('[k-menu-map-to]').each(function() {
            var getTo = $(this).attr('k-menu-map-to')
            $(getTo).html($(this).clone().removeAttr('k-menu-map-to').show())
            $(this).hide()
        })
    } else {
        $('[k-menu-map-to]').each(function() {
            var getTo = $(this).attr('k-menu-map-to')
            $(getTo).html('')
            $(this).show()
        })
    }
}

function setWidthBrand() {
    $('header .img-logo').css({
        'width': $('header .navbar-brand').width()
    })
}

$(function() {
    CCHeader7();
    getMapto()
})

function megaMenuMobbile() {
    $('.canhcam-header-7 .navbar .has-sub').on('click', function() {
        if ($(this).find('.sub-menu').is(':hidden') == true) {
            $(this).find('.sub-menu').show()
        } else {
            $(this).find('.sub-menu').hide()
        }
    })
}
$(window).resize(function() {
    getMapto()
    setWidthBrand()
    $('.canhcam-header-7').removeClass('expand')
    $('.canhcam-header-7 .search').removeClass('active')
    $('.canhcam-header-7 .btnsearch').removeClass('active')
})
$(document).ready(function() {
    megaMenuMobbile()
    setWidthBrand()
})