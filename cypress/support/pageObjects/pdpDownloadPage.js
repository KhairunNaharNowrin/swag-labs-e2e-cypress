class pdfDownloadPage {

    get downloadButton() {
        return cy.get(':nth-child(4) > a > strong')
    }

    visit() {
        cy.visit('/');
      }
}

export default pdfDownloadPage;
