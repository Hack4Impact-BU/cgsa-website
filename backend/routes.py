from flask import render_template, Blueprint, request, redirect, url_for, flash, jsonify, current_app
from models import Contact, Newsletter, Booking, Volunteer
from app import db
from flask_mail import Mail, Message

main = Blueprint('main', __name__)

mail = Mail()  # Will be initialized in app.py


@main.route('/')
def index():
    return render_template('index.html')


@main.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()
    if request.method == 'POST' and form.validate_on_submit():
        contact = Contact(name=form.name.data, email=form.email.data, message=form.message.data)
        try:
            db.session.add(contact)
            db.session.commit()
            flash('Your message has been sent!', 'success')
        except Exception as e:
            db.session.rollback()
            current_app.logger.error(f"Database Error: {e}")
            flash('Failed to send message. Please try again later.', 'danger')
        return redirect(url_for('main.index'))
    return render_template('contact.html', form=form)


@main.route('/api/newsletter', methods=['POST'])
def newsletter():
    data = request.json  # Parse incoming JSON
    if not data or not all(key in data for key in ('email')):
        return jsonify({'error': 'Invalid input'}), 400

    try:
        # Attempt to create a new Newsletter record
        newsletter = Newsletter(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email']
        )
        db.session.add(newsletter)
        db.session.commit()
        return jsonify({'message': 'You have signed up for the newsletter!'}), 201
    except Exception as e:
        db.session.rollback()  # Rollback in case of database errors
        current_app.logger.error(f"Error occurred: {e}")  # Log the error
        return jsonify({'error': 'An internal error occurred. Please try again later.'}), 500


@main.route('/api/booking', methods=['POST'])
def booking():
    data = request.json  # Parse JSON input

    # List of required fields
    required_fields = [
        'first_name', 'last_name', 'email',
        'primary_contact_name', 'primary_contact_email',
        'purpose', 'booking_time', 'space_needed', 'close_space'
    ]

    # Check for missing fields
    missing_fields = [field for field in required_fields if field not in data or not data[field]]

    if missing_fields:
        current_app.logger.error(f"Missing fields: {missing_fields}")
        return jsonify({'error': f'Missing fields: {", ".join(missing_fields)}'}), 400

    try:
        # Create a new booking
        booking = Booking(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            club_organization=data['club_organization'],
            primary_contact_name=data['primary_contact_name'],
            primary_contact_email=data['primary_contact_email'],
            purpose=data['purpose'],
            booking_time=data['booking_time'],
            recurring_days=data['recurring_days'],
            space_needed=data['space_needed'],
            close_space=data['close_space']
        )
        db.session.add(booking)
        db.session.commit()
        return jsonify({'message': 'Your booking has been made!'}), 201
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Error occurred: {e}")
        return jsonify({'error': 'An internal error occurred. Please try again later.'}), 500


@main.route('/api/volunteer', methods=['OPTIONS', 'POST'])
def volunteer():
    if request.method == 'OPTIONS':
        return '', 200  # Preflight request

    data = request.json  # Parse JSON input
    if not data or not all(key in data for key in (
        'first_name', 'last_name', 'email', 'pronouns', 'graduation_year',
        'phone', 'help_events', 'help_library', 'safe_space', 'questions'
    )):
        return jsonify({'error': 'Invalid input'}), 400

    try:
        volunteer = Volunteer(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            pronouns=data['pronouns'],
            graduation_year=data['graduation_year'],
            phone=data['phone'],
            help_events=data['help_events'],
            help_library=data['help_library'],
            safe_space=data['safe_space'],
            questions=data['questions']
        )
        db.session.add(volunteer)
        db.session.commit()
        return jsonify({'message': 'Thank you for signing up to volunteer!'}), 201
    except Exception as e:
        db.session.rollback()
        current_app.logger.error(f"Database Error: {e}")
        return jsonify({'error': 'Database error occurred'}), 500


@main.route('/send_email', methods=['POST'])
def send_email():
    try:
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        msg = Message(
            subject='Contact Us Form Submission',
            sender=current_app.config['MAIL_USERNAME'],
            recipients=['receipt@example.com']
        )

        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"

        mail.send(msg)
        flash('Message sent!', 'success')
    except Exception as e:
        current_app.logger.error(f"Email sending failed: {e}")
        flash('Failed to send message. Please try again later.', 'danger')

    return redirect(url_for('main.index'))

@main.route('/text', methods=['GET'])
def text():
    return json.load(open('pages.json'))
