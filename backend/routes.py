# import os
import smtplib
from flask import Flask, render_template, send_from_directory, request, redirect
from flask_cors import CORS, cross_origin

#all this information is stored on server under os.environ
# EMAIL_ADDRESS = os.environ.get('EMAIL_USER')
# EMAIL_PASSWORD = os.environ.get('EMAIL_PASS')
# PERSONAL_EMAIL = os.environ.get('PERSONAL_EMAIL')
EMAIL_ADDRESS = 'chancerobinsonportfolio@gmail.com'
SMTP_PASSWORD = 'qxbmlddkgekfiust'
PERSONAL_EMAIL = 'brighamyoung2@gmail.com'

app = Flask(__name__, static_folder='../react-portfolio/build', static_url_path='/')
CORS(app, support_credentials=True)

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.route("/api", methods=['GET','POST'])
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
                            f' via https://portfolio1.chancerobinson.xyz/. A copy of what you sent is below, thank you!\n\nSincerely,'
                            f'\nChance Robinson\n{PERSONAL_EMAIL}\n\n[Your Form information]\nName: {contact_name}\nMessage: {contact_message}')
        email_personal = f'Subject: Contact Submission\n\nName: {contact_name}\nEmail: {USER_ADDRESS}\nMessage: {contact_message}'
        
        #smtp.sendmail(SENDER,RECEIVER, msg)
        smtp.sendmail(EMAIL_ADDRESS, USER_ADDRESS, email_contact)
        smtp.sendmail(EMAIL_ADDRESS, PERSONAL_EMAIL, email_personal)
    return ('', 204)

if __name__ == '__main__':
    app.run(use_reloader=True, host="0.0.0.0", threaded=True)

