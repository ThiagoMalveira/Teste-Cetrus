import { Header } from './components/Header';
import { Middle } from './components/CursoHas';
import { News } from './components/News'
import { Subscribe } from './components/Subscribe'
 
import './styles/global.scss'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Middle></Middle>
      <News></News>
      <Subscribe></Subscribe>
    </div>
  );
}

export default App;
