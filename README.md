Komendy do obsługi aplikacji CLI

1)Dodawanie zadania<br />
<strong>node app.js addTask --title="nazwa_zadania"</strong>

W przypadku dodania zadania z grupą musimy dodać jeszcze jeden parametr <strong>--group</strong><br />
<strong>node app.js addTask --title="nazwa_zadania" --group="nazwa_grupy"</strong>

2)Usuwanie zadania<br />
<strong>node app.js removeTask --title="nazwa_zadania"</strong>

3)Zmiana statusu zadania<br />
<strong>node app.js changeStatus --title="nazwa_zadania" --status="0" -> aktywne</strong><br />
<strong>node app.js changeStatus --title="nazwa_zadania" --status="0" -> kompletne</strong>

4)Filtrowanie zadań po statusie<br />
<strong>node app.js filterTask --status="aktywne" </strong><br />
<strong>node app.js filterTask --status="kompletne"</strong>

5)Wyświetlanie zadań po grupie<br />
<strong>node app.js groupsTasks --group="nazwa_zadania grupy"</strong>
