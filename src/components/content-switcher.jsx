const ContentSwitcher = ({ childrens, display }) => {
  const displayContent = childrens.filter((child) => child.key === display)[0];

  return displayContent.content;
};

export default ContentSwitcher;
