import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [punch, setPunch] = useState("");

  // Function to translate English text to Tamil
  async function translateToTamil(text:String) {
    try {
      const response = await axios.get("https://api.mymemory.translated.net/get", {
        params: {
          q: text,
          langpair: "en|ta", // English to Tamil
        },
      });
      return response.data.responseData.translatedText;
    } catch (error) {
      console.error("Translation Error:", error);
      return text; // Return original text in case of error
    }
  }

  // Function to fetch a random joke and translate it
  async function getJoke() {
    try {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      const data = response.data;

      // Translate the joke setup
      const translatedJoke = await translateToTamil(data.setup);
      setJoke(translatedJoke);
      setPunch(""); // Clear punchline while waiting

      // Translate the punchline after a delay
      setTimeout(async () => {
        const translatedPunch = await translateToTamil(data.punchline);
        setPunch(translatedPunch);
      }, 3000);
    } catch (error) {
      console.log(error);
      setJoke("Oops! Can't fetch a joke, sorry 😢");
      setPunch("");
    }
  }

  return (
    <div className="main-div">
      <p className="setup">{joke || "Click the button to get a joke"}</p>
      <p className="punch">{punch}</p>
      <button onClick={getJoke}>Click for a joke</button>
    </div>
  );
}

export default App;
