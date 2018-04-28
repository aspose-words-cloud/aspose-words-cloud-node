node('billing-qa-ubuntu-16.04.4') {
    try {
    stage('checkout'){
        checkout([$class: 'GitSCM', branches: [[name: '*/WORDSCLOUD-401']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '9d6c4dfa-042c-4ed1-81c7-9175179dddda', url: 'https://github.com/aspose-words-cloud/aspose-words-cloud-node.git/']]])
        withCredentials([usernamePassword(credentialsId: '6839cbe8-39fa-40c0-86ce-90706f0bae5d', passwordVariable: 'AppKey', usernameVariable: 'AppSid')]) {
            sh 'echo "{\\"AppSid\\": \\"$AppSid\\",\\"AppKey\\": \\"$AppKey\\", \\"BaseUrl\\": \\"http://auckland-words-cloud-staging.dynabic.com\\"}" > testConfig.json'
        }
    }
        
    docker.image('node').inside{
        stage('build'){
            withEnv([
                    /* Override the npm cache directory to avoid: EACCES: permission denied, mkdir '/.npm' */
                    'npm_config_cache=npm-cache',
                    /* set home to our current directory because other bower
                     * nonsense breaks with HOME=/, e.g.:
                     * EACCES: permission denied, mkdir '/.config'
                     */
                    'HOME=.',
                ]) {
                sh "npm install"
                sh "npm run gulp build"
                sh "npm run lint"
            }
        }
            
        stage('tests'){   
            sh "npm run test-jenkins"
        }
            
        stage('bdd-tests'){
            sh "npm run gulp cucumber"
        }
    }
    
    } finally {
        def currentResult = currentBuild.result ?: 'SUCCESS'
        if (currentResult == 'UNSTABLE') {
            echo 'Build UNSTABLE'
        }

        junit 'reports/**.xml'
        cucumber 'reports/**.json'
        cleanWs()
    }
}