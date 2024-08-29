import { useState } from 'react';
export default function MeaningFinder(){
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const getText = (event) => {
        setName(event.target.value);
    }

    const getAge = async () => {

        const res = await fetch(`https://api.agify.io/?name=${name}`);
        const resjson = await res.json();
        const resage = resjson.age;
        setAge(resage);
    }

    return(
        <div>
            <center>
            <h1> MeaningFinder </h1>
            <input type='text' id='t1' onChange={getText}/>
            <button onClick={getAge}>Submit</button>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            </center>
        </div>
    )
}