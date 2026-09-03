import "./iconBtn.css";

function IconBtn({ children }: BtnIcon) {
    return (
        <div className="btn">
            <div className="outer"></div>
            <div className="inner"></div>
            <div className="icon">
                {children}
            </div>
        </div>
    )
}

export default IconBtn;