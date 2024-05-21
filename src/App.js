import './App.css';
import Accordian from './Accordian.js';

function App() {
  const sections = [
    {title: 'Section1', content: 'Content of the section1'},
    {title: 'Section2', content: 'Content of the section2'},
    {title: 'Section3', content: 'Content of the section3'},
  ];

  return (
    <div className="App">
      <h1>Accordian Example</h1>
      <Accordian sections={sections} />
    </div>
  );
}

export default App;
