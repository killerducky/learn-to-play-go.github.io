:start
set /p comment="comment: "

if %comment%=""(
echo "nezadán komentář"
goto start
) 

echo git add *
echo git commit -m "%comment%"
echo git push origin master
pause