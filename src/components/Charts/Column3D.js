import React from "react";

// const Column3D = () => {
//   return <div>chart</div>;
// };

// export default Column3D;

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const ChartComponent = ({ data }) => {
  const dataSource = {
    chart: {
      caption: "Most Popular",
      yaxisname: "Stars",
      xaxisname: "Repos",
      xAxisNameFontSize: "16px",
      yAxisNameFontSize: "16px",

      decimals: "0",
      theme: "fusion",
    },
    data,
  };

  return (
    <ReactFusioncharts
      type='column3d'
      width='100%'
      height='100%'
      dataFormat='JSON'
      dataSource={dataSource}
    />
  );
};
export default ChartComponent;
