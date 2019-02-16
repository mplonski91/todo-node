Komendy do obsługi aplikacji CLI

<strong>1)Dodawanie zadania</strong><br />
node app.js addTask --title="nazwa_zadania"

W przypadku dodania zadania z grupą musimy dodać jeszcze jeden parametr <strong>--group</strong><br />
node app.js addTask --title="nazwa_zadania" --group="nazwa_grupy"

<strong>2)Usuwanie zadania</strong><br />
node app.js removeTask --title="nazwa_zadania"

<strong>3)Zmiana statusu zadania</strong><br />
node app.js changeStatus --title="nazwa_zadania" --status="0" -> aktywne<br />
node app.js changeStatus --title="nazwa_zadania" --status="0" -> kompletne

<strong>4)Filtrowanie zadań po statusie</strong><br />
node app.js filterTask --status="aktywne"<br />
node app.js filterTask --status="kompletne"

<strong>5)Wyświetlanie zadań po grupie</strong><br />
node app.js groupsTasks --group="nazwa_grupy"

<strong>5)Pobranie danych z serwera</strong><br />
node app.js download
