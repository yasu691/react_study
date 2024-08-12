import React from 'react'

const Practice1 = () => {

    const calcTotalFee = (num: number) => {
        const total = num*1.1;
        console.log(total);
    }
    const onClickPractice1 = () => {
        calcTotalFee(1000.001);
    }
  return (
    <div>
      <p>練習問題: 引数の型指定</p>
      <button onClick={onClickPractice1}>練習問題1を実行</button>
    </div>
  )
}

export default Practice1
