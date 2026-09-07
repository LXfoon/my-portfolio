import "./btn.css";

function Btn({ icon, text }: MainBtn) {
    return (
        <div className="mainBtn">
            <div className="mainOuter"></div>
            <div className="mainInner"></div>
            <div className="mainContent">
                <i className="mainIcon">{icon && icon}</i>
                <p>{text && text}</p>
            </div>
        </div>
    )
}

export default Btn;