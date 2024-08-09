import React from 'react'
import { styled } from 'styled-components'
import { BaseButton } from './BaseButton'

export const SecondaryButton = (props) => {
    const { children, onClick, ...rest } = props;
    return (
        <SButton onClick={onClick}>
            {children}
        </SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color: #11999e;
`

export default SecondaryButton
