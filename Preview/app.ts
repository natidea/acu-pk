
$(() => {
    App.Start();
});

class App {

    static Start() {
        var $acuSlider: any = $('.acuSlider');
        $acuSlider.slick();
    }
}