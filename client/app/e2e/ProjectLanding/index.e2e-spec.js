import ProjectLandingPage from '../PageObjects/ProjectLandingPage';

const page = new ProjectLandingPage();

describe('Project Landing Page by admin', () => {
    beforeAll(() => {
        page.open();
        page.wait();
    });

    it('should display title "Test Project"', () => {
        expect(page.browser.getTitle()).toEqual('Test Project');
    });

    it('should display header "Active Projects"', () => {
        expect(page.getHeaderLabel().getText()).toMatch('Active Projects');
    });

    it('should button Project Information be disabled when any project doesn*t active', () => {
        page.getDisabledButton().click();
        page.wait(() => {
            expect(page.getHeaderLabel().getText()).toMatch('Active Projects');
        });
    });
    it('should present current project detail table after project clicking', () => {
        page.getFirstActiveProject();
        page.wait(() => {
            expect(page.getHeaderProjectName().getText()).toEqual(page.getProjectName().getText());
        });
    });

    it('should present table with active projects', () => {
        page.wait(() => {
            expect(page.getProjectNameColumn().getText()).toMatch('Project name');
            expect(page.getProjectStatusColumn().getText()).toMatch('Status');
            expect(page.getProjectTypeColumn().getText()).toMatch('Type');
        });
    });

    it('should present Project Information page after click project information button', () => {
        page.getFirstActiveProject();
        page.getProjectInfoButton().click();
        page.wait(() => {
            expect(page.getHeader3().getText()).toEqual('Project Information');
        });
        page.open();
        page.wait();
    });

    it('should present Create Project page after click crate project button', () => {
        page.getCreateProjectButton().click();
        page.wait(() => {
            expect(page.getHeader3().getText()).toEqual('Create New Project');
        });
        page.open();
    });

    it('should contain group buttons (count equal 2)', () => {
        expect(page.getGroupButtonCount()).toBe(2);
    });
});
