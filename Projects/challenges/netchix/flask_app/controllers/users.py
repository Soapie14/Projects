from flask import Flask, render_template, session, redirect, request
from flask_app import app

from flask_app.models.user import User 
from flask_app.models.item import Item

from flask import flash

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route("/")
def index():
    return render_template("login.html")