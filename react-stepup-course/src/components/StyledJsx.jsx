export const StyledJsx = () => {
    return (
        <>
            <div className="container">
                <p className="titleStyle">- Styled Jsx -</p>
                <button className="buttonStyle">FIGHT!!</button>
            </div>
            <style jsx="true">{`
.container {
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.titleStyle {
    margin: 0;
    color: #3d84a8;
}

.buttonStyle {
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
        background-color: #46cdcf;
        color: #fff;
        cursor: pointer;
    }
}
            `}</style>
        </>
    )
}