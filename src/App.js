
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const toggleMode = () => {

    if (mode === 'dark') {

      setMode('light')

      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("lightmode is enabled", "success");
    }
    else {

      setMode('dark')
      document.body.style.backgroundColor = '#111560';

      document.body.style.color = 'white';

      showAlert("darkmode is enabled", "success");
      document.title = 'TextUtils- Dark Mode'
    }

  }
  const yellowMode = () => {
    setMode('yellow')
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = 'black';
    showAlert("yellow Mode is enabled", "success");

  }

  const blueMode = () => {
    setMode('blue')
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
    showAlert("blue Mode is enabled", "success");

  }
  const greyMode = () => {
    setMode('grey')
    document.body.style.backgroundColor = 'grey';
    document.body.style.color = 'white';
    showAlert("grey Mode is enabled", "success");

  }
  const redMode = () => {
    setMode('red')
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
    showAlert("red Mode is enabled", "success");

  }
  const greenMode = () => {
    setMode('green')
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
    showAlert("green Mode is enabled", "success");

  }
  const skyMode = () => {
    setMode(' #0dcaf0')
    document.body.style.backgroundColor = ' #0dcaf0';
    document.body.style.color = 'black';
    showAlert("sky Mode is enabled", "success");

  }
  const lightMode = () => {
    setMode('light')
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("light Mode is enabled", "success");

  }
  const darkMode = () => {
    setMode('dark')
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    showAlert("dark Mode is enabled", "success");

  }
  return (
    <>
    
    
   
      
        {/* <Router> */}
        <Navbar title="TextUtill" aboutText="About" mode={mode} toggleMode={toggleMode} yellowMode={yellowMode} blueMode={blueMode} greyMode={greyMode} greenMode={greenMode} redMode={redMode} skyMode={skyMode} lightMode={lightMode} darkMode={darkMode} />
        {<TextForm showAlert={showAlert} />}

<div className="container" >
<Alert alert={alert} />
          {/* <Routes> */}

            

            {/* <Route exact path="/About" element={<About />} /> */}



            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} />} /> */}





          
        {/* </Routes> */}
        </div>
     
       {/* </Router> */}
     
    </>
  );


}


export default App;
