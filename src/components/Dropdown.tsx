import React from "react";

const Dropdown = ({ setGen }) => {
    const getDropdownValue = (event) => {
        setGen(event.target.value);
    }
    return (
        <div className="flex justify-end items-center mr-10 mt-5">
            <p className="text-gray-400 mr-3">Select generation</p>
            <select 
               className="w-36 p-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 left-0"
               onChange={getDropdownValue}
            >
                <option value="all">all generatios</option>
                <option value={1}>Gen 1</option>
                <option value={2}>Gen 2</option>
                <option value={3}>Gen 3</option>
                <option value={4}>Gen 4</option>
                <option value={5}>Gen 5</option>
                <option value={6}>Gen 6</option>
                <option value={7}>Gen 7</option>
                <option value={8}>Gen 8</option>
            </select>
        </div>
    );
}

export default Dropdown;