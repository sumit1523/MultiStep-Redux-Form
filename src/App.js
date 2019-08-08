import React from 'react';
import './App.css';
import showResults from "./showResults";
import WizardForm from "./WizardForm";
import TimeIndicator from './TimeIndicator';

function App() {
  return (
    <div className="App">
      <TimeIndicator/>
      <h2>Registration Form</h2>
      <WizardForm onSubmit={showResults} />
    </div>
  );
}

export default App;
