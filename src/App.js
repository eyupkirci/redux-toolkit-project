import {useSelector} from 'react-redux'
import './App.css';
import Counter from './components/Counter'
import Header from './components/website/Header'
import Footer from './components/website/Footer'

function App() {

  const {dark} = useSelector(state => state.website)
  return (
    <div className= {dark ? 'dark':'light'}>
      <Header/>
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
