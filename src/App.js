import React from 'react';
import './App.css';
import showResults from "./showResults";
import WizardForm from "./WizardForm";

function App() {
  return (
    <div className="App">
      <h2>Registration Form</h2>
      <WizardForm onSubmit={showResults} />
    </div>
  );
}

export default App;
