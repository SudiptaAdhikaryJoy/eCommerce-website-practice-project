import logo from "assets/images/Logo.png";
export const Header = () => {
  return (
    <div className="container mx-auto bg-slate-300">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <input
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
          <button className="bg-slate-500">Search</button>
        </div>
      </div>
    </div>
  );
};
