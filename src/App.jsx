import  Footer  from "./component/Footer/Footer";
import Header from "./component/Header/Header"; 
import Main from "./component/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/styles.css"
import Iphone from "./component/Iphone/Iphone";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/iphone" element={< Iphone />} />
        <Route path="*" element={<h1>404 <br /> Page not found 😪</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
