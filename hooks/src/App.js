import { useFadeIn, useNetwork } from './hooks/customHooks';
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
    const elemRef = useFadeIn(5, 5);
    const elemRef2 = useFadeIn(10);

    const handleNetworkChange = online => console.log(online ? 'Online!!' : 'Offline');
    const status = useNetwork(handleNetworkChange);
    return (
        <div>
            <h1 {...elemRef}>Use Fade In Out !!</h1>
            <p {...elemRef2}>Fade In Out 2 !!</p>

            <hr />

            <h2>{status ? 'Online' : 'Offline'}</h2>
        </div>
    );
}

export default App;
