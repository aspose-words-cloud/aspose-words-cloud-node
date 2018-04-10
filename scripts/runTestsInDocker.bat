docker build --rm -t asposenodewindows ./scripts ||  goto :error
docker run -v %cd%:c:\app --rm asposenodewindows scripts\runTests.bat

goto :EOF

:error
echo Failed with error #%errorlevel%.
exit /b %errorlevel%