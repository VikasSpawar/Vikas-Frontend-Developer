

const Nav=({onDiscoverMore})=>{


    return(
        <div>
            <div className="flex   px-10 py-4 justify-evenly">
                <div className=" w-full flex justify-start">
                    <img width={"150px"} src="./logo.png" alt="spacex" />
                </div>
                <div className="w-full flex justify-end text-blue-900">
                <button onClick={()=>onDiscoverMore()} className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white p-2 rounded-md font-bold text-lg">
                    Discover More
      </button>
                </div>
            </div>
        </div>
    )
}

export default Nav