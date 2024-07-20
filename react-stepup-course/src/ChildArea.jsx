import { memo } from "react";

const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
};

// memoを使うと親コンポーネントが再レンダリングされても、子コンポーネントは再レンダリングされない
// 親コンポーネントから受け取るpropsに変更があった場合のみ再レンダリングされる
export const ChildArea = memo((props) => {
    const { open, onClickClose } = props;
    console.log("ChildAreaがレンダリング");

    const data = [...Array(2000).keys()];
    data.forEach(() => {
        console.log("...")
    });

    return (
        <>
            {open ? (
                <div style={style}>
                    <p>子コンポーネント表示</p>
                    <button onClick={onClickClose}>閉じる</button>
                </div>
            ) : null}
        </>
    );
});