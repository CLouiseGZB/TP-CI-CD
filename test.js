const { ajouterEmploye, supprimerEmploye } = require('./app');

describe('Tests unitaires pour les employés', () => {
    let employes;

    beforeEach(() => {
        employes = [
            { id: 1, nom: 'Dupont', poste: 'Développeur' },
            { id: 2, nom: 'Durand', poste: 'Designer' },
        ];
    });

    test('ajouterEmploye ajoute correctement un employé', () => {
        ajouterEmploye(employes, 3, 'Martin', 'Chef de Projet');
        expect(employes).toHaveLength(3);
        expect(employes[2]).toEqual({ id: 3, nom: 'Martin', poste: 'Chef de Projet' });
    });

    test('supprimerEmploye supprime correctement un employé existant', () => {
        supprimerEmploye(employes, 1);
        expect(employes).toHaveLength(1);
        expect(employes[0].id).toBe(2);
    });

    test('supprimerEmploye ne fait rien si l\'id n\'existe pas', () => {
        supprimerEmploye(employes, 99);
        expect(employes).toHaveLength(2);
    });
});
