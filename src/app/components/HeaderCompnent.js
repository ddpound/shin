import Link from "next/link";

function HeaderComponent(){
    return (
        <header>
            <div className="header-logo-div">
                <img className="main-logo-img" src="/logo/hair.png" />
            </div>
            <div className="menu-list">
                <ol>
                    <li>Product Store</li>
                    <li>Our Story</li>
                    <Link href={"/style-view"}><li>Style View</li></Link>
                    <li>Instar</li>
                </ol>
            </div>
        </header>
    )
}

export default HeaderComponent;