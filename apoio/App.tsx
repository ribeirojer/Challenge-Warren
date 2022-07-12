import { Outlet } from 'react-router-dom';
import './App.css'
import Filter from './components/Filter';
import Header from "./components/Header";
import HeaderTable from './components/HeaderTable';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <HeaderTable/>
      <Outlet />
    </div>
  )
}

export default App;
