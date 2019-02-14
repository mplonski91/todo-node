Komendy do obsługi aplikacji CLI

1)Dodawanie zadania
node app.js addTask --title="nazwa_zadania"

W przypadku dodania zadania z grupą musimy dodać jeszcze jeden parametr --group
node app.js addTask --title="nazwa_zadania" --group="nazwa_grupy"

2)Usuwanie zadania
node app.js removeTask --title="nazwa_zadania"

3)Zmiana statusu zadania
node app.js changeStatus --title="nazwa_zadania" --status="0" -> aktywne
node app.js changeStatus --title="nazwa_zadania" --status="0" -> kompletne

4)Filtrowanie zadań po statusie
node app.js filterTask --status="aktywne"  
node app.js filterTask --status="kompletne"

5)Wyświetlanie zadań po grupie
node app.js groupsTasks --group="nazwa_zadania grupy"
