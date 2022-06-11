import os
import smtplib
from routes import getValue

#all this information is stored on server under os.environ
EMAIL_ADDRESS = os.environ.get('EMAIL_USER')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASS')
PERSONAL_EMAIL = os.environ.get('PERSONAL_EMAIL')

USER_ADDRESS = getValue('email') #contact email

with smtplib.SMTP('smtp.gmail.com', 587) as smtp: #587 is for gmail servers
    smtp.ehlo() #identify connection
    smtp.starttls() #encrypt traffic
    smtp.ehlo() #reidentify encrypted connection
    
    smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD) #login using email and password
    
    contact_name = getValue('name') #contact name
    contact_message = getValue('message') #contact message
    
    email_contact = f'Subject: Contact Form Confirmation\n\n Thank you for sending in your contact information via https://portfolio.chancerobinson.xyz/. A copy of what you sent is below, thank you!\nSincerely,\nChance Robinson\n\nName: {contact_name}\nMessage: {contact_message}'
    email_personal = f'Subject: Contact Submission\n\nName: {contact_name}\nEmail: {USER_ADDRESS}\nMessage: {contact_message}'
    
    #smtp.sendmail(SENDER,RECEIVER, msg)
    smtp.sendmail(EMAIL_ADDRESS, USER_ADDRESS, email_contact)
    smtp.sendmail(EMAIL_ADDRESS, PERSONAL_EMAIL, email_personal)

