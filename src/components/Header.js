export const Header = () => {
    return (
        <header>
            <div className="headerContent">
                <div className="logo">DRV</div>
                <div className="sponsor">Driving Experience</div>
                <div className="accountContent">
                    <div className="accountContent__name">username</div>
                    <div className="accountContent__score">100 points</div>
                    <div className="accountContent__spacer">|</div>
                    <div className="accountContent__logout">logout</div>
                </div>
            </div>
        </header>
    )
}