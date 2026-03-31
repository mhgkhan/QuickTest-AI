import { useMatch } from "react-router"


const Test = () => {
  const match = useMatch("/tests/:testName");

  const {testName} = match.params;


  return (
    <main>
      <h1 className="text-3xl ">TEST FOR {testName}</h1>
    </main>
  )
}

export default Test
