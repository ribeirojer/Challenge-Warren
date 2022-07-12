import { Outlet } from 'react-router-dom';
import Filter from './components/Filter';
import Header from "./components/Header";
import HeaderTable from './components/HeaderTable';

function App() {
  return (
    <>
      <Header />
      <Filter />
      <HeaderTable/>
      <Outlet />
    </>
  )
}

export default App;
