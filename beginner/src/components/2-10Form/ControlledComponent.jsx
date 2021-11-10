import React, {useState} from 'react'

export default function ControlledComponent() {
    const [name, setName] = useState("");
    const [essay, setEssay] = useState("Please write an essay");
    const [flavor, setFlavor] = useState("coconut");

    const handleChange = (event) => {
        const target = event.target
        const name = target.name;
        if(target.type === 'text') setName(target.value)
        if(name === 'essay') setEssay(target.value)
        if(name === 'flavor') setFlavor(target.value)
    }

    const handleSubmit = (event) => {
        alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
        event.preventDefault();
    }
    // const handleEssayChange = (event) => {
    //     setEssay(event.target.value);
    // }
    // const handleFlavorChange = (event) => {
    //     setFlavor(event.target.value)
    // }
    return (
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
            Essay:
            <textarea name="essay" value={essay} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
                Pick your favorite flavor:
                <select name="flavor" value={flavor} onChange={handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form> 
    )
}
