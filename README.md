# SpeechyNotes
Team: Vaihbav, Bob, Praj, Aditya, Ayush

## Track
Education

## Inspiration
There are often times when a student can't attend lecture, especially during times of hybrid learning. Without a complicated video and audio setup, it's difficult for lecturers to provide accommodations for virtual learners. We wanted to create a simple tool that allows lecturers to record their audio as they teach, take the audio, and provide a written transcript -- making it easier for students unable to attend in-person to follow along, at their own pace.

## What it does
SpeechyNotes allows you to paste in a link to your audio file, and it will return a text transcription.

## How we built it
We built a custom API backend on top of HackDuke sponsor [AssemblyAI](https://www.assemblyai.com/)'s speech-to-text API. For our backend, we used Flask and Python. We connected this to a React frontend that uses Node.js. For our frontend, we made API calls to our backend using Axios.

## Challenges we ran into
Connecting the backend to the frontend was the most difficult part. We had to connect two very different technologies -- Python/Flask and React/JS -- together. This isn't too common -- normally, apps built with React use backends via Express, and apps built with Python/Flask backends use Django to build the frontend. But half of our team had experience with Python/Flask, and the other half had experience with React. Knowing our team had different experiences and strengths, we managed to blend both so that everyone was able to utilize their skillset.

## Accomplishments that we're proud of
Our team is very proud of connecting the two separate backend and frontend pieces. We're also proud of the loading bar we added at the very end.

## What we learned
We all gained experience with web-development, passing data from backend to frontend, collaborating to build software as a team, and resolving technological and human conflicts.

## What's next for SpeechyNotes
We hope to improve the speed of transcription and add a feature to directly upload audio files to the site.
