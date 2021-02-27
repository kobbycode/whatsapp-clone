
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM naming convention 
    <div className="App">
      <div className="app-body">
        <Sidebar />
        {/* chat */}
      </div>
    </div>
  );
}

export default App;
