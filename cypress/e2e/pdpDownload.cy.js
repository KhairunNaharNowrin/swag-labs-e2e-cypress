import PdfDownloadPage from "../support/pageObjects/pdpDownloadPage";


describe('test automation script to download PDF file', () => {

    const pdpDownloadPage = new PdfDownloadPage()
    const pdpBaseUrl = Cypress.config('pdpBaseUrl');

    beforeEach(() => {
        pdpDownloadPage.visit(pdpBaseUrl)
    });

    it('Find the download text', () => {
        pdpDownloadPage.downloadButton.scrollIntoView().wait(1000).click()
    });

    it('Download the file and store in local storage', () => {

        cy.url().then(url => {
            cy.request({
                method: 'GET',
                url: url,
                encoding: 'binary'
            })
                .then((response) => {

                    try {

                        cy.writeFile(`cypress/downloads/selenium-cheat-sheet.pdf`, response.body, 'binary')
                            .then(() => {
                                cy.log(`selenium-cheat-sheet.pdf file downloaded successfully.`);
                                cy.readFile('cypress/downloads/selenium-cheat-sheet.pdf')
                                    .should('exist')
                            })

                    } catch (error) {
                        cy.log(`Error downloading: ${error}`);

                    }

                })
        });
    });


});