import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllData } from '../Redux/Action';

const SearchForm = ({ onSearch }) => {
  const dispatch=useDispatch()
  const [status, setStatus] = useState('');
  const [RocketName, setRocketName] = useState('');
  const [Year, setYear] = useState('');
  const handleSearch = () => {
    onSearch({ status, RocketName, Year });
    const filter={
      launch_success:status,
      rocket_name:RocketName,
      launch_year:Year
    }
    dispatch(getAllData(1,filter))
  };

  return (
    <div className=" z-10 search-form flex flex-col sm:flex-col mg:flex-col lg:flex-row   justify-center  gap-4  p-4 m-4 backdrop-blur-md  bg-white/30 rounded-lg">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="bg-white border border-gray-300 rounded-md py-2 px-4 mr-2"
      >
        {/* Render dropdown options for status filter */}
        <option value="">Filter By Launch Success</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <input
        type="text"
        value={RocketName}
        onChange={(e) => setRocketName(e.target.value)}
        placeholder="Filter By Rocket"
        className="bg-white border border-gray-300  py-2 px-4 mr-2 shadow appearance-none  rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        value={Year}
        type='number'
        placeholder='Filter By Launch Year'
        onChange={(e) => setYear(e.target.value)}
        className="bg-white  border-gray-300  py-2 px-4 mr-2  shadow appearance-none border rounded   text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

    <div className=' m-auto sm:m-auto lg:m-1 md:m-1'>
        <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Search
      </button>
    </div>
    
    </div>
  );
};

export default SearchForm;
