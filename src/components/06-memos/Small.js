import React, { memo } from 'react'

export const Small = memo(( {value} ) => {

    console.log(' Showing again :( ');

    return (
        <small>
            {value}
        </small>
    )
})
