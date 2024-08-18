const { $ } = require('@wdio/globals');

class NavigationPage {
    async goto (item){
        return $(`//android.widget.TextView[@text="${item}"]`).click();
    }
}
module.exports = new NavigationPage();