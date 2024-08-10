import React, { useContext } from 'react'
import styled from 'styled-components'
import HeaderOnly from '../templates/HeaderOnly'
import SearchInput from '../molecules/SearchInput'
import UserCard from '../organism/user/UserCard'
import SecondaryButton from '../atoms/button/SecondaryButton'
import { UserContext } from '../../providers/UserProvider'
import { useRecoilState } from 'recoil'
import { userState } from '../../store/userState'

// 長さ10の配列を作って、インデックスを取り出してそれをイテラブルとして、map関数を渡す
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
    // const { userInfo, setUserInfo } = useContext(UserContext);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const onClickSwitch = () => {
        setUserInfo({ isAdmin: !userInfo?.isAdmin ?? false });
    };
    return (
        <HeaderOnly>
            <SContainer>
                <h2>ユーザー一覧</h2>
                <SearchInput />
                <br />
                <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
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
