import Link from "next/link";

function HeaderComponent(){
    return (
        <header>
            <div className="header-logo-div">
                <Link href="/"><img className="main-logo-img" src="/logo/hair.png"/></Link>
            </div>
            <div className="menu-list">
                <ol>
                    <Link href="/store"><li>Product Store</li></Link>
                    <li>Our Story</li>
                    <Link href="/style-book"><li>Style Book</li></Link>
                    <li>Instar</li>
                </ol>
            </div>
        </header>
    )
}

export default HeaderComponent;