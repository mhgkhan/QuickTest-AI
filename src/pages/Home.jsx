import { FaBook } from "react-icons/fa"
import { Link } from "react-router"
const Home = () => {
    return (
        <>
            <section className='hero h-[50vh] flex items-center justify-center flex-col'>
                <div className="container mx-auto flex items-center justify-around gap-5 pt-20">

                    <div className="left-side w-[50%]">

                        <h1 className='text-4xl font-bold text-center'>Welcome to QuickTest AI</h1>
                        <p className='text-lg text-center my-1'>
                            Free Feel to explore our wide range of tests and assessments, designed to help you learn, grow, and succeed. Whether you're looking to challenge yourself with a new quiz or seeking to enhance your knowledge in a specific area, QuickTest AI has something for everyone. Dive in and start your learning journey today!
                        </p>

                        <div className="buttons flex items-center justify-start gap-5 mt-5">
                            <button className="bg-emerald-800 text-white py-2 px-4 rounded-lg hover:bg-emerald-900 cursor-pointer">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="right-side w-[50%]">

                        <div className="links flex items-center justify-center flex-wrap gap-5  mt-5 p-2">
                           
                            <Link to={"/tests/genralknowledge"} className="w-50 h-auto p-2 rounded-lg bg-emerald-800 shadow-emerald-800 flex items-center justify-center gap-5 flex-col">
                                <span className="text-5xl text-yellow-400"><FaBook /> </span>
                                <p className="text-xl text-white">General Knowledge </p>
                            </Link>

                           
                            <Link to={"/tests/genralknowledge"} className="w-50 h-auto p-2 rounded-lg bg-emerald-800 shadow-emerald-800 flex items-center justify-center gap-5 flex-col">
                                <span className="text-5xl text-yellow-400"><FaBook /> </span>
                                <p className="text-xl text-white">General Knowledge </p>
                            </Link>

                           
                            <Link to={"/tests/genralknowledge"} className="w-50 h-auto p-2 rounded-lg bg-emerald-800 shadow-emerald-800 flex items-center justify-center gap-5 flex-col">
                                <span className="text-5xl text-yellow-400"><FaBook /> </span>
                                <p className="text-xl text-white">General Knowledge </p>
                            </Link>

                           
                            <Link to={"/tests/genralknowledge"} className="w-50 h-auto p-2 rounded-lg bg-emerald-800 shadow-emerald-800 flex items-center justify-center gap-5 flex-col">
                                <span className="text-5xl text-yellow-400"><FaBook /> </span>
                                <p className="text-xl text-white">General Knowledge </p>
                            </Link>



                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
