import {
    useFadeIn,
    useNetwork,
    useScroll,
    useFullscreen,
    useNotification,
    useTitle,
} from './hooks/customHooks';
import useAxios from './hooks/useAxios';
// const content = [
//     {
//         tab: 'Section 1',
//         content: "I'm the content of the Section 1",
//     },
//     {
//         tab: 'Section 2',
//         content: "I'm the content of the Section 2",
//     },
//     {
//         tab: 'Section 3',
//     },
// ];

function App() {
    //useTitle
    const titleUpdater = useTitle('Loading...');
    setTimeout(() => {
        titleUpdater('Update title!!');
    }, 3000);

    //useFadeIn
    const elemRef = useFadeIn(5, 5);
    const elemRef2 = useFadeIn(10);

    // useNetwork
    const handleNetworkChange = online => console.log(online ? 'Online!!' : 'Offline');
    const status = useNetwork(handleNetworkChange);

    //useScroll
    const { y } = useScroll();

    //useFullscreen
    const onFullscreen = isFull => {
        console.log(isFull ? 'We are full' : 'Exit full');
    };
    const { element, triggerFullscreen, exitFullscreen } = useFullscreen(onFullscreen);

    //useNotification
    const triggerNotif = useNotification('Hello', {
        body: 'hello there',
    });

    //useAxios
    const options = {
        url: 'https://yts.mx/api/v2/list_movies.json',
    };
    const { loading, error, data, refetch } = useAxios(options);
    return (
        <div style={{ height: '1000vh' }}>
            <h1 {...elemRef}>Use Fade In Out !!</h1>
            <p {...elemRef2}>Fade In Out 2 !!</p>

            <hr />

            <h2>{status ? 'Online' : 'Offline'}</h2>

            <hr />
            <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>useScroll</h1>

            <hr />
            <div ref={element}>
                <img src="https://i.ibb.co/R6RwNxx/grape.jpg" />
                <button onClick={exitFullscreen}>useExitFullscreen</button>
            </div>
            <br />
            <button onClick={triggerFullscreen}>useFullscreen</button>

            <hr />
            <button onClick={triggerNotif}>useNotification</button>

            <hr />
            <h1>{loading ? 'Loading...' : 'Done.'}</h1>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}

export default App;
