import React from 'react'

const Pagination = ({ prev, next, onPrevios, onNext }) => {

    const handlePrevious = () => {
        onPrevios();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul>
                {prev ? (
                    <li>
                        <button onClick={handlePrevious}>Previous</button>
                    </li>
                ) : null}
                {next ?
                    <li>
                    <button onClick={handleNext}>Next</button>
                </li>: null}
                
            </ul>
        </nav>
    )
}


export default Pagination