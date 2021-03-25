import json
from flask import request
from flask_cors import cross_origin

from app import app
from app.mail import send_email


@app.route('/api/send-email', methods=['POST'])
@cross_origin()
def sendEmail():
    data = json.loads(request.data.decode("utf-8"))
    send_email(data['title'], data['text'])
    return "200 OK"