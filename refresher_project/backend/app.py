from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    print("recieved data", data)
    
    return jsonify({
        "message": "Data received successfully!",
        "data": data
    })
    
if __name__ == '__main__':
    app.run(port=5000, debug=True)