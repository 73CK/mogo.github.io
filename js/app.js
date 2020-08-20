$(function ()
{
    var header=$("#header"),
        introH =$("#intro").innerHeight(),
        scrollOffset= $(window).scrollTop();
    checkScroll(scrollOffset);

    /* Fixed Header */
    $(window).on("scroll", function ()
    {
        scrollOffset=$(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset)
    {
        if(scrollOffset>=introH)
        {
            header.addClass("header--fixed");
        }
        else
        {
            header.removeClass("header--fixed");
        }
    }

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event)
    {
        event.preventDefault();

        var $this =$(this),
            blockId=$(this).data('scroll'),
            blockOffset=$(blockId).offset().top;

        $("#nav a").removeClass("nav__link--active")
        $this.addClass("nav__link--active");

        $("html, body").animate(
            {
                scrollTop: blockOffset
            }, 700
        )
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function (event){
        event.preventDefault();
        $(this).toggleClass("nav-toggle--active");
        $("#nav").toggleClass("nav--active");
    });

    /* Collapse */
    $("[data-collapse]").on("click", function (event){
        event.preventDefault();

        var $this=$(this),
            blockId = $this.data('collapse');
        $this.toggleClass("accordion__item--active");

    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});