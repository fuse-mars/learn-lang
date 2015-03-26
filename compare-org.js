if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.rendered = function(){

    $('.lang-header').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        adaptiveHeight: true,
        arrows: false,
        dots: false
    });
    $('.lang-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        adaptiveHeight: true,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }]
    });
   }

  Template.body.helpers({
    languagePacks: [
      { language: "Language 1" },
      { language: "Language 2" },
      { language: "Language 3" }
    ]
  });

  Template.languagePack.helpers({
    learningResponses: [
      { response: "This is task 1" },
      { response: "This is task 2" },
      { response: "This is task 3" }
    ]
  });

}