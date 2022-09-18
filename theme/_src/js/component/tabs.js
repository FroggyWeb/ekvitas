import VanillaTabs from "./tabs/vanilla-tabs";

new VanillaTabs({
    'selector': '#js-tabs-service', // default is ".tabs"
    'type': 'vertical', // can be horizontal / vertical / accordion
    'responsiveBreak': 840, // tabs become accordion on this device width
    'activeIndex': 0, // active tab index (starts from 0 ). Can be -1 for accordions.
    'afterTitle': '<svg class="iconsvg icon-arr-down "><use xlink:href="#icon-arr-down"></use></svg>'
});

new VanillaTabs({
    'selector': '#js-faq', // default is ".tabs"
    'type': 'accordion', // can be horizontal / vertical / accordion

    'afterTitle': '<svg class="iconsvg icon-arr-down "><use xlink:href="#icon-arr-down"></use></svg>'
});
