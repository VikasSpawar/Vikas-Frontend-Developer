import React from 'react';

const ItemPopup = ({ item, onClose }) => {
  console.table(item)
  return (
    <div className="z-50 text-left item-popup transition fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
      <div className="backdrop-blur-md border  m-10  text-white rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-2">Mission Name : {item.mission_name}</h2>
       
        <p>Launch Year :  {item.launch_year}</p>
        <p>Launch Success : {item.launch_success? "Successful":"Unsuccessful"}</p>
        <p>Youtube Link  : <a href={item.links.video_link}>{item.links.video_link}</a> </p>
        <p>Wikipedia : <a href={item.links.wikipedia}> {item.links.wikipedia}</a></p>
        <br />
        <p> Details : {item.details}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ItemPopup;
