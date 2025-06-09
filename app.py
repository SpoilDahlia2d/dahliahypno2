from flask import Flask, render_template, send_from_directory, jsonify
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/images")
def get_images():
    folder = os.path.join(app.static_folder, "images")
    files = [f for f in os.listdir(folder) if f.lower().endswith(".png")]
    return jsonify(files)

if __name__ == "__main__":
    app.run(debug=True)
