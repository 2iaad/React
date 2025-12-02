import Logo from "./images/chef-claude-icon.png"

export default function Header() {
    return (
        <header className="app-header">
            <div className="header-content">
                <img className="logo" src={Logo} alt="Chef Claude Logo" />
                <div className="title-block">
                    <h1>Chef Claude</h1>
                    <p className="subtitle">Your AI-powered recipe creator</p>
                </div>
            </div>
        </header>
    )
}
