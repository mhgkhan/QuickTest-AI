import { FaBook } from "react-icons/fa"
import { Link } from "react-router"
const Home = () => {

    




    return (
        <>
            <section className='hero md:h-[50vh] h-auto flex items-center justify-center flex-col'>
                <div className="container mx-auto flex items-center justify-around gap-5 md:pt-20 md:flex-row flex-col-reverse">

                    <div className="left-side md:w-[50%] w-full">

                        <h1 className='md:text-4xl text-xl font-bold text-center my-1'>Welcome to QuickTest AI</h1>
                        <p className='md:text-lg text-sm text-center my-1 '>
                            Free Feel to explore our wide range of tests and assessments, designed to help you learn, grow, and succeed. Whether you're looking to challenge yourself with a new quiz or seeking to enhance your knowledge in a specific area, QuickTest AI has something for everyone. Dive in and start your learning journey today!
                        </p>

                        <div className="buttons flex items-center md:justify-start justify-center gap-5 mt-5">
                            <button className="bg-emerald-800 text-white py-2 px-4 rounded-lg hover:bg-emerald-900 cursor-pointer">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="right-side md:w-[50%] w-full">

                        <div className="links flex items-center justify-center flex-wrap md:gap-5 gap-2  mt-5 p-2">

                            <Link to={"/tests/genralknowledge"} className="md:w-50 w-auto h-auto p-2 rounded-lg bg-emerald-800 shadow-emerald-800 flex items-center justify-center gap-5 flex-col">
                                <span className="md:text-5xl text-3xl text-yellow-400"><FaBook /> </span>
                                <p className="md:text-xl text-sm text-white">General Knowledge </p>
                            </Link>


                            <Link to={"/tests/genralknowledge"} className="md:w-50 w-auto h-auto p-2 rounded-lg bg-emerald-800 shadow-emerald-800 flex items-center justify-center gap-5 flex-col">
                                <span className="md:text-5xl text-3xl text-yellow-400"><FaBook /> </span>
                                <p className="md:text-xl text-sm text-white">General Knowledge </p>
                            </Link>


                            <Link to={"/tests/genralknowledge"} className="md:w-50 w-auto h-auto p-2 rounded-lg bg-emerald-800 shadow-emerald-800 flex items-center justify-center gap-5 flex-col">
                                <span className="md:text-5xl text-3xl text-yellow-400"><FaBook /> </span>
                                <p className="md:text-xl text-sm text-white">General Knowledge </p>
                            </Link>


                            <Link to={"/tests/genralknowledge"} className="md:w-50 w-auto h-auto p-2 rounded-lg bg-emerald-800 shadow-emerald-800 flex items-center justify-center gap-5 flex-col">
                                <span className="md:text-5xl text-3xl text-yellow-400"><FaBook /> </span>
                                <p className="md:text-xl text-sm text-white">General Knowledge </p>
                            </Link>



                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
