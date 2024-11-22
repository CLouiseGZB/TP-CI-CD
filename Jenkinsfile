pipeline {
    agent any
    tools {
        nodejs "NodeJS" // Assurez-vous que NodeJS est configuré dans Jenkins
    }
    stages {
        stage('Cloner le dépôt') {
            steps {
                git 'https://github.com/<votre-utilisateur>/<nom-du-depot>.git'
            }
        }
        stage('Installer les dépendances') {
            steps {
                sh 'npm install'
            }
        }
        stage('Exécuter les tests unitaires') {
            steps {
                sh 'npm test'
            }
        }
        stage('Exécuter les tests d\'intégration') {
            steps {
                sh 'node selenium-test.js'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/*.log', allowEmptyArchive: true
        }
        success {
            echo 'Build réussi!'
        }
        failure {
            echo 'Le build a échoué!'
        }
    }
}
