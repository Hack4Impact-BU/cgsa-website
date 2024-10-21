import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') 
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'  # Use SQLite database can switch later to more advanced database
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable track modifications for performance
    MAIL_SERVER = 'sandbox.smtp.mailtrap.io'
    MAIL_PORT = 2525
    MAIL_USERNAME = 'sdasad'
    MAIL_PASSWORD = 'sasadsaddas'
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False




