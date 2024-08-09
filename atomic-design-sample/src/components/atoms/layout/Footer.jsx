import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <SFooter>
            &copy; 2024 test Inc.
        </SFooter>
    )
}

const SFooter = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px;
    position: fixed;
    bottom: 0;
    width: 100%;
`

export default Footer
