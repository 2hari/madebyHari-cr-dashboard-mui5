import Image from 'next/image';

const DoughnutChart = () => {
  return <Image alt='chart' src='/chart.png' height={105} width={105} />;
};
DoughnutChart.displayName = 'DoughnutChart';

export default DoughnutChart;
