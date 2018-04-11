call npm.cmd install ||  goto :error
call npm.cmd run gulp build ||  goto :error
call npm.cmd run lint ||  goto :error
call npm.cmd run test-jenkins ||  goto :error

goto :EOF

:error
echo Failed with error #%errorlevel%.
exit /b %errorlevel%
