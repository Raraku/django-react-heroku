from .base import *

DEBUG = False

DATABASES = {}
DATABASES['default'] = dj_database_url.config(conn_max_age=600, ssl_require=False)