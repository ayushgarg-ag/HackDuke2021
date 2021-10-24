from flask import Flask

app = Flask(__name__)

@app.route('/members', methods=['GET'])
def members():
    return {"members": ["Vaibhav", "Sharma", "Duke"]}

if __name__ == "__main__":
    app.run(port=5000, debug=True)