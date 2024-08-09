import React from 'react'
import styled from 'styled-components'
import HeaderOnly from '../templates/HeaderOnly'
import SearchInput from '../molecules/SearchInput'
import UserCard from '../organism/user/UserCard'

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `あーさー${val}`,
        image: "img/FP5Udf-aUAQZLgi.jpg",
        email: "aaaa@gmail.com",
        phone: "000-0000-0000",
        company: {
            name: "XX株式会社"
        },
        website: "https://google.com"
    }
})

const Users = () => {
    return (
        <HeaderOnly>
            <SContainer>
                <h2>ユーザー一覧</h2>
                <SearchInput />
                <SUserArea>
                    {users.map((user) => (
                        <UserCard key={users.id} user={user} />
                    ))}
                </SUserArea>
            </SContainer>
        </HeaderOnly>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`

export default Users
