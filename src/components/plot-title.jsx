const PlotTitle = ({ title, subTitle }) => (
  <>
    <h1>{title}</h1>
    {subTitle && <h2>{subTitle}</h2>}
  </>
);

export default PlotTitle;
