@echo off
cd /d "%~dp0"
echo Abra http://127.0.0.1:4173 no navegador.
python -m http.server 4173 --bind 127.0.0.1
pause
