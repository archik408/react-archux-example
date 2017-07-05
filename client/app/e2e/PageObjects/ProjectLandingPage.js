import PageObject from './PageObject';

class ProjectLandingPage extends PageObject {
    constructor() {
        super();
        this.url = '/#/';
    }

    open() {
        this.browser.get(this.url);
    }

    getHeaderProjectName() {
        return this.getElement('h1');
    }

    getProjectName() {
        return this.getElement('table[class*="table"] tbody tr:first-child [class*="projectNameTd"]');
    }

    getHeaderLabel() {
        return this.getElement('p[class*="header"]');
    }

    getHeader3() {
        return this.getElement('h3');
    }

    getFirstActiveProject() {
        this.getElement('div[class*="tbodyContainer"] tbody tr:first-child td:first-child').click();
    }

    getGroupButtonCount() {
        return this.getElements('[class*="buttonGroup"] [class*="button"]').count();
    }

    getProjectNameColumn() {
        return this.getElement('table[class*="table"] thead tr th:first-child');
    }

    getProjectStatusColumn() {
        return this.getElement('table[class*="table"] thead tr th:nth-child(2)');
    }

    getProjectTypeColumn() {
        return this.getElement('table[class*="table"] thead tr th:last-child');
    }

    getDisabledButton() {
        return this.getElement('[class*="buttonGroup"] [class*="forbidden"]');
    }

    getProjectInfoButton() {
        return this.getElement('[class*="buttonGroup"] button[class*="button"]:nth-child(2)');
    }

    getCreateProjectButton() {
        return this.getElement('[class*="buttonGroup"] button[class*="button"]:nth-child(3)');
    }
}

export default ProjectLandingPage;
