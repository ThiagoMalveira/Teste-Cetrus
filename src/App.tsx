import { Header } from './components/Header';
import { Middle } from './components/CursoHas';
import { News } from './components/News'
import { Subscribe } from './components/Subscribe'
import { Calendar } from './components/Calendar'
import 'bootstrap/dist/css/bootstrap.min.css';
 
import './styles/global.scss'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Middle></Middle>
      <News></News>
      <Subscribe></Subscribe>
      <Calendar></Calendar>
    </div>
  );
}

export default App;
