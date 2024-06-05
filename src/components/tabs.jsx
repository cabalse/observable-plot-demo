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
    </ul>
  );
};

export default Tabs;
