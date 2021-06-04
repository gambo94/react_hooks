import React, { useRef, useLayoutEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`) 

    const { quote } = !!data && data[0];

    const pTag = useRef()

    useLayoutEffect(() => {

        console.log(pTag.current.getBoundingClientRect());

    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className='blockquote text-end'>  
                <p 
                    className="mb-0"
                    ref = {pTag}
                    > 
                    {quote} 
                    </p>
                <br/>
            </blockquote>
                
        
        <button 
        className="btn btn-primary"
        onClick={increment}>
            Next Quote!
        </button>

        </div>
    )
}
