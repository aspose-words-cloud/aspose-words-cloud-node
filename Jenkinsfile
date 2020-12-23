properties([
	gitLabConnection('gitlab'),
	[$class: 'ParametersDefinitionProperty', 
		parameterDefinitions: [
			[$class: 'StringParameterDefinition', name: 'branch', defaultValue: 'master', description: 'the branch to build'],
			[$class: 'StringParameterDefinition', name: 'apiUrl', defaultValue: 'https://api-qa.aspose.cloud', description: 'api url'],
            [$class: 'BooleanParameterDefinition', name: 'ignoreCiSkip', defaultValue: false, description: 'ignore CI Skip'],
		]
	]
])

def needToBuild = false

def runtests(dockerImageVersion)
{
    dir(dockerImageVersion){
        try {
			gitlabCommitStatus("checkout") {
				stage('checkout'){
					checkout([$class: 'GitSCM', branches: [[name: params.branch]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '361885ba-9425-4230-950e-0af201d90547', url: 'https://git.auckland.dynabic.com/words-cloud/words-cloud-node.git']]])
					
                    sh 'git show -s HEAD > gitMessage'
                    def commitMessage = readFile('gitMessage').trim()
                    echo commitMessage
                    needToBuild = params.ignoreCiSkip || !commitMessage.contains('[ci skip]')               
                    sh 'git clean -fdx'
                    
                    def apiUrl = params.apiUrl
                    
                    if (needToBuild) {
                        withCredentials([usernamePassword(credentialsId: '6839cbe8-39fa-40c0-86ce-90706f0bae5d', passwordVariable: 'ClientSecret', usernameVariable: 'ClientId')]) {
                            sh 'echo "{\\"ClientId\\": \\"$ClientId\\",\\"ClientSecret\\": \\"$ClientSecret\\", \\"BaseUrl\\":\\"$apiUrl\\"}" > testConfig.json'
                        }
                    }
				}
			}
            
            if (needToBuild) {
                docker.image('node:' + dockerImageVersion).inside{
                    gitlabCommitStatus("build") {
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
                                if (params.branch == 'refs/heads/master'){
                                    sh "npm run lint"
                                }
                            }
                        }
                    }
                    
                    gitlabCommitStatus("tests") {
                        stage('tests'){   
                            try {
                                sh "npm run test-jenkins"
                            } finally {
                                junit 'reports/**.xml'
                            }
                        }
                    }
                    
                    gitlabCommitStatus("bdd-tests") {
                        stage('bdd-tests'){
                            try {
                                sh "npm run gulp cucumber"
                            } finally {
                                cucumber 'reports/**.json'
                            }
                        }
                    }
                } 
            }
        } finally {                       
            deleteDir()
			sh 'docker system prune -f'
        }
    }
}

node('words-linux') {        
    runtests("latest")   
}