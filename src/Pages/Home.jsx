import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllData,setAllData } from '../Redux/Action';
import Banner from '../components/Banner';
import DataGrid from '../components/DataGrid';
import ItemPopup from '../components/ItemPopup';
import SearchForm from '../components/SearchForm';
import { GET_ALL_DATA_REQ } from '../Redux/ActionType';
import Nav from '../components/Nav';


const Home = () => {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage,setCurrentPage]=useState(1)
  const dispath=useDispatch()
  const data=useSelector(store=>store.data.data)
  const LoadingType=useSelector(store=>store.data.LoadingType)
  let dataGridRef = useRef(null);

  useEffect(() => {

    dispath(getAllData(currentPage))
  }, []);
  const handleSearch = ({ status, RocketName, Year }) => {
    let filteredData = data;

    
    if (status) {
      if(status=="true"){
        status=true
      }
      else{
        status=false
      }
      filteredData = filteredData.filter((item) => item.launch_success == status);
    }

    if (RocketName) {
      filteredData = filteredData.filter((item) => item.rocket_name == RocketName);
    }

    if (Year) {
      filteredData = filteredData.filter((item) => item.launch_year == Year);
    }
    // console.log("filered",filteredData)
    dispath(setAllData(filteredData));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handlePopupClose = () => {
    setSelectedItem(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  const handleScrollToDataGrid = () => {
    dataGridRef.current.scrollIntoView({ behavior: 'smooth' });
    // console.log("clicked")
  };

  // console.log(LoadingType)

  return (
    <div >
      <div  >

      <Nav onDiscoverMore={handleScrollToDataGrid}/>
      </div>
      <Banner onDiscoverMore={handleScrollToDataGrid} />
      <div className='lg:sticky md:sticky  top-0 sticky z-10' ref={dataGridRef}>

      <SearchForm onSearch={handleSearch} />
      </div>
      <div 
      
      >
        {LoadingType==GET_ALL_DATA_REQ&& 
      <div>
      
        <h1 className='text-4xl text-white '>Loading...</h1>
      </div>

        }
        {LoadingType!==GET_ALL_DATA_REQ&&!data.length&&<h1 className='text-2xl text-red-500'>No Data Found...</h1>}
      {
        LoadingType!==GET_ALL_DATA_REQ&& <DataGrid
       
        data={data}
        itemsPerPage={8}
        onPageChange={handlePageChange}
        onItemSelect={handleItemSelect}
      />
      }
      </div>

      {selectedItem && <ItemPopup item={selectedItem} onClose={handlePopupClose} />}
    </div>
  );
};

export default Home;
