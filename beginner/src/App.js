import './App.css';
import ControlledComponent from './components/2-10Form/ControlledComponent';
import UncontrolledComponent from './components/2-10Form/UncontrolledComponent';
// import Composition from './components/2-4Props/Composition';
// import Extraction from './components/2-4Props/Extraction/Extraction';
// import ClassComponents from './components/2-5State/ClassComponent';
// import { FunctionalComponent } from './components/2-5State/FunctionalComponent'
// import ClassComponent from './components/2-6LifeCycle/ClassComponent';
// import Event from './components/2-7Event/Event';
// import Condition from './components/2-8ConditionalRendering/Condition';
// import List from './components/2-9List/List';

function App() {
  return (
    <div className="App">
      <UncontrolledComponent />
      <ControlledComponent />
      {/* <List /> */}
      {/* <Condition /> */}
      {/* <Event /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent />
      <ClassComponents />
      <Extraction />
      <Composition /> */}
    </div>
  );
}

export default App;
