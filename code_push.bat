ECHO CODE PUSH INFO.
CALL appcenter codepush release-react -a dopz/dopz.ios  -d Production -t 1.0.1
appcenter codepush release-react -a dopz/dopz.android  -d Production -t 1.0
ECHO PUSH Successful
PAUSE
