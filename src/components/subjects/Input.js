import { useState } from "react";

export const Input = ({ setCount, count, val, setData, data }) => {
  const [range, setRange] = useState(0);
  const [grade, setGrade] = useState("O");
  const handleOnChangeRange = (e) => {
    setCount((count) => count + 1);
    setRange(e.target.value);
    let temp = data;
    if (temp.some((e) => e.id === val)) {
      let tempData = data;
      tempData.map((dt) => {
        if (dt?.id === val) {
          dt.credit = e.target.value;
        }
      });
      setData(tempData);
    } else {
      let tempData = data;
      tempData.push({ id: val, credit: e.target.value, grade: grade });
      setData(tempData);
    }
  };

  const handleOnChangeGrade = (e) => {
    setCount((count) => count + 1);
    setGrade(e.target.value);
    let temp = data;
    if (temp.some((e) => e.id === val)) {
      let tempData = data;
      tempData.map((dt) => {
        if (dt?.id === val) {
          dt.grade = e.target.value;
        }
      });
      setData(tempData);
    } else {
      let tempData = data;
      tempData.push({ id: val, credit: range, grade: e.target.value });
      setData((tempData) => tempData);
    }
  };
  return (
    <>
      <div className="mt-1 border-2 border-gray-800 rounded p-1 px-2 font-meri ">
        <div className="flex gap-2 justify-between">
          <label
            for="default-range"
            className="block mb-2 text-sm font-medium text-gray-900 flex justify-between"
          >
            <span className="font-semibold w-full mt-2">{val}. Credits</span>
          </label>
          <input
            id="default-range"
            type="range"
            value={range}
            onChange={handleOnChangeRange}
            min={1}
            max={5}
            step={1}
            className="w-8/12 h-2 m-auto bg-gray-300 rounded-lg appearance-none cursor-pointer text-black mt-3"
          />
          <input
            className="text-base mt-1 font-semibold mr-10 w-7 h-7 text-gray-800  slider-thumb text-center rounded border-2 border-black"
            value={range}
            onChange={handleOnChangeRange}
          />
        </div>
        <div className="flex gap-2 justify-around">
          <label
            for="grades"
            className="block mb-2 text-sm font-medium text-gray-900 flex justify-between"
          >
            <span className="font-semibold w-full mt-2">Subject Grade</span>
          </label>
          <select
            id="grades"
            onChange={handleOnChangeGrade}
            value={grade}
            className=" bg-red-50-cus border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-1"
          >
            <option selected>Choose a Grade</option>
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="P">P</option>
            <option value="F">F</option>
            <option value="Ab">Ab</option>
            <option value="I">I</option>
          </select>
        </div>
      </div>
    </>
  );
};
