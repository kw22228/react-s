import { useClick } from './hooks/customHooks';
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
    const onClick = (element, title) => {
        element.current.innerHTML = title;
    };
    const titleRef = useClick(onClick, 'Update');

    return (
        <div>
            <h1 ref={titleRef}>Title</h1>
        </div>
    );
}

export default App;
