import requests
from time import sleep
import pprint

upload_endpoint = 'https://api.assemblyai.com/v2/upload'
transcript_endpoint = "https://api.assemblyai.com/v2/transcript"
headers = {
    "authorization": "2f62101ab6d142739f8f5fb89665c72e",
    "content-type": "application/json"
}

# audio_url = "https://s3-us-west-2.amazonaws.com/blog.assemblyai.com/audio/8-7-2018-post/7510.mp3"

def read_file(filename):
    with open(filename, 'rb') as _file:
        while True:
            data = _file.read(5242880)
            if not data:
                break
            yield data

def audio_file_to_text(mp3_filename):
    upload_response = requests.post(
        upload_endpoint,
        headers=headers, data=read_file(mp3_filename)
    )
    print('Audio file uploaded')
    to_text(audio_url=upload_response.json()['upload_url'], filename="result.txt")
    # transcript_request = {'audio_url': upload_response.json()['upload_url']}
    return upload_response.json()['upload_url']


def to_text(audio_url, filename="result.txt"):
    transcript_request = {'audio_url': audio_url}
    transcript_response = requests.post(
        transcript_endpoint, json=transcript_request, headers=headers)

    print('Transcription Requested')
    pprint.pprint(transcript_response.json())
    polling_response = requests.get(
        transcript_endpoint+"/"+transcript_response.json()['id'], headers=headers)
    # print(polling_response)

    # filename = transcript_response.json()['id'] + '.txt'
    # print(filename)
    while polling_response.json()['status'] != 'completed':
        sleep(30)
        polling_response = requests.get(
            transcript_endpoint+"/"+transcript_response.json()['id'], headers=headers)
        # print(polling_response)
        print("File is", polling_response.json()['status'])
    
    return polling_response.json()['text']

    # with open(filename, 'w') as f:
    #     f.write(polling_response.json()['text'])
    # print('Transcript saved to', filename)
