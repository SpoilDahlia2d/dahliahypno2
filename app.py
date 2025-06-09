from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/images')
def get_images():
    folder = os.path.join(app.static_folder, 'images')
    allowed_exts = ('.png', '.jpg', '.jpeg', '.webp')
    images = [
        f'/static/images/{filename}'
        for filename in os.listdir(folder)
        if filename.lower().endswith(allowed_exts)
    ]
    return jsonify(images)

if __name__ == '__main__':
    app.run(debug=True)
