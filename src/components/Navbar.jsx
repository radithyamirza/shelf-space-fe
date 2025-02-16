import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className=" bg-[#252422] flex justify-between items-center text-[#FFFCF2] 
    px-4 md:px-12 py-4 md:py-6">
        <Link to={"/"}>
            <p className="font-sans font-bold tracking-wider md:text-lg 
            lg:text-xl cursor pointer">Shelf Space</p>
        </Link>

        <div className="font-sans flex items-center space-x-5 md:text-lg">
            <Link to={"/books"}>
                <p className="bg-[#403D39] px-3 py-2">Add book</p>
            </Link>
            <Link to={"/log-in"}>
                <p className="bg-[#403D39] px-3 py-2">Log in</p>
            </Link>
            <Link to={"/sign-up"}>
                <p className="bg-[#403D39] px-3 py-2">Sign up</p>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar