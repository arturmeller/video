node {
    def app
    stage('Build Docker Image') {
      checkout scm
      app = docker.build('arturmeller/sample-app:latest')
    }
    
    stage('Publish to Docker Hub') {
      docker.withRegistry("https://index.docker.io/v1/", "dockerhubcredentials") {
          app.push('latest')
      }
    }
    
    stage('Deploy to production') {
        docker.withServer('tcp://dockerprodlinuxnode1', 'dockerprodlinuxnode1credentials') {
            sh 'docker run -d arturmeller/sample-app'
         }
    }
|}    
