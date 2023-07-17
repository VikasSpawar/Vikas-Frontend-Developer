import React, { useState } from "react";

const DataGrid = ({ data, itemsPerPage, onPageChange, onItemSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded,setIsLoaded]=useState(false)
  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleItemSelect = (item) => {
    onItemSelect(item);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.length&&data.slice(startIndex, endIndex);

// console.log(data)

  return (
    <div>
       <div className="z-0 data-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 p-4 text-white">
      {data.length&&displayedItems.map((item) => (
        <div
          key={item.flight_number}
          onClick={() => handleItemSelect(item)}
          className="  cursor-pointer transition-all  bg-opacity-10 hover:bg-opacity-30  bg-white backdrop-filter backdrop-blur-md shadow-md p-4 rounded-lg  "
        >
         

     
        <img
            src={ item.links.flickr_images[0]}
            alt={item.name}
            onLoad={()=>setIsLoaded(true)}
            className=" object-cover w-full h-48 opacity-80 hover:opacity-100 rounded-lg"
          />
          <div
          className="absolute top-5 left-5 text-xl text-bold"
          >{item.rocket.rocket_name}</div>
          <div className="p-4 ">
            <h3 className="text-lg font-bold mb-2 text-yellow-400">{item.mission_name}</h3>
            <p className="text-md ">Launch Date : <span className="text-blue-400"> {item.launch_year}</span></p>
            <p className="text-md">
              Launch Success :{" "}
              {item.launch_success ? (
                <span className="text-green-500">Yes</span>
              ) : (
                <span className="text-red-500">No</span>
              )}
            </p>
          </div>
        </div>
      ))}
     
    </div> <div className="w-full pagination  flex justify-center items-center mt-4 ">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${currentPage===1&&`opacity-30`} bg-white border bg-opacity-10  backdrop-blur-sm hover:bg-opacity-30 text-white py-2 px-4 rounded-md m-2`}
        >
          Previous
        </button>
        <span className="text-gray-400 font-bold">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={data.length==0}
          className={`${ data.length==0&&`opacity-30`} bg-white border bg-opacity-10  backdrop-blur-sm hover:bg-opacity-30 text-white py-2 px-4 rounded-md m-2`}
        >
          Next
        </button>
      </div>
    </div>
   
  );
};

export default DataGrid;



// experiment component




