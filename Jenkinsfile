def runtests(dockerImageVersion)
{
    dir(dockerImageVersion){
        try {
            stage('checkout'){
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '9d6c4dfa-042c-4ed1-81c7-9175179dddda', url: 'https://github.com/aspose-words-cloud/aspose-words-cloud-node.git/']]])
                withCredentials([usernamePassword(credentialsId: '6839cbe8-39fa-40c0-86ce-90706f0bae5d', passwordVariable: 'AppKey', usernameVariable: 'AppSid')]) {
                    sh 'echo "{\\"AppSid\\": \\"$AppSid\\",\\"AppKey\\": \\"$AppKey\\", \\"BaseUrl\\": \\"https://auckland-words-cloud-staging.dynabic.com\\"}" > testConfig.json'
                }
            }
            
            docker.image('node:' + dockerImageVersion).inside{
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
					try {
						sh "npm run test-jenkins"
					} finally {
						junit 'reports/**.xml'
					}
                }
            
                stage('bdd-tests'){
					try {
						sh "npm run gulp cucumber"
					} finally {
						cucumber 'reports/**.json'
					}
                }
            }        
        } finally {                       
            deleteDir()
        }
    }
}
properties([pipelineTriggers([[$class: 'GitHubPushTrigger'], pollSCM('H/15 * * * *')])])
node('billing-qa-ubuntu-16.04.4') {
    
    parallel ( failFast: false,
        NodeLatest: { runtests("latest") },
        Node6:   { runtests("6") },
    )    
   
}