(function($){
    $(function(){
        $('.sidenav').sidenav();
        // $(".button-collapse").sideNav();
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                400:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
        $('.dropdown-trigger').dropdown();
        $('select').formSelect();
    }); // end of document ready
})(jQuery); // end of jQuery name space