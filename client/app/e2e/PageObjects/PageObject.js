import protractor from 'protractor';
const { browser, by, element } = protractor;

class PageObject {

  static DELAY = 2000;

  constructor() {
    this.browser = browser;
    browser.driver.manage().window().setSize(1400, 1000);
    this.browser.ignoreSynchronization = true;
  }

  getElement(selector) {
    return element(by.css(selector));
  }

  getElementByXpath(selector) {
    return element(by.xpath(selector));
  }

  getElements(selector) {
    return element.all(by.css(selector));
  }

  getElementsByXpath(selector) {
    return element.all(by.xpath(selector));
  }

  wait(call, delay) {
    this.browser.sleep(delay || PageObject.DELAY).then(() => {
      call && call();
    });
  }

  getCurrentUrl() {
    return this.browser.getCurrentUrl();
  }

  back() {
    browser.driver.navigate().back();
  }

  dblClick(elem){
     browser.actions().doubleClick(elem).perform();
  }
  pressEnterButton() {
     browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }
}

export default PageObject;
