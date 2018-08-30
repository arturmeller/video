node {
    def app
    stage('Build Docker Image') {
      source = checkout(scm)
        app = docker.build("arturmeller/sample-app:${env.BUILD_ID}", "--label arturmeller.sample.commit=${source.GIT_COMMIT} .")
    }
    
    stage('Publish to Docker Hub') {
      docker.withRegistry("https://index.docker.io/v1/", "dockerhubcredentials") {
          app.push('env.BUILD_ID')
      }
    }
    
    stage('Deploy to production') {
        docker.withServer('tcp://dockerprodlinuxnode1.westeurope.cloudapp.azure.com') {
            sh "docker service update --image arturmeller/sample-app:${env.BUILD_ID} sample"
         }
    }
}    
