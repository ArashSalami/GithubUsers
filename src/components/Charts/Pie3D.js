import FusionCharts from "fusioncharts";
import chart from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
chart(FusionCharts);

const ChartComponent = ({ data }) => {
  const dataSource = {
    chart: {
      decimals: 0,
      theme: "fusion",
      caption: "Languages",
      palettecolors: "5d62b5,29c3be,f2726f",
      subcaption: null,
      showvalues: "1",
      showpercentintooltip: "0",
      numberprefix: "%",
      enablemultislicing: "1",
      pieRadius: "45%",
    },
    data,
  };

  return (
    <ReactFusioncharts
      type='pie3d'
      width='100%'
      height='400'
      dataFormat='JSON'
      dataSource={dataSource}
    />
  );
};
export default ChartComponent;
