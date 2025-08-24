from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/")
def index():
    return jsonify({"message":"Staff VST system running on Vercel!"})

@app.route("/scan", methods=["POST"])
def scan():
    data = request.json
    staff_id = data.get("staff_id")
    if staff_id == "123":
        return jsonify({"status":"valid","staff_id":staff_id})
    return jsonify({"status":"invalid","staff_id":staff_id})
