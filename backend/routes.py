from flask import render_template, Blueprint, request, redirect, url_for, flash
from models import Contact, Newsletter, Booking, Volunteer
from app import db
from forms import ContactForm, NewsletterForm, BookingForm, VolunteerForm

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')  # Create an index.html template

@main.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()
    if request.method == 'POST' and form.validate_on_submit():
        contact = Contact(name=form.name.data, email=form.email.data, message=form.message.data)
        db.session.add(contact)
        db.session.commit()
        flash('Your message has been sent!', 'success')
        return redirect(url_for('main.index'))
    return render_template('contact.html', form=form)

@main.route('/newsletter', methods=['GET', 'POST'])
def newsletter():
    form = NewsletterForm()
    if request.method == 'POST' and form.validate_on_submit():
        newsletter = Newsletter(email=form.email.data)
        db.session.add(newsletter)
        db.session.commit()
        flash('You have signed up for the newsletter!', 'success')
        return redirect(url_for('main.index'))
    return render_template('newsletter.html', form=form)

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
