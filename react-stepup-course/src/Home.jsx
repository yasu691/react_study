import { useCallback, useState, useMemo } from "react"
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComnponents";
import { Emotion } from "./components/Emotion";

export const Home = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);

    const onChangeText = (e) => setText(e.target.value);
    const onClickOpen = () => setOpen(!open);
    const onClickClose = useCallback(() => (setOpen(false)), [])

    const x = useMemo(() => 1 + 3, []);
    console.log(x);

    const onClickCountUp = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Homeのページです</h1>
            <p>{count}</p>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <br />
            <input value={text} onChange={onChangeText} />
            <br />
            <button onClick={onClickOpen}>表示</button>
            <ChildArea open={open} onClickClose={onClickClose} />

            <InlineStyle />
            <CssModules />
            <StyledJsx />
            <StyledComponents />
            <Emotion />
        </div>
    );
};