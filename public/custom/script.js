$(document)
    .ready(function () {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');

        //Carousel in play
        $("#owl-example").owlCarousel({
            //navigation: true, // Show next and prev buttons
            slideSpeed: 1000,
            paginationSpeed: 2000,
            singleItem: true,
            autoPlay: 3000
        });
    });