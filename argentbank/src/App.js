
import Navbar from "./components/nav.js";
import Footer from "./components/footer.js";
import MainApp  from "./main/mainPageApp.js";
import "./App.css";


function App() {
  const isLoggedIn = false;

  return (
    <div>
    
      <Navbar isLoggedIn={isLoggedIn} />
     <MainApp/>
      <Footer/>
    </div>
  );
}

export default App;
