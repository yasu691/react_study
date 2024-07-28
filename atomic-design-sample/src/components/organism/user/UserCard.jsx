import React from 'react'
import styled from 'styled-components'

const UserCard = (props) => {
    const { user } = props;
    return (
        <div>
            <img
                height={160}
                width={160}
                src='/img/FP5Udf-aUAQZLgi.jpg'
                alt='プロフィール画像'
            />
            <p>名前</p>
            <SDl>
                <dt>メール</dt>
                <dd>aaaa@bbb.com</dd>
                <dt>TEL</dt>
                <dd>000-0000-0000</dd>
                <dt>会社名</dt>
                <dd>株式会社A</dd>
                <dt>web</dt>
                <dd>AAA.com</dd>
            </SDl>
        </div>
    )
}

export default UserCard

const SDl = styled.dl`
    text-align: left;
    margin-bottom: 0px;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
    }
`