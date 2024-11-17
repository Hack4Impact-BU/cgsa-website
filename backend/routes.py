from flask import jsonify, Blueprint, request, redirect, url_for, flash
from models import Newsletter, Booking, Volunteer
from app import db
from forms import NewsletterForm, BookingForm, VolunteerForm
import json

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return 'CGSA Backend'

@main.route('/api/newsletter', methods=['POST'])
def newsletter():
    form = NewsletterForm()
    if form.validate_on_submit():
        newsletter = Newsletter(first_name=form.first_name.data, last_name=form.last_name.data, email=form.email.data)
        db.session.add(newsletter)
        db.session.commit()
        return jsonify({'message': 'You have signed up for the newsletter!'}), 201
    return jsonify({'error': 'Invalid input'}), 400

@main.route('/api/booking', methods=['POST'])
def booking():
    form = BookingForm()
    if form.validate_on_submit():
        booking = Booking(
            first_name=form.first_name.data,
            last_name=form.last_name.data,
            email=form.email.data,
            club_organization=form.club_organization.data,
            primary_contact_name=form.primary_contact_name.data,
            primary_contact_email=form.primary_contact_email.data,
            purpose=form.purpose.data,
            booking_time=form.booking_time.data,
            recurring_days=form.recurring_days.data,
            space_needed=form.space_needed.data,
            close_space=form.close_space.data
        )
        db.session.add(booking)
        db.session.commit()
        return jsonify({'message': 'Your booking has been made!'}), 201
    return jsonify({'error': 'Invalid input'}), 400

@main.route('/api/volunteer', methods=['POST'])
def volunteer():
    form = VolunteerForm()
    if form.validate_on_submit():
        volunteer = Volunteer(
            first_name=form.first_name.data,
            last_name=form.last_name.data,
            email=form.email.data,
            pronouns=form.pronouns.data,
            graduation_year=form.graduation_year.data,
            phone=form.phone.data,
            help_events=form.help_events.data,
            help_library=form.help_library.data,
            safe_space=form.safe_space.data,
            questions=form.questions.data
        )
        db.session.add(volunteer)
        db.session.commit()
        return jsonify({'message': 'Thank you for signing up to volunteer!'}), 201
    return jsonify({'error': 'Invalid input'}), 400

@main.route('/text', methods=['GET'])
def text():
    return json.load(open('pages.json'))