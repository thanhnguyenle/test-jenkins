pipeline{
    agent any
    tools {
        jfrog 'jfrog-cli-latest'
    }
    stages {
        stage ('Testing') {
            steps {
                jf '-v' 
                jf 'c show'
                jf 'rt ping'
                sh 'touch test-file'
                jf 'rt u test-file my-repo/'
                jf 'rt bp'
                jf 'rt dl my-repo/test-file'
            }
        } 
    }
}