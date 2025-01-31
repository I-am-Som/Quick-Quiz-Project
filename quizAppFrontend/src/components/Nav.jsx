import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
    let [user, setUser] = useState("User");
    return (
      <nav className="w-full h-12 bg-yellow-500 flex absolute">
        <div className='flex ml-[17.5%]'>
          <Link to="/" className="h-full w-auto p-3 active:bg-black active:text-white hover:bg-yellow-400 flex justify-center items-center"><p>Home</p></Link>
          <Link to="/taketest" className="h-full w-auto p-3 active:bg-black active:text-white hover:bg-yellow-400 flex justify-center items-center"><p>Take Test</p></Link>
          <Link to="/score" className="h-full w-auto p-3 active:bg-black active:text-white hover:bg-yellow-400 flex justify-center items-center"><p>Scores</p></Link>
          <Link to="/savedquizzes" className="h-full w-auto p-3 active:bg-black active:text-white hover:bg-yellow-400 flex justify-center items-center"><p>Saved Quizzes</p></Link>
        </div>
        <Link to="/login" className="h-full w-auto p-3 active:bg-black active:text-white hover:bg-yellow-400 flex justify-center items-center ml-[36.2%]">
          {user}
        </Link>
      </nav>
    );
  }
  
  export default Nav;
  