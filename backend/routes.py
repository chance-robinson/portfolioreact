# import os
import smtplib
from flask import Flask, send_from_directory, request, redirect
from flask_cors import CORS, cross_origin

#all this information is stored on server under os.environ
# EMAIL_ADDRESS = os.environ.get('EMAIL_USER')
# EMAIL_PASSWORD = os.environ.get('EMAIL_PASS')
# PERSONAL_EMAIL = os.environ.get('PERSONAL_EMAIL')
EMAIL_ADDRESS = 'chancerobinsonportfolio@gmail.com'
SMTP_PASSWORD = 'qxbmlddkgekfiust'
PERSONAL_EMAIL = 'brighamyoung2@gmail.com'

app = Flask(__name__, static_folder='../react-portfolio/build/')
CORS(app, support_credentials=True)

@app.route("/", methods=['post'])
@cross_origin(supports_credentials=True)
def getValue():
    USER_ADDRESS = request.form['email'] #contact email

    with smtplib.SMTP('smtp.gmail.com', 587) as smtp: #587 is for gmail servers
        smtp.ehlo() #identify connection
        smtp.starttls() #encrypt traffic
        smtp.ehlo() #reidentify encrypted connection
        
        smtp.login(EMAIL_ADDRESS, SMTP_PASSWORD) #login using email and password
        
        contact_name = request.form['name'] #contact name
        contact_message = request.form['message'] #contact message
        
        email_contact = (f'Subject: Contact Form Submission\n\nThank you for sending in your contact information' 
                            f' via https://portfolio.chancerobinson.xyz/. A copy of what you sent is below, thank you!\n\nSincerely,'
                            f'\nChance Robinson\nbrighamyoung2@gmail.com\n\n[Your Form information]\nName: {contact_name}\nMessage: {contact_message}')
        email_personal = f'Subject: Contact Submission\n\nName: {contact_name}\nEmail: {USER_ADDRESS}\nMessage: {contact_message}'
        
        #smtp.sendmail(SENDER,RECEIVER, msg)
        smtp.sendmail(EMAIL_ADDRESS, USER_ADDRESS, email_contact)
        smtp.sendmail(EMAIL_ADDRESS, PERSONAL_EMAIL, email_personal)
    return ('', 204)

if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)

