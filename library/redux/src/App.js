import './App.css';
import { observableTodoStore } from './app/ObservableTodoStore';
// import MobxExmaple from './components/MobxExmaple';
import TodoList from './components/TodoList';
// import Counter2 from './components/Counter2';
// import Counter from './features/counter/Counter';
function App() {
    return (
        <div className="App">
            {/* <Counter /> */}
            {/* <br />
            <br />
            <br />
            <br />
            <Counter2 /> */}

            {/* <MobxExmaple /> */}
            <TodoList store={observableTodoStore} />
        </div>
    );
}

export default App;
