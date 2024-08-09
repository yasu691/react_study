import React from 'react'
import styled from 'styled-components'
import DefaultLayout from '../templates/DefaultLayout'

const Top = () => {
    return (
        <DefaultLayout>
            <SContainer>
                <h2>TOPページです</h2>
            </SContainer>
        </DefaultLayout>
    )
}

const SContainer = styled.div`
    text-align: center;
`

export default Top
