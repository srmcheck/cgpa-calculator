export const Header = () => {
  return (
    <header className="font-meri p-1">
      <div className="mt-5 text-center text-2xl font-semibold underline">
        SRM CGPA Calculator
      </div>
      <div className="text-center mt-1">
        <span className="p-1 bg-black rounded text-white text-xs m-1 ml-3">
          by
        </span>
        <a className=" font-bold" href="https://srmcheck.me/">
          SRM✔️
        </a>
      </div>
    </header>
  );
};
