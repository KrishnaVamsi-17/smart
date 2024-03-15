import React, { useState } from 'react';
import Rootlayout from "./layouts/Rootlayout";
import Twogrid from "./layouts/Twogrid";
import Gettime from "./layouts/Gettime";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleClick = () => {
    setShowForm(true);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const data = {title,image,text};

    const resp = await fetch('http://localhost:4000/vignan/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      }

    })
    const json = await resp.json();

    if(resp.ok){

      setText('');
      setImage(null);
      setTitle('');
      //window.location.reload('/');
      console.log("data Succesfully added");

    }
    setShowForm(false)
  }


  return (
    <div className="App">
      <Rootlayout />
      <Gettime />
      {showForm && (
        <div>
          <h2>Upload Data</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Text" />
            <input type="file" onChange={(e) => setImage(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {!showForm && <button onClick={handleClick}>Upload Data</button>}
    </div>
  );
}

export default App;
