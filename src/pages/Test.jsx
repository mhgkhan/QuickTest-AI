import { useMatch } from "react-router"
import mcqs from "../data/mcqs.json";
import { useRef, useState } from "react";


const Test = () => {
  const reference = useRef();
  const match = useMatch("/tests/:testName");

  const { testName } = match.params;
  const allMCQS = JSON.parse(JSON.stringify(mcqs));


  const [start, setStart] = useState(false);
  const [mcqsLength, setMcqsLength] = useState(allMCQS.length);


  const [solvedMCQS, setSolvedMCQS] = useState([]);
  const [currentMcqsNumber, setCurectMcqsNumber] = useState(0);

  const [choosed, setChoosed] = useState("");

  const [showResult, setShwoResult] = useState(false);

  const nextMCQS = () => {
    const thisMcqs = allMCQS[currentMcqsNumber];
    thisMcqs.userAnswer = choosed;

    setSolvedMCQS(solvedMCQS => [...solvedMCQS, thisMcqs]);

    setCurectMcqsNumber(currentMcqsNumber + 1);
    setChoosed("");
    reference.current.reset();
    console.log("Solved MCQS: ", solvedMCQS);
  }

  const submitTest = () => {
    setShwoResult(true);
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

              {
                showResult ? <table border="1" className="border-1 border-black w-full rounded-md">
                  <thead className="border-b border-black">
                    <tr>
                      <th>S.No</th>
                      <th>Question</th>
                      <th>Correct Answer </th>
                      <th> Your Answer </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      solvedMCQS.map((mcqs, ind) => {
                        return <tr className="even:bg-gray-100 odd:bg-white border-b border-black" key={ind} >

                          <td className="border-r border-black p-1 text-center ">{ind + 1}</td>
                          <td className="border-r border-black p-1 text-center ">{mcqs.question}</td>

                          <td className="border-r border-black p-1 text-center ">{mcqs.choices[mcqs.correct_choice - 1]}</td>
                          <td className="border-r border-black p-1 text-center ">{mcqs.userAnswer}{mcqs.choices[mcqs.correct_choice-1] == mcqs.userAnswer? " ✓" : " ✗"} </td>

                        </tr>
                      })
                    }
                  </tbody>
                  <tfoot>
                    <tr>  
                      <td colSpan={2} className="border-t border-black p-1 text-center font-bold">Total Score</td>
                      <td colSpan={2} className="border-t border-black p-1 text-center font-bold">{solvedMCQS.filter(mcqs => mcqs.choices[mcqs.correct_choice - 1] == mcqs.userAnswer).length} / {mcqsLength}</td>
                    </tr>
                  </tfoot>
                </table> : ""
              }

              <div className="question-block w-full flex items-center justify-start">
                <span className="md:text-3xl text-2xl text-gray-500 px-2">{currentMcqsNumber < allMCQS.length ? "Q-" + (currentMcqsNumber + 1) : ""}</span>
                <p className="question px-1 text-lg font-bold">{currentMcqsNumber < allMCQS.length ? allMCQS[currentMcqsNumber]?.question : ""}</p>
              </div>

              <form onSubmit={e => e.preventDefault()} ref={reference}>
                {
                  allMCQS[currentMcqsNumber]?.choices.map((option, ind) => {

                    return <div key={ind} className="options w-full flex flex-col gap-3 my-5">
                      <label className="option flex items-center justify-start gap-5 w-[90%] mx-auto bg-emerald-100 rounded-md p-2 cursor-pointer hover:bg-emerald-200 transition-all duration-200">
                        <input type="radio" name="q1" value={`${option}`} className="w-[20px] h-[20px] " onChange={(e) => setChoosed(e.target.value)} />  {option}
                      </label>
                    </div>

                  })
                }

              </form>


              {
                solvedMCQS.length == mcqsLength ? !showResult? <button onClick={submitTest} className="next p-2 text-lg rounded-lg bg-blue-700 my-2 text-white font-bold w-[50%] mx-auto block cursor-pointer hover:bg-emerald-800">  View Result </button>
                  : <button onClick={()=>window.location.href = "/"} className="next p-2 text-lg rounded-lg bg-blue-700 my-2 text-white font-bold w-[50%] mx-auto block cursor-pointer hover:bg-emerald-800"> Make Another Test </button>
                  :""
              }
              {
                solvedMCQS.length != allMCQS.length ? <button onClick={nextMCQS} disabled={!choosed} className="next p-2 text-lg rounded-lg bg-blue-700 my-2 text-white font-bold w-[50%] mx-auto block cursor-pointer hover:bg-emerald-800">Next</button> : ""
              }
            </div>
          </div>
        </section>
      }



    </main>
  )
}

export default Test
