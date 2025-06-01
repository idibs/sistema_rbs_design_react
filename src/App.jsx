import Navbar from './components/Navbar.jsx';
import AppRoutes from './routes/index.jsx';

function App() {
  return (
    <>
      <Navbar />
      <div className="ps-24">
        <AppRoutes />  
      </div>   
    </>
  );
}

export default App;