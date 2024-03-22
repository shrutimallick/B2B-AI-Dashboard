import Footer from './components/footer';
import  { MyGrid } from './components/MyGrid';
import NavBar from './components/NavBar';


function App() {
  return (
      <div className="App" style={{backgroundColor:"rgba(45, 66,80,255)"}}>
       <NavBar/>
       <MyGrid/>
       <Footer/>
      </div>
      //<div className="App"><EnhancedTable/></div>
    
  );
}

export default App;
