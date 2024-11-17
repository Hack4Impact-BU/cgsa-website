from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Volunteer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    pronouns = db.Column(db.String(20))
    graduation_year = db.Column(db.String(10))
    phone = db.Column(db.String(20))
    help_events = db.Column(db.String(10))
    help_library = db.Column(db.String(10))
    safe_space = db.Column(db.Text)
    questions = db.Column(db.String(200))

class Newsletter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    email = db.Column(db.String(100), nullable=False, unique=True)

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    club_organization = db.Column(db.String(100))
    primary_contact_name = db.Column(db.String(100))
    primary_contact_email = db.Column(db.String(100))
    purpose = db.Column(db.String(200))
    booking_time = db.Column(db.String(100))  
    recurring_days = db.Column(db.String(100))
    space_needed = db.Column(db.String(10))
    close_space = db.Column(db.String(10))

class Admin(db.model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    blog_post = db.Column(db.String(300))