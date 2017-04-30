import React from 'react'; 

 const fuzzyFind = (text, query) => {
    const search = query.replace(/\ /g, '').toLowerCase();
    const characters = [];
    let currentPosition = 0;
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (currentPosition < search.length && char.toLowerCase() == search[currentPosition]) {
            char = <span key={char, i} style={{color: 'red'}}> {char} </span>;
            currentPosition += 1;
        }
        characters.push(char);
    }
    if (currentPosition != search.length) {
        return '';
    }

    return characters.join('');
}

export default fuzzyFind;