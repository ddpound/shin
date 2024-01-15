import Link from "next/link";

function HeaderComponent(){
    return (
        <header>
            <div className="header-logo-div">
                <Link href="/"><img className="main-logo-img" src="/logo/hair.png"/></Link>
            </div>
            <div className="menu-list">
                <ol>
                    <Link href="/store"><li>예약</li></Link>
                    <li>Our Story</li>
                    <Link href="/style-book"><li>스타일북</li></Link>
                    <li>Instar</li>
                </ol>
            </div>
        </header>
    )
}

export default HeaderComponent;