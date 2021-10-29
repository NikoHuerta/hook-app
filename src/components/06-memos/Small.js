import React, { memo } from 'react'


//solo si las propiedades cambian value se llama si no, no se llama
export const Small = memo( ({ value }) => {
    
    console.log('Me volvi a llamar :/');
    
    return (
        <small>
            { value }
        </small>
    )
});
