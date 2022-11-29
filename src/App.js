import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/subjects/Input";
export default function App() {
  const [count, setCount] = useState(0);
  const [cgpa, setCgpa] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      credit: 0,
      grade: "O",
    },
  ]);
  const [inputList, setInputList] = useState([
    <Input
      setCount={setCount}
      count={count}
      data={data}
      setData={setData}
      val={1}
    />,
  ]);

  const calculateCGPA = () => {
    let sumCredits = 0;
    let points = 0;
    let gradeMap = {
      O: 10,
      "A+": 9,
      A: 8,
      "B+": 7,
      B: 6,
      C: 5,
      P: 4,
      F: 0,
      Ab: 0,
      I: 0,
    };

    data.map((e) => {
      sumCredits += Number(e.credit);
      points += e.credit * gradeMap[e.grade];
      // console.log(sumCredits, points);
    });

    let cgpaCalc = points / sumCredits;
    setCgpa(cgpaCalc);
  };

  useEffect(() => {
    calculateCGPA();
  }, [count]);
  return (
    <>
      <Header />
      <div className="p-2 max-w-2xl m-auto">
        <div className="flex justify-between">
          <h2 className="font-meri text-base font-semibold">Subjects</h2>
          {cgpa > 0 && (
            <span className="font-bold text-2xl text-blue-700">
              CGPA : {cgpa.toFixed(2)}
            </span>
          )}
        </div>
        {inputList}
        <button
          onClick={() => {
            setInputList(
              inputList.concat(
                <Input
                  setCount={setCount}
                  count={count}
                  data={data}
                  setData={setData}
                  val={inputList.length + 1}
                />
              )
            );
          }}
          className="bg-black text-white text-xl font-bold rounded px-3 py-1 mt-4"
        >
          +
        </button>
      </div>
    </>
  );
}
