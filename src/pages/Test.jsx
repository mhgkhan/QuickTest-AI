import { useMatch } from "react-router"
import mcqs from "../data/mcqs.json";
import { useState } from "react";


const Test = () => {
  const match = useMatch("/tests/:testName");

  const { testName } = match.params;
  const allMCQS = JSON.parse(JSON.stringify(mcqs));


  const [start, setStart] = useState(false);
  const [mcqsLength, setMcqsLength] = useState(allMCQS.length);


  const [solvedMCQS, setSolvedMCQS] = useState([]);
  const [currentMcqsNumber, setCurectMcqsNumber] = useState(0);


  const nextMCQS = () => {
    setSolvedMCQS([...solvedMCQS, allMCQS[currentMcqsNumber]]);
    setCurectMcqsNumber(currentMcqsNumber + 1);
  }

  const submitTest = () => {

  }

  return (
    <main>

      {!start ?
        <section>
          <div className="container mx-auto relative">
            <div className="md:w-[70%] w-full mx-auto p-5">
              <div className="content w-full h-full">
                <h1 className="text-3xl text-center my-3  font-bold ">TEST FOR {testName}</h1>
                <p className="text-center my-1">Please make sure to choose the mcqs length and time. Note: The default test time is 30 minutes. </p>

                <div className="flex items-center justify-center md:gap-10 gap-5 md:flex-row flex-col">
                  <select name="length" id="mcqslength" className=" md:my-5 my-1 p-1 border borde-2 border-blue-500 hover:shadow-md hover:shadow-blue-500 rounded-md w-[50%]">
                    <option selected disabled  >Select MCQS Length </option>
                    <option>30</option>
                    <option>50</option>
                    <option>80</option>
                    <option>100</option>
                  </select>


                  <select name="typemcqs" id="typemcqs" className=" md:my-5 my-1 p-1 border borde-2 border-blue-500 hover:shadow-md hover:shadow-blue-500 rounded-md w-[50%]">
                    <option selected disabled >MCQS Level  </option>
                    <option>Basic </option>
                    <option>Intermediate </option>
                    <option>Advance </option>
                  </select>


                </div>
                <button onClick={() => setStart(true)} className="bg-emerald-800 text-white py-2 px-4 rounded-lg hover:bg-emerald-900 cursor-pointer text-center mx-auto block md:my-auto my-5">
                  Start
                </button>
              </div>
            </div>



          </div>
        </section> : <section className="test mt-5 ">
          <div className="container mx-auto">
            <div className="md:w-[70%] w-full mx-auto p-5 rounded-md shadow-md shadow-gray-400" >


              <div className="question-block w-full flex items-center justify-start">
                <span className="md:text-3xl text-2xl text-gray-500 px-2">Q-{currentMcqsNumber + 1}</span>
                <p className="question px-1 text-lg font-bold"> {allMCQS[currentMcqsNumber]?.question} </p>
              </div>

              {
                allMCQS[currentMcqsNumber]?.choices.map((option, ind) => {
                  return <div key={ind} className="options w-full flex flex-col gap-3 my-5">
                    <label className="option flex items-center justify-start gap-5 w-[90%] mx-auto bg-emerald-100 rounded-md p-2 cursor-pointer hover:bg-emerald-200 transition-all duration-200">
                      <input type="radio" name="q1" value="{option}" className="w-[20px] h-[20px] " />  {option}
                    </label>
                  </div>

                })
              }

              
              {
                solvedMCQS.length == mcqs.length-1 ? <button onClick={submitTest} className="next p-2 text-lg rounded-lg bg-blue-700 my-2 text-white font-bold w-[50%] mx-auto block cursor-pointer hover:bg-emerald-800">Submit Test</button>

                  : <button onClick={nextMCQS} disabled={currentMcqsNumber == mcqs.length - 1} className="next p-2 text-lg rounded-lg bg-emerald-900 text-white font-bold w-[50%] mx-auto block cursor-pointer hover:bg-emerald-800">Next</button>
              }
            </div>
          </div>
        </section>
      }



    </main>
  )
}

export default Test
