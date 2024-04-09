// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import ClosedBook from "./ClosedBook";
import OpenBook from "./OpenBook";

function App() {
  const [showClosedBook, setShowClosedBook] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClosedBook(false); 
    }, 8000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showClosedBook ? (
        <div className="book-container">
          <ClosedBook />
        </div>
      ) : (
        <div className="book-container">
          <OpenBook />
        </div>
      )}
    </div>
  );
}

export default App;
