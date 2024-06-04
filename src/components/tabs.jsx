import { useEffect, useState } from "react";

import TABS from "../constants/tabs";
import Tab from "./tab";

const Tabs = ({ onChange }) => {
  const [selectedTab, setSelectedTab] = useState(TABS.PLOT);

  useEffect(() => {
    if (onChange) {
      onChange(selectedTab);
    }
  }, [selectedTab]);

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <Tab
        title="Plot"
        onClick={() => setSelectedTab(TABS.PLOT)}
        isSelected={selectedTab === TABS.PLOT}
      />
      <Tab
        title="Bar Chart"
        onClick={() => setSelectedTab(TABS.BARCHART)}
        isSelected={selectedTab === TABS.BARCHART}
      />
      <li className="me-2">
        <a
          href="#"
          className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          Settings
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          Contacts
        </a>
      </li>
      <li>
        <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
          Disabled
        </a>
      </li>
    </ul>
  );
};

export default Tabs;
