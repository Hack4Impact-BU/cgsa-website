from flask import Flask
from config import Config
from models import db
from flask_cors import CORS 


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app) 
    db.init_app(app)  # Initialize the app with SQLAlchemy

    with app.app_context():
        db.create_all()  # Create database tables

    from routes import main  
    app.register_blueprint(main)  

    return app


if __name__ == '__main__':
    app = create_app()  
    app.run(debug=True)  

