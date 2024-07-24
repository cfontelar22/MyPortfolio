document.addEventListener('DOMContentLoaded', function () {
    new fullpage('#fullpage', {
        anchors: ['home', 'about', 'projects', 'contact'],
        menu: '#side-nav',
        scrollBar: true,
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });
});
