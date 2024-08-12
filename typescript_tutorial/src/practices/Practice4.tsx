import React from 'react'

const Practice4 = () => {
    const calcTotalFee = (num: number) => {
        const total = num*1.1;
        console.log(total);
    }
    const onClickPractice1 = () => {
        calcTotalFee(1000.001);
    }
  return (
    <div>
      <p>練習問題: 設定ファイルを触ってみる</p>
      <button onClick={onClickPractice1}>練習問題4を実行</button>
    </div>
  )
}

export default Practice4
