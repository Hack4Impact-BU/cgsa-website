from flask_wtf import FlaskForm
from wtforms import StringField, EmailField, TextAreaField, SubmitField, RadioField
from wtforms.validators import DataRequired, Email

class VolunteerForm(FlaskForm):
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    email = EmailField('BU Email', validators=[DataRequired(), Email()])
    pronouns = StringField('Pronouns')
    graduation_year = StringField('Graduation Year')
    phone = StringField('Phone Number')
    help_events = RadioField('Are you interested in helping run events?', choices=[('yes', 'Yes'), ('no', 'No')])
    help_library = RadioField('Are you interested in helping organize our library?', choices=[('yes', 'Yes'), ('no', 'No')])
    safe_space = TextAreaField('How will you help keep the CGSA a safe space?')
    questions = StringField('Do you have any questions?')
    submit = SubmitField('Submit')

class NewsletterForm(FlaskForm):
    first_name = StringField('First Name')
    last_name = StringField('Last Name')
    email = EmailField('Email', validators=[DataRequired(), Email()])
    submit = SubmitField('Subscribe')

class BookingForm(FlaskForm):
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    email = EmailField('BU Email', validators=[DataRequired(), Email()])
    club_organization = StringField('Name of Club or Organization')
    primary_contact_name = StringField('Primary Contact Name')
    primary_contact_email = EmailField('Primary Contact Email')
    purpose = StringField('Purpose of Booking')
    booking_time = StringField('Time of Booking')  
    recurring_days = StringField('Day(s) of Week')
    space_needed = RadioField('Will you need the main space, the library, or both?', choices=[('main', 'Main Space'), ('library', 'Library'), ('both', 'Both')])
    close_space = RadioField('Will you need the space to be closed during your booking?', choices=[('yes', 'Yes'), ('no', 'No')])
    submit = SubmitField('Book')
