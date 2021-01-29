import React from 'react'

import Wrapper from './style'

function Wrap({children}) {
    return (
        <>
            <Wrapper>
                {children}
            </Wrapper>
        </>
    )
}

export default Wrap
