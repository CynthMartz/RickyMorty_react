import React from 'react'

const Characters = ({ characters = [] }) => {
    return (
        <div>
            {characters.map((item, index) => (
                <div key={index}>
                <div className='card-image'>
                    <img src={item.image} alt=""/>
                    <div>
                        <h5 className='card-title'>{item.name}</h5>
                        <hr/>
                        <p>Species: {item.species}</p>
                        <p>Location: {item.location.name}</p>
                    </div>
                </div>
                </div>      
            ))}

        </div>
    );
};

export default Characters