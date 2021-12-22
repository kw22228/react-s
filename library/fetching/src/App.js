import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import Pagination from './components/ReactQuery/Pagination';
// import Example from './components/ReactQuery/Example';
// import QuickStart from './components/ReactQuery/QuickStart';
// import Pagenation from './components/SWRExample/Pagenation';
// import Mutate from './components/SWRExample/Mutate';
// import Cache from './components/SWRExample/Cache';
// import Fetcher from './components/SWRExample/Fetcher';
// import Profile from './components/SWRExample/Profile';

const queryClient = new QueryClient();
function App() {
    return (
        <div className="App">
            {/* <Profile />
            <Cache /> */}
            {/* <Fetcher /> */}
            {/* <Mutate /> */}
            {/* <Pagenation /> */}
            <QueryClientProvider client={queryClient}>
                {/* <Example /> */}
                {/* <QuickStart /> */}
                <Pagination />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </div>
    );
}

export default App;
