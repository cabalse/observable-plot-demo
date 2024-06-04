const Tab = ({ title, isSelected, onClick }) => {
  const className = isSelected
    ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
    : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300";

  return (
    <li>
      <a onClick={onClick} className={className}>
        {title}
      </a>
    </li>
  );
};

export default Tab;
