import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Cards from './components/Cards'
import AddMessage from './components/AddMessage'
import Info from './components/Info'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar name={'Businnes'}/>
      <Banner message={'Learn More'}/>
      <Info />
      <AddMessage />
      <Cards />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
