import { browser, by, element } from 'protractor';
describe('TabView', () => {
    let tabPanels;
    let tabElements;
    let closeIcons;
    let closableTabPanels;
    let closableTabElements;
    describe('Tab Click', () => {
        beforeEach(() => {
            browser.get('#/tabview');
            tabPanels = element.all(by.css('.ui-tabview-panel'));
            tabElements = element.all(by.css('.ui-tabview-nav li'));
        });
        it('should switch panels', () => {
            tabElements.get(1).click();
            expect(tabPanels.get(1).getCssValue('display')).toBe('block');
        });
    });
    describe('Close Icon Click', () => {
        beforeEach(() => {
            browser.get('#/tabview');
            closableTabElements = element.all(by.css('#closableTabView .ui-tabview-nav li'));
            closeIcons = element.all(by.css('#closableTabView .ui-tabview-nav li .ui-tabview-close'));
        });
        it('should delete closed panel', () => {
            closeIcons.get(0).click();
            expect(closableTabElements.count()).toBe(2);
        });
    });
    describe('Close Icon Click on an active tab', () => {
        beforeEach(() => {
            browser.get('#/tabview');
            closableTabPanels = element.all(by.css('#closableTabView .ui-tabview-panel'));
            closableTabElements = element.all(by.css('#closableTabView .ui-tabview-nav li'));
            closeIcons = element.all(by.css('#closableTabView .ui-tabview-nav li .ui-tabview-close'));
        });
        it('should close that panel and first tab should be active', () => {
            closableTabElements.get(2).click();
            closeIcons.get(1).click();
            expect(closableTabPanels.get(0).getCssValue('display')).toBe('block');
        });
    });
});
//# sourceMappingURL=tabview.e2e-spec.js.map