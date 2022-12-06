pipeline {
    agent any
    stages {
        stage('test') {
            agent {
            docker { 
                image 'node:16.13.1-alpine'
                args '-e PORT=3000 -e MONGODB_CNN=mongodb+srv://accesoLimitado:gV3VeGNSPVFA0f0J@cluster0.we7o7.mongodb.net/test' }
            }
            steps {
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm run test'
            }
        }
        stage('build') {
            steps {
                sh 'docker-compose build'
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }  
    }
    post {
        always {
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
}