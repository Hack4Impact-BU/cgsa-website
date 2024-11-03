from flask import jsonify  # Import jsonify for API responses
from flask import render_template, Blueprint, request, redirect, url_for, flash
from models import Newsletter, Booking, Volunteer
from app import db
from forms import NewsletterForm, BookingForm, VolunteerForm

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')  # Create an index.html template

@main.route('/api/newsletter', methods=['POST'])
def newsletter():
    form = NewsletterForm()
    if form.validate_on_submit():
        newsletter = Newsletter(email=form.email.data)
        db.session.add(newsletter)
        db.session.commit()
        return jsonify({'message': 'You have signed up for the newsletter!'}), 201
    return jsonify({'error': 'Invalid input'}), 400

@main.route('/booking', methods=['GET', 'POST'])
def booking():
    form = BookingForm()
    if request.method == 'POST' and form.validate_on_submit():
        booking = Booking(name=form.name.data, date=form.date.data)
        db.session.add(booking)
        db.session.commit()
        flash('Your booking has been made!', 'success')
        return redirect(url_for('main.index'))
    return render_template('booking.html', form=form)

@main.route('/volunteer', methods=['GET', 'POST'])
def volunteer():
    form = VolunteerForm()
    if request.method == 'POST' and form.validate_on_submit():
        volunteer = Volunteer(name=form.name.data)
        db.session.add(volunteer)
        db.session.commit()
        flash('Thank you for signing up to volunteer!', 'success')
        return redirect(url_for('main.index'))
    return render_template('volunteer.html', form=form)

#Send automatic emails
