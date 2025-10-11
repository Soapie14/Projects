import React, { useState } from 'react';
import Welcome from './Welcome';
import Questionnaire from './Form.js'; // make sure path is correct
import './App.css'; // assuming your styles are here

function App() {
  // control whether the questionnaire is visible
  const [showQuestionnaire, setShowQuestionnaire] = useState(true);

  return (
    <div className="App">
      

      <main>
        <Welcome />
        {/* Maybe other components, routes, etc. */}
      </main>

      {/* Popup overlay only appears if showQuestionnaire = true */}
      {showQuestionnaire && (
        <Questionnaire onClose={() => setShowQuestionnaire(false)} />
      )}
    </div>
  );
}

export default App;
