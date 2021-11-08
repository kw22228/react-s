import React from 'react'

const UserGreeting = (props) => {
    //props.count = 0  따라서 falsy한 값. Boolean으로 감싸서 명시적으로 나타내준다.
    return (
        <>
            <h1>{props.name && `${props.name}, `}Welcome.</h1>
            <h2>{Boolean(props.count) && `It's ${props.count} times.`}</h2>
        </>
    );
}
const GuestGreeting = (props) => {
    return <h1>Please sign up.</h1>;
}

const Greeting = (props) => {
    // if(props.isLoggedIn){
    //     return <UserGreeting name="jaewon" count={0} />
    // }
    // return <GuestGreeting />

    return (
        props.isLoggedIn ?
        <UserGreeting name="jaewon" count={0}/> : 
        <GuestGreeting/>
    );
}

export default function Condition() {
    const isLoggedIn = true;
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
        </div>
    )
}
