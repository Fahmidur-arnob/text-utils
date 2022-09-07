import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="stringPlayer" aboutText="About textUtils" />
      <div className="container">
        <TextForm heading="Enter The Text to Analyze"/>
      </div>
    </>
  );
}


export default App;
