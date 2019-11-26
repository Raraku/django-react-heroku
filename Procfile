release : python manage.py migrate
web: bin/start-nginx bin/start-pgbouncer-stunnel gunicorn djreact.wsgi --log-file -
worker: bin/start-pgbouncer-stunnel python manage.py qcluster