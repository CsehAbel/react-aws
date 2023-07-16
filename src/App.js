import logo from './logo.svg';
//import './App.css';
import InputComponent from './components/InputComponent';
import TranslatedComponent from './components/TranslatedComponent';
import OriginalComponent from './components/OriginalComponent';

function App() {

  const GER2ENG = { GER : "Leute schreiben seit Jahren über das Thema Führerschein.",
   ENG : "People have been writing about the topic of driver's license for years." }
  const GER2ENG_ENG = "People have been writing about the topic of driver's license for years."
  const GER2ENG_GER = "Leute schreiben seit Jahren über das Thema Führerschein."
  const containerId = "guessing1";
  const arrayItems = 
  [ {id: "1-0", type: "noun", text: "Leute"},
   {id: "1-1", type: "verb", text: "mögen"},
    {id: "1-2", type: "noun", text: "Thema"},
     {id: "1-3", type: "noun", text: "Führerschein"},
      {id: "1-4", type: "noun", text: "Jahren"},
       {id: "1-5", type: "verb", text: "schreiben"},
        {id: "1-6", type: "noun", text: "Leute"} ];


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <OriginalComponent />
      <TranslatedComponent />
      <InputComponent containerId={containerId} arrayItems={arrayItems} />
      {/* div#guessing1 */}
      <div id="guessing1">
      </div>
    </div>
  );
}

export default App;
