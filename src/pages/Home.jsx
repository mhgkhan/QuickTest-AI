import { FaBook } from "react-icons/fa"
import { Link } from "react-router"
const Home = () => {
    return (
        <>
            <section className='hero h-[50vh] flex items-center justify-center flex-col'>
                <div className="container mx-auto">
                    <h1 className='text-4xl font-bold text-center'>Welcome to QuickTest AI</h1>
                    <p className='text-lg text-center'>Your AI-powered testing solution</p>

                    <div className="links flex items-center justify-center flex-wrap gap-15  mt-5 p-2">
                        <Link to={"/tests/genralknowledge"} className="w-50 h-auto p-2 rounded-lg bg-emerald-800 shadow-emerald-800 flex items-center justify-center gap-5 flex-col">
                            <span className="text-5xl text-yellow-400"><FaBook /> </span>
                            <p className="text-xl text-white">General Knowledge </p>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
