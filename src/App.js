import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import DataArea from "./components/DataArea"


function App() {
  return (
    <div className="App">
      <Header></Header>;
      <DataArea></DataArea>;
      <Footer></Footer>
    </div>
  );
}

export default App;
