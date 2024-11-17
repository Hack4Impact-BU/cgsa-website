from flask import Flask
from config import Config
from models import db
from flask_mail import Mail
from flask_cors import CORS


mail = Mail()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Initialize extensions
    db.init_app(app)
    mail.init_app(app)

    CORS(app, resources={r"/api/*": {"origins": "*"}})

    with app.app_context():
        db.create_all()  # Create database tables

    from routes import main
    app.register_blueprint(main)

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
