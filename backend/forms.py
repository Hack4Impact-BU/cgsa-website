from flask_wtf import FlaskForm
from wtforms import EmailField, SubmitField, StringField, DateTimeLocalField
from wtforms.validators import DataRequired

class NewsletterForm(FlaskForm):
    email = EmailField('Enter Email', validators=[DataRequired()])
    submit = SubmitField('Submit')

class ContactForm(FlaskForm):
    name = StringField('Your name', validators=[DataRequired()])
    email = EmailField('Your mail', validators=[DataRequired()])
    message = StringField('Your Message', validators=[DataRequired()])

class VolunteerForm(FlaskForm):
    name = StringField('Your name', validators=[DataRequired()])
    email = EmailField('Your mail', validators=[DataRequired()])
    message = StringField('Your Message', validators=[DataRequired()])

class BookingForm(FlaskForm):
    name = StringField('Your name', validators=[DataRequired()])
    email = EmailField('Your mail', validators=[DataRequired()])
    date = DateTimeLocalField('Which date is your favorite?', format='%m/%d/%y', validators=[DataRequired()])
    message = StringField('Your Message', validators=[DataRequired()])