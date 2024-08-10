import React, { memo } from 'react'
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../store/userState';

const UserIconWithName = memo((props) => {
    console.log('UserIconWithName');
    const { image, name } = props;
    const userInfo = useRecoilValue(userState);
    // ?. はoptional chaining演算子、参照した要素がnullishの場合にundefinedを返却する
    // ?? はヌル合体演算子、左辺の値がnullishの場合は右辺の値を、それ以外の場合は左辺の値を返却する
    const isAdmin = userInfo?.isAdmin ?? false;

    return (
        <SContainer>
            <SImg
                height={160}
                width={160}
                src={image}
                alt={name}
            />
            <SName>{name}</SName>
            {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    )
});

const SContainer = styled.div`
    text-align: center;
`

const SImg = styled.img`
    border-radius: 50%;
`

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`

const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`

export default UserIconWithName
