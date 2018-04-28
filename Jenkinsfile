pipeline {
    agent{
        label 'billing-qa-ubuntu-16.04.4'
    }
    
    stages{
        stage('checkout'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '9d6c4dfa-042c-4ed1-81c7-9175179dddda', url: 'https://github.com/aspose-words-cloud/aspose-words-cloud-node.git/']]])
                sh 'dir'
                sh 'pwd'
            }
        }
        
        stage('tests')
        {
            agent{
                docker {
                    image 'node'
                    reuseNode true
                }
            }
            steps{
                sh 'dir'
                sh 'pwd'
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
                        sh "npm run test-jenkins"
                    }
     
            }
          
        }
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
    
