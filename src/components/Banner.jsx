

const Banner = ({onDiscoverMore}) => {


  return (
    <div className="banner flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row justify-evenly text-white py-4 px-8 ">
      {/* <div className='w-full  text-center align-middle m-auto backdrop-blur-md'>
            <h1 className="text-3xl font-bold mb-2 ">Welcome to SpaceX Rockets</h1>
    <p className="text-lg">Explore the amazing rockets launched by SpaceX</p>
      </div> */}
      <div className="banner text-white text-center align-middle m-auto py-12 px-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Embark on a Journey to the Stars
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-6">
        Explore the Extraordinary World of SpaceX Rockets
      </p>
      <button onClick={()=>onDiscoverMore()} className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white py-3 px-6 rounded-md font-bold text-lg">
        Discover More
      </button>
    </div>
      <div className='w-full flex justify-end '>
       
        <img  className='brightness-90' src={"./3d-rocket (1).png"} alt="space-vector" />
      </div>

  </div>
  );
};

export default Banner;
