properties([
	parameters([string(defaultValue: 'master', description: 'the branch to build', name: 'branch', trim: true)])
])

def runtests(dockerImageVersion)
{
    dir(dockerImageVersion){
        try {
            stage('checkout'){
                checkout([$class: 'GitSCM', branches: [[name: '*/' + params.branch]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '361885ba-9425-4230-950e-0af201d90547', url: 'https://git.auckland.dynabic.com/words-cloud/words-cloud-node.git']]])
                withCredentials([usernamePassword(credentialsId: '6839cbe8-39fa-40c0-86ce-90706f0bae5d', passwordVariable: 'AppKey', usernameVariable: 'AppSid')]) {
                    sh 'echo "{\\"AppSid\\": \\"$AppSid\\",\\"AppKey\\": \\"$AppKey\\"}" > testConfig.json'
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
                        if (params.branch == 'master'){
                            sh "npm run lint"
                        }
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

node('words-linux') {        
    runtests("latest")   
}