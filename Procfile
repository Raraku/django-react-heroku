release : python manage.py migrate
web: bin/start-nginx bin/start-pgbouncer-stunnel gunicorn -c gunicorn.conf djreact.wsgi --log-file -
worker: bin/start-pgbouncer-stunnel