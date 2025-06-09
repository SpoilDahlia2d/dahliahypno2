from flask import Flask, render_template, send_from_directory, jsonify
import os
import random

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/images')
def images():
    path = os.path.join(app.static_folder, 'images')
    all_files = os.listdir(path)
    imgs = [f for f in all_files if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    return jsonify(imgs)

if __name__ == '__main__':
    app.run(debug=True)
