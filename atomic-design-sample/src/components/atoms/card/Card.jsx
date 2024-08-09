import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { children } = props;

    return (
        <SCard>
            {children}
        </SCard>
    )
}

const SCard = styled.div`
    background-color: #FFF;
    box-shadow: #ddd 0px 0px 4px 2px;
    border-radius: 8px;
    padding: 16px;
`

export default Card
