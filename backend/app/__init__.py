from flask import Flask
from flask_cors import CORS
from app.config import Config
from flask_mail import Mail

app = Flask(__name__, instance_relative_config=True)

app.config.from_object(Config)
cors = CORS(app, origins='*')
mail = Mail(app)
