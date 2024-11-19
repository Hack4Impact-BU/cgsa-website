from flask import Flask, jsonify, request, render_template
from forms import NewsletterForm, BookingForm, VolunteerForm
import pymongo
from flask_cors import CORS

main = Flask(__name__)
CORS(main, origins="*")

client = pymongo.MongoClient("mongodb+srv://mbattal:9bQ4Sb48v6xehG3C@cluster0.efjoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["cgsa_db"]

@main.route('/test_connection', methods=['GET'])
def test_connection():
    try:
        # Attempt to list the databases
        databases = client.list_database_names()
        return jsonify({"message": "Successfully connected to MongoDB Atlas!", "databases": databases}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to connect to MongoDB: {str(e)}"}), 500


@main.route('/test_db_connection', methods=['GET'])
def test_db_connection():
    try:
        # Check if the database exists
        if "cgsa_db" not in client.list_database_names():
            # Insert test data to create the database if it doesn't exist
            db.newsletters.insert_one({"test_key": "test_value"})
            return jsonify({"message": "Database created and connected successfully!"}), 200
        return jsonify({"message": "Database exists and connected successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@main.route('/')
def index():
    return "main page: index.html"

@main.route('/api/newsletter', methods=['POST'])
def newsletter():
    form = NewsletterForm(data=request.json)
    if form.validate():
        newsletter_data = {
            "first_name": form.first_name.data,
            "last_name": form.last_name.data,
            "email": form.email.data
        }
        db.newsletters.insert_one(newsletter_data)  # Access the "newsletters" collection
        return jsonify({'message': 'You have signed up for the newsletter!'}), 201
    return jsonify({'error': 'Invalid input', 'details': form.errors}), 400

@main.route('/api/booking', methods=['POST'])
def booking():
    form = BookingForm(data=request.json)
    if form.validate():
        booking_data = {
            "first_name": form.first_name.data,
            "last_name": form.last_name.data,
            "email": form.email.data,
            "club_organization": form.club_organization.data,
            "primary_contact_name": form.primary_contact_name.data,
            "primary_contact_email": form.primary_contact_email.data,
            "purpose": form.purpose.data,
            "booking_time": form.booking_time.data,
            "recurring_days": form.recurring_days.data,
            "space_needed": form.space_needed.data,
            "close_space": form.close_space.data
        }
        db.bookings.insert_one(booking_data)  # Access the "bookings" collection
        return jsonify({'message': 'Your booking has been made!'}), 201
    return jsonify({'error': 'Invalid input', 'details': form.errors}), 400

@main.route('/api/volunteer', methods=['POST'])
def volunteer():
    form = VolunteerForm(data=request.json)
    if form.validate():
        volunteer_data = {
            "first_name": form.first_name.data,
            "last_name": form.last_name.data,
            "email": form.email.data,
            "pronouns": form.pronouns.data,
            "graduation_year": form.graduation_year.data,
            "phone": form.phone.data,
            "help_events": form.help_events.data,
            "help_library": form.help_library.data,
            "safe_space": form.safe_space.data,
            "questions": form.questions.data
        }
        db.volunteers.insert_one(volunteer_data)  # Access the "volunteers" collection
        return jsonify({'message': 'Thank you for signing up to volunteer!'}), 201
    return jsonify({'error': 'Invalid input', 'details': form.errors}), 400

if __name__ == '__main__':
    main.run(debug=True, port=5000)
