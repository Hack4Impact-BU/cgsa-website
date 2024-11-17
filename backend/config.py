import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') 
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'  # Use SQLite database can switch later to more advanced database
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable track modifications for performance





