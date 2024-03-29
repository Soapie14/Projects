from flask import render_template, redirect, request, session, flash

from flask_app import app
from flask_app.models.user import User

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return render_template('index.html')
    

@app.route('/resume')
def projects():
    return render_template('resume.html')
