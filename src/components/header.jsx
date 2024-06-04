import Tabs from "./tabs";

const Header = ({ onChange }) => {
  return (
    <header>
      <Tabs onChange={onChange} />
    </header>
  );
};

export default Header;
