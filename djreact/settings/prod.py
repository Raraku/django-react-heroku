from .base import *

DEBUG = False

DATABASES = {}
DATABASES['default'] = dj_database_url.config(conn_max_age=600, ssl_require=False)
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

django_heroku.settings(locals())