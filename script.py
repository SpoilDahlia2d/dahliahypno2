from flask import Flask, render_template, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/images')
def get_images():
    folder = os.path.join(app.static_folder)
    files = [f'static/{f}' for f in os.listdir(folder) if f.lower().endswith('.png')]
    return jsonify(files)

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(debug=True)
