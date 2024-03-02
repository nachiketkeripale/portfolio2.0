import { Link } from 'react-router-dom';

function MainBody() {
  return (
    <div className="flex bg-regal-blue font-[Poppins] h-[80vh] w-full">
      <div className="flex-col justify-center h-[50vh] mt-5 w-full">
        <div>
          <div className="flex-col">
            <h2 className="text-[50px] text-center text-white">HELLO</h2>
            <h2 className="text-[50px] text-center text-white">
              I'M NACHIKET C. KERIPALE
            </h2>
            {/* <p className="text-[22px] text-center text-white">Software Engineer at Mindtree.Ltd</p> */}
            <p className="text-[22px] text-center text-white">
              Aspiring Full Stack JS Developer
            </p>
          </div>
        </div>

        <div className="flex mt-16 text-white w-full justify-center">
          <Link to="/projects"
            className=" rounded px-3 py-2 border-2 border-white hover:bg-white hover:text-black"
          >
            SEE MORE ABOUT ME
          </Link>
        </div>


      </div>
    </div>
  );
}

export default MainBody;
