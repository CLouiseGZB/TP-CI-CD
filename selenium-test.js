const { Builder, By, Key, until } = require('selenium-webdriver');

(async function testGestionEmployes() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:8080'); // Assurez-vous de servir votre fichier index.html avec un serveur local.

        // Test ajout d'un employé
        await driver.findElement(By.id('ajout-nom')).sendKeys('Testeur');
        await driver.findElement(By.id('ajout-poste')).sendKeys('QA');
        await driver.findElement(By.xpath("//button[text()='Ajouter']")).click();

        let employeList = await driver.findElement(By.id('liste-employes')).getText();
        if (employeList.includes('Testeur - QA')) {
            console.log('Test ajout réussi !');
        } else {
            console.error('Test ajout échoué.');
        }

        // Test suppression d'un employé
        await driver.findElement(By.id('supprimer-id')).sendKeys('1', Key.RETURN);
        await driver.findElement(By.xpath("//button[text()='Supprimer']")).click();

        employeList = await driver.findElement(By.id('liste-employes')).getText();
        if (!employeList.includes('Dupont - Développeur')) {
            console.log('Test suppression réussi !');
        } else {
            console.error('Test suppression échoué.');
        }
    } catch (error) {
        console.error('Erreur pendant le test Selenium:', error);
    } finally {
        await driver.quit();
    }
})();
