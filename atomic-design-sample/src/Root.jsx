import React from 'react'
import PrimaryButton from './components/atoms/button/PrimaryButton'
import SecondaryButton from './components/atoms/button/SecondaryButton'
import SearchInput from './components/molecules/SearchInput'
import UserCard from './components/organism/user/UserCard'
import HeaderOnly from './components/templates/HeaderOnly'
import DefaultLayout from './components/templates/DefaultLayout'
import { Outlet } from 'react-router-dom'

const user = {
    name: "あーさー",
    image: "img/FP5Udf-aUAQZLgi.jpg",
    email: "aaaa@gmail.com",
    phone: "000-0000-0000",
    company: {
        name: "XX株式会社"
    },
    website: "https://google.com"
}

export const Root = () => {
    return (
        <DefaultLayout className="App">
            <PrimaryButton>テスト</PrimaryButton>
            <SecondaryButton>検索</SecondaryButton>
            <SearchInput />
            <UserCard user={user} />
        </DefaultLayout>
    )
}

export default Root
