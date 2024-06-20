

import React, { useState, useEffect } from "react";
import "./App.css";
import ClosedBook from "./ClosedBook";
import OpenBook from "./OpenBook";
import BookShelf from "./BookShelf";

function App() {
  const [showClosedBook, setShowClosedBook] = useState(true);
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClosedBook(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BookShelf/>
      {!clicked?      
       <div className="userNote">
        <p>CLICK BOOK TO BEGIN</p>
        <p>PLEASE USE A WEB BROWSER FOR THE BEST EXPERIENCE </p>
        <p>Built by Arianna with JavaScript, React, HTML, & CSS</p>
      </div> : 
      ''}
      {showClosedBook ? (
        <div className="book-container">
          <ClosedBook />
        </div>
      ) : (
        <div className="book-container">
          <OpenBook 
            clicked={clicked}
            setClicked={setClicked}
          />
        </div>
      )}
    </div>
  );
}

export default App;
