from flask import render_template
from app import app
from app.forms import NewsletterForm

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='CGSA Website')

@app.route('/contact')
def contact():
    return "contact us"

@app.route('/booking')
def booking():
    return "book a space"

@app.route('/volunteer')
def volunteer():
    return "volunteer"

@app.route('/newsletter')
def newsletter():
    newsletterForm = NewsletterForm()
    return render_template('newsletter.html', title='Sign up!', form=newsletterForm)