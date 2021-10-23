import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Upload = (props) => {
    const [file, setFile] = useState("");
    const [fileSubmitted, setFileSubmitted] = useState(false);
    const [transcription, setTranscription] = useState("");


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

        axios.post('/url', {
          url: file
        })
        .then(function (response)  {
          console.log(response.data);
          setTranscription(response.data);
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
            <p>{transcription}</p>
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

const Why = (props) => {
    return (
        <div class="why">
            <h2>Why LectureNotes?</h2>

            <p>As schools adjust to new pandemic guidelines,
            learning formats are up-in-the-air.</p>

            <p>
                Some classes are held in-person, which leaves
                little room for those attending remotely
                or who are immunocompromised.
            </p>

            <p>
                For those folks, if the proper virtual-learning technology
                is not properly in-place in the classroom,
                there are many barriers to attending class.
            </p>

            <p>
                LectureNotes makes it easy for both the lecturer and the
                hybrid student
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
                    Ayush / Aditya / Prajwal / Bob / Vaibhov
            </p>
        </div>
    )
}

const App = (props) => {
    const [notes, setNotes] = useState(props.notes);
    const [newNote, setNewNote] = useState("a new note...");

    const addNote = (event) => {
        event.preventDefault();
        console.log("button clicked", event.target);

        const noteObject = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5
        }

        setNotes(notes.concat(noteObject));
        setNewNote("");
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    }

    return (
        <div>
            <div class="title">
                <div class="logo">
                    <p>LectureNotes</p>
                </div>
                <div class="desc">
                    <h1>Transcribe Your Lecture</h1>
                    <p>With LectureNotes, an audio-to-text tool</p>
                    <Scroll />
                </div>
            </div>
            <Why />
            <How />
            <Upload />
            <Team />

            <p></p>
        </div>
    );
}

export default App;
