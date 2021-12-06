from flask import Flask, request
# from requests.api import request
from converter import audio_file_to_text, to_text
import json

app = Flask(__name__)

@app.route("/")
def main():
    return "<h1>Hello! Two</h1>"


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


if __name__ == "__main__":
    app.run(host='localhost')