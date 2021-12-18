import react, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Blog from './Blog';
import SocialMedia from './SocialMedia';

function App() {
  const [selectedButton, setSelectedButton] = useState(1);
  return (
    <div sx={{display: 'flex', flexDirection: 'column'}}>
      <Navbar selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
      {selectedButton === 1 ? <Home></Home> : null}
      {selectedButton === 2 ? <About></About> : null}
      {selectedButton === 3 ? <Blog></Blog> : null}
      {selectedButton === 4 ? <Home></Home> : null}
      <SocialMedia />
      <Footer></Footer>
    </div>
  );
}

export default App;
