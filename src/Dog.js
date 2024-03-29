import React from "react";

export const Dog = ({ name, details }) => {
    let dogArr = details.dogs
    
    function getIndexByName(array, nameToFind) {
        const index = array.findIndex(obj => obj.name === nameToFind)
        return index !== -1? index: -1
    }
    const dogIndex = getIndexByName(dogArr, name)
    
    
    return (
        <div>
            <h1>{name}</h1>
            <img src={dogArr[dogIndex].src} height="400" width="500"/>
            {dogArr[dogIndex].facts.map((fact, index) => {return <p key={index}>{fact}</p>})}
        </div>
    )
}