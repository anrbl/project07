$(function () {
    $(window).scroll(function () {
        let sct = $(window).scrollTop()
        sct > 100 ? $('.to_top').fadeIn() : $('.to_top').fadeOut(0);
    });
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
    //스크롤반응.on붙이기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.effect').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        });
    });
    //메인비쥬얼
    $('.main_slide').slick({
        arrows: false,
        fade: true,
        asNavFor: '.text_slide',
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.text_slide').slick({
        arrows: false,
        vertical: true,
        asNavFor: '.main_slide',
    });
    $('.main_visual .arrow .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_visual .arrow .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    //동영상 
    $('#taekwonVideo').YTPlayer({
        videoURL: 'https://youtu.be/p6ATxIlWPt4',
        containment: '#video',
        autoPlay: false,
        mute: true,
        showControls: false,
        startAt: 2,
    });
    $('.main_taekwondo .pause').on('click', function () {
        $('#taekwonVideo').YTPPause();
    });
    $('.main_taekwondo .play').on('click', function () {
        $('#taekwonVideo').YTPPlay();
    });

    // 갤러리
    $('.gallery_slide').slick({
        arrows: false,
        asNavFor: '.gallery_text_slide',
        // autoplay: true,
        // autoplaySpeed: 4000,
        // speed: 1500
    });
    $('.gallery_text_slide').slick({
        arrows: false,
        asNavFor: '.gallery_slide',
        fade: true,
    });
    $('.main_notice .arrow .left').on('click', function () {
        $('.gallery_slide').slick('slickPrev');
    });
    $('.main_notice .arrow .right').on('click', function () {
        $('.gallery_slide').slick('slickNext');
    });
});