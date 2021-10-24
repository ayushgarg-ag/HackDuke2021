import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ProgressBar } from 'reprogressbars'


const Why = (props) => {
    return (
        <div class="why">
            <h2>Why SpeechyNotes?</h2>

            <p>As schools adjust to new pandemic guidelines,
            learning formats are up-in-the-air.</p>

            <p>
                Some classes are held in-person, which leaves
                little room for those attending remotely
                or who are immunocompromised.
            </p>

            <p>
                For those folks, there are many barriers to attending class,
                especially if proper virtual-learning technology (cameras, audio recording)
                are not set up.
            </p>

            <p>
                SpeechyNotes makes it easy for both the lecturer and the
                hybrid student.
            </p>

            <ul>

            </ul>
        </div>
    )
}

const How = (props) => {
    return (
        <div class="how">
            <h2>3 Simple Steps</h2>

            <ol>
                <li><strong>Record.</strong> The lecturer records their audio during the class — this requires no complicated virtual-learning technical setup. </li>
                <li><strong>Upload</strong> the audio file to LectureNotes.</li>
                <li><strong>Notes.</strong> The hybrid student can now stay up-to-date with a live transcript of the class.</li>
            </ol>
        </div>
    )
}

const Scroll = (props) => {
    return (

        <div class="mouse_scroll">

    		<div>
    			<span class="m_scroll_arrows unu"></span>
    			<span class="m_scroll_arrows doi"></span>
    			<span class="m_scroll_arrows trei"></span>
    		</div>
        </div>
    )
}

const Team = (props) => {
    return (
        <div class="team">
            <p>
                Built @ HackDuke:
                    Ayush / Aditya / Prajwal / Bob / Vaibhav
            </p>
        </div>
    )
}

const App = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState("");
    const [fileSubmitted, setFileSubmitted] = useState(false);
    const [transcription, setTranscription] = useState("");

    const Upload = (props) => {
        const fileURLHandler = (event) => {
            event.preventDefault()
            console.log(event.target.value)
            setFile(event.target.value)
            setFileSubmitted(false);
        }

        const submitHandler = (event) => {
            event.preventDefault()
            console.log("button pressed!")
            console.log(file)
            setFileSubmitted(true);
            setIsLoading(true);

            axios.post('/url', {
              url: file
            })
            .then(function (response)  {
              console.log(response.data);
              setTranscription(response.data);
              setIsLoading(false);
              console.log("Got the info back!")
            })
            .catch(function (error) {
              console.log(error);
            });

          return (
              <p>{file}</p>
          )
        }

        const displayTrans = () => {
            return (
                <p class="transcript">{transcription}</p>
            )
        }

        return (
            <div class="upload">
                <h3>Paste your audio file link here.</h3>
                <form>
                  <input type="text" onChange={fileURLHandler}/>
                  <button type="submit" onClick={submitHandler}>Upload</button>
                </form>
                {fileSubmitted ? displayTrans() : ""}
            </div>
        )
    }

    return (
        <div>
            <div class="title">
                <div class="logo">
                    <p>SpeechyNotes</p>
                </div>
                <div class="desc">
                    <h1>Transcribe Your Lecture</h1>
                    <p>With SpeechyNotes, an audio-to-text tool</p>
                    <Scroll />
                </div>
            </div>
            <Why />
            <How />
            <Upload />
            <ProgressBar isLoading={isLoading} />
            <Team />

            <p></p>
        </div>
    );
}

export default App;
