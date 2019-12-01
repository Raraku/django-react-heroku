release : python manage.py migrate
web: bin/start-nginx gunicorn -c gunicorn.conf djreact.wsgi --log-file -