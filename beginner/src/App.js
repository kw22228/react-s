import './App.css';
import Composition from './components/2-4Props/Composition';
import Extraction from './components/2-4Props/Extraction/Extraction';
import ClassComponents from './components/2-5State/ClassComponent';
import { FunctionalComponent } from './components/2-5State/FunctionalComponent'
import ClassComponent from './components/2-6LifeCycle/ClassComponent';
import Event from './components/2-7Event/Event';
function App() {
  return (
    <div className="App">
      <Event />
      
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent />
      <ClassComponents />
      <Extraction />
      <Composition /> */}
    </div>
  );
}

export default App;
