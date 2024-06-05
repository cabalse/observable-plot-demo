import * as Plot from "@observablehq/plot";
import PlotFigure from "./components/plot-figure";
import penguins from "./data/penguins.json";
import timeseries from "./data/timeseries.json";
import CenterScreen from "./components/center-screen";
import PlotTitle from "./components/plot-title";
import Header from "./components/header";
import Page from "./components/page";
import ContentSwitcher from "./components/content-switcher";
import TABS from "./constants/tabs";
import { useState } from "react";

export default function App() {
  const [selectedContent, setSelectedContent] = useState(TABS.PLOT);

  const contentChildren = [
    {
      key: "plot",
      content: (
        <div>
          <PlotTitle title="Plot + React" subtitle="Penguins scatterplot" />
          <PlotFigure
            options={{
              marks: [
                Plot.dot(penguins, {
                  x: "culmen_length_mm",
                  y: "culmen_depth_mm",
                }),
              ],
            }}
          />
        </div>
      ),
    },
    {
      key: "barchart",
      content: (
        <div className="mt-4">
          <PlotTitle title="Time-series bar chart" subtitle="" />
          <PlotFigure
            options={{
              x: { tickFormat: "d", interval: 1 },
              marks: [Plot.barY(timeseries, { x: "year", y: "population" })],
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <CenterScreen>
      <Header onChange={setSelectedContent} />
      <Page>
        <ContentSwitcher
          childrens={contentChildren}
          display={selectedContent}
        />
      </Page>
    </CenterScreen>
  );
}
