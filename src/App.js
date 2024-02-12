import React,{ useState } from 'react';
import './App.css';
import Card from './Card';
import './RamMandir.png';
import Aboutcarddata from './Aboutcarddata';
import IFnoclickcomponent from './IFnoclickcomponent';


function App() {
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [ifnoclick, setifnoclick] = useState(false);

  const handleYesClick = () => {
    setShowNewComponent(true);
    
  };
  let handlenoclick = () => { 
    setShowNewComponent(false)
   };
  const Button=(
    <div>
      <button onClick={handleYesClick}>
      {showNewComponent ? 'Unload Component' : 'Load Component'}</button>
       <button onClick={handlenoclick}>No</button>
    </div>
  )
  return (
    <div className="App">
      <Card  name="jai shree Ram"
      title="ayodhya">{Button}</Card>
      <Card  name="Jai Hanuman"title="ayodhya"date="12/02/2024">{Button}</Card>
      <Card name="Jai Sita maa"title="ayodhya">{Button}</Card>
      {showNewComponent && < Aboutcarddata/>} 
      {ifnoclick && <IFnoclickcomponent />} 
    
    </div>
  );
}

export default App;