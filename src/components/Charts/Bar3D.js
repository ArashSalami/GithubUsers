import React from "react";

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const ChartComponent = ({ data }) => {
  const dataSource = {
    chart: {
      caption: "Most Forked",
      yaxisname: "Forks",
      xaxisname: "Repos",
      showvalues: "0",
      theme: "fusion",
    },
    data,
  };

  return (
    <ReactFusioncharts
      type='bar3d'
      width='100%'
      height='100%'
      dataFormat='JSON'
      dataSource={dataSource}
    />
  );
};
export default ChartComponent;
