from hello_world.settings.base import *

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "8lj(bgx5_*o%d1$u-#gco+ioorntjjlybb#i1+rl-il0jb=)d7"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

#CORS_ORIGIN_ALLOW_ALL = True

# ALLOWED_HOSTS = ['*'] #TEMPORARY
ALLOWED_HOSTS = ["backend","localhost","localhost:8000","backend:8000"]
