import './App.css';
import Button from './components/HOC/Button';
import Input from './components/HOC/Input';
// import ThankyouDialog from './components/Composition2/ThankyouDialog';
// import State from './components/Hooks/State';
// import Reducer from './components/Hooks/Reducer';
// import WelcomeDialog from './components/Composition/WelcomeDialog';
// import Dialog from './components/Composition2/Dialog';

function App() {
    return (
        <div className="App">
            <Input />
            <br />
            <Button />
            {/* <Reducer />
            <State /> */}
            {/* <WelcomeDialog /> */}
            {/* <ThankyouDialog /> */}
        </div>
    );
}

export default App;
