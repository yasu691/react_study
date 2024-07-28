import React from 'react'
import PrimaryButton from './components/atoms/button/PrimaryButton'
import SecondaryButton from './components/atoms/button/SecondaryButton'
import SearchInput from './components/molecules/SearchInput'
import UserCard from './components/organism/user/UserCard'

export const Root = () => {
    return (
        <div className="App">
            <PrimaryButton>テスト</PrimaryButton>
            <SecondaryButton>検索</SecondaryButton>
            <SearchInput />
            <UserCard />
        </div>
    )
}

export default Root
