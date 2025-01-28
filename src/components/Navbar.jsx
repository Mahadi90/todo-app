

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-violet-700 text-white font-semibold p-5">
           <div className="logo">
            <span className="text-3xl">myTask</span>
            </div> 
            <ul className="flex gap-4">
                <li className="hover:font-bold cursor-pointer transition-all duration-150">Home</li>
                <li className="hover:font-bold cursor-pointer transition-all duration-150">Your Todos</li>
            </ul>
        </nav>
    );
};

export default Navbar;