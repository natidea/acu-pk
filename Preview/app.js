$(function () {
    App.Start();
});
var App = (function () {
    function App() {
    }
    App.Start = function () {
        var $acuSlider = $('.acuSlider');
        $acuSlider.slick();
    };
    return App;
})();
//# sourceMappingURL=app.js.map