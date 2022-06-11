import os
from flask import Flask, send_from_directory, request

app = Flask(__name__, static_folder='../react-portfolio/build/')

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route("/", methods=['POST'])
def getValue():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    return name,email,message

if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)