from flask import Flask, request
# from requests.api import request
from converter import audio_file_to_text, to_text
import json

app = Flask(__name__, static_folder='./build', static_url_path='/')



@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

# @app.route("/file", methods=['POST', 'GET'])
# def file_to_text():
#     if request.method == 'POST':
#         print(request.data)
#         content = request.data.decode()
#         content = json.loads(content)
#         # mp3_filename = yes
#     return audio_file_to_text(mp3_filename)


@app.route("/url", methods=['POST', 'GET'])
def url_to_text():
    print(request)
    if request.method == 'POST':
        content = request.data.decode()
        content = json.loads(content)
        audio_url = content["url"]
        transcript = to_text(audio_url)
        return transcript


# if __name__ == "__main__":
#     app.run(host='localhost')
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
