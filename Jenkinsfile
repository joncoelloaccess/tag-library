node {
    def tagLibraryCdnImage

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
       tagLibraryCdnImage = docker.build("adamsandersonaccess/tag-library", "-f dockerfile .")
    }

    // stage('Test image') {
    //     /* Ideally, we would run a test framework against our image.
    //      * For this example, we're using a Volkswagen-type tagLibraryCdnImageroach ;-) */

    //     tagLibraryCdnImage.inside {
    //         sh 'echo "Tests passed"'
    //     }
    // }

    stage('Push image') {
        withCredentials([usernamePassword(credentialsId: 'PublicDockerHUB', passwordVariable: 'pass', usernameVariable: 'user')]) {
          environment {
            $DOCKER_PASS = pass
          }
          sh "cat ~/my-pass.txt |  docker login --username ${user} --password-stdin"
          tagLibraryCdnImage.push("latest")
        }

    }
}
