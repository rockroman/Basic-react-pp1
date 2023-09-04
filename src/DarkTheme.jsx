import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const DarkTheme = () => {
  const { darkTheme, toggleTheme } = useGlobalContext();
  return (
    <button className="theme" onClick={toggleTheme}>
      {darkTheme ? <BsSunFill /> : <BsFillMoonFill />}
    </button>
  );
};
export default DarkTheme;
