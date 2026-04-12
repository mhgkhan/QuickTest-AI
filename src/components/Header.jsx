import { Link } from "react-router"

const Header = () => {
    return (
        <header className='w-full bg-emerald-800'>
            <div className="container mx-auto flex items-center justify-between gap-2">
                <div className="logo py-3">
                    <Link to={"/"} className="py-2 px-1 text-2xl font-bold my-1 text-white" >QuickTest AI</Link>
                </div>
                <nav className="navbar">
                    <ul className="flex items-center justify-center gap-5">
                        {Array.from([
                            { text: "HOME", link: "/home" },
                            { text: "ALL TESTS", link: "/tests" },
                            { text: "CONTACT US", link: "/contact" }
                        ]).map((ele, ind) => {
                            return <li key={ind}>
                                <Link className="font-bold text-lg text-white px-2 py-1">{ele.text}</Link>
                            </li>
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
