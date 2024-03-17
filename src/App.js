import Navbar from './Components/Navbar';
import Main1 from './Components/Main1';
import Showcase from './Components/Showcase';
import Services from './Components/Services';
import About from './Components/About';
import Review from './Components/Review';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main1></Main1>
      <Showcase />
      <About/>
      <Services></Services>
      <Review/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
