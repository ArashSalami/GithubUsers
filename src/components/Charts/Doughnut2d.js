import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const ChartComponent = ({ data }) => {
  const dataSource = {
    chart: {
      caption: "Stars Per Language",
      subcaption: null,
      doughnutRadius: "45%",

      showpercentvalues: "0",
      aligncaptionwithcanvas: "0",
      captionpadding: "0",
      decimals: "1",

      centerlabel: "Stars: $value",
      theme: "fusion",
    },
    data,
  };

  return (
    <ReactFusioncharts
      type='doughnut2d'
      width='100%'
      height='400'
      dataFormat='JSON'
      dataSource={dataSource}
    />
  );
};
export default ChartComponent;
