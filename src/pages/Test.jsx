import { useMatch } from "react-router"


const Test = () => {
  const match = useMatch("/tests/:testName");

  const { testName } = match.params;


  return (
    <main>
      <section>

        <div className="container mx-auto relative">
          <div className="md:w-[70%] w-full mx-auto p-5">
            <div className="content w-full h-full">
              <h1 className="text-3xl text-center my-3  font-bold ">TEST FOR {testName}</h1>
              <p className="text-center my-1">Please make sure to choose the mcqs length and time. Note: The default test time is 30 minutes. </p>

              <div className="flex items-center justify-center gap-10">
                <select name="length" id="mcqslength" className="my-5 p-1 border borde-2 border-blue-500 hover:shadow-md hover:shadow-blue-500 rounded-md w-[50%]">
                  <option selected disabled  >Select MCQS Length </option>
                  <option>30</option>
                  <option>50</option>
                  <option>80</option>
                  <option>100</option>
                </select>


                <select name="typemcqs" id="typemcqs" className="my-5 p-1 border borde-2 border-blue-500 hover:shadow-md hover:shadow-blue-500 rounded-md w-[50%]">
                  <option selected disabled >MCQS Level  </option>
                  <option>Basic </option>
                  <option>Intermediate </option>
                  <option>Advance </option>
                </select>


              </div>
              <button className="bg-emerald-800 text-white py-2 px-4 rounded-lg hover:bg-emerald-900 cursor-pointer text-center mx-auto block">
                Start
              </button>
            </div>
          </div>



        </div>
      </section>


      <section className="test mt-5 ">
        <div className="container mx-auto">
          <div className="md:w-[70%] w-full mx-auto p-5 rounded-md shadow-md shadow-gray-400" >
            <div className="question-block w-full flex items-center justify-start">
              <span className="text-3xl text-gray-500 px-2">Q-1</span>
              <p className="question px-1 text-lg font-bold"> What is the capital of France? </p>
            </div>


            <div className="options w-full flex flex-col gap-3 my-5">
              <label className="option flex items-center justify-start gap-5 w-[90%] mx-auto bg-emerald-100 rounded-md p-2 cursor-pointer hover:bg-emerald-200 transition-all duration-200">
                <input type="radio" name="q1" value="berlin" className="w-[20px] h-[20px] " />  Berlin
              </label>
            </div>



            <div className="options w-full flex flex-col gap-3 my-5">
              <label className="option flex items-center justify-start gap-5 w-[90%] mx-auto bg-emerald-100 rounded-md p-2 cursor-pointer hover:bg-emerald-200 transition-all duration-200">
                <input type="radio" name="q1" value="berlin" className="w-[20px] h-[20px] " />  Berlin
              </label>
            </div>


            <div className="options w-full flex flex-col gap-3 my-5">
              <label className="option flex items-center justify-start gap-5 w-[90%] mx-auto bg-emerald-100 rounded-md p-2 cursor-pointer hover:bg-emerald-200 transition-all duration-200">
                <input type="radio" name="q1" value="berlin" className="w-[20px] h-[20px] " />  Berlin
              </label>
            </div>


            <div className="options w-full flex flex-col gap-3 my-5">
              <label className="option flex items-center justify-start gap-5 w-[90%] mx-auto bg-emerald-100 rounded-md p-2 cursor-pointer hover:bg-emerald-200 transition-all duration-200">
                <input type="radio" name="q1" value="berlin" className="w-[20px] h-[20px] " />  Berlin
              </label>
            </div>



            <button className="next p-2 text-lg rounded-lg bg-emerald-900 text-white font-bold w-[50%] mx-auto block cursor-pointer hover:bg-emerald-800">Next</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Test
