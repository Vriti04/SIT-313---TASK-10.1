import './App.css';
import Header from './Components/header';
import Articles from './Components/FeaturedArticles';
import Tutorials from './Components/Tutorials';
import Footer from './Components/Footer';
import Button from './Components/button';
import Email from './Components/email';


const style = {
  textAlign: "center"
}
function App() {
  return (
    <>
      <Header/>
      <h1  style = {style}>Featured Articles</h1>
      <Articles/>
      <Button/>
      <h1 style = {style} >Featured Tutorials</h1>
      <Tutorials/>
      <Button/>
      <Email/>
      <Footer/>
    </>
  );
}

export default App;
