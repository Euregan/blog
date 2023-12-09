import LineChart from "../ui/articles/LineChart";
import Paragraph from "../ui/articles/Paragraph";

/* eslint-disable react-refresh/only-export-components */
export { default as illustration } from "../assets/ai in society - 3.jpg";

export const title = "What place for AI in our society";

export const date = new Date();

export const Content = () => (
  <>
    <Paragraph>
      These past few years, AIs, and LLMs, have exploded in popularity, usage,
      and capacity. We can see that easily by checking some statistics:
    </Paragraph>
    <LineChart
      title="Number of significant machine learning systems by sector"
      data={numberOfSignificantMachineLearningSystemsBySector}
    />
    <LineChart
      title="Number of parameters of significant machine learning systems by sector"
      data={numberOfParametersOfSignificantMachineLearningSystemsBySector}
    />
  </>
);

const numberOfSignificantMachineLearningSystemsBySector = [
  {
    label: "Industry & Academia Collaboration",
    color: "#7d9eb1",
    points: [
      { label: 2002, value: 2 },
      { label: 2003, value: 1 },
      { label: 2004, value: 0 },
      { label: 2005, value: 0 },
      { label: 2006, value: 1 },
      { label: 2007, value: 0 },
      { label: 2008, value: 3 },
      { label: 2009, value: 1 },
      { label: 2010, value: 1 },
      { label: 2011, value: 3 },
      { label: 2012, value: 1 },
      { label: 2013, value: 2 },
      { label: 2014, value: 6 },
      { label: 2015, value: 9 },
      { label: 2016, value: 9 },
      { label: 2017, value: 11 },
      { label: 2018, value: 4 },
      { label: 2019, value: 10 },
      { label: 2020, value: 5 },
      { label: 2021, value: 10 },
      { label: 2022, value: 1 },
    ],
  },
  {
    label: "Academia",
    color: "#d3d2ba",
    points: [
      { label: 2002, value: 3 },
      { label: 2003, value: 5 },
      { label: 2004, value: 5 },
      { label: 2005, value: 6 },
      { label: 2006, value: 12 },
      { label: 2007, value: 7 },
      { label: 2008, value: 4 },
      { label: 2009, value: 8 },
      { label: 2010, value: 11 },
      { label: 2011, value: 7 },
      { label: 2012, value: 8 },
      { label: 2013, value: 13 },
      { label: 2014, value: 14 },
      { label: 2015, value: 3 },
      { label: 2016, value: 13 },
      { label: 2017, value: 10 },
      { label: 2018, value: 6 },
      { label: 2019, value: 5 },
      { label: 2020, value: 8 },
      { label: 2021, value: 3 },
      { label: 2022, value: 3 },
    ],
  },
  {
    label: "Industry",
    color: "#8ea862",
    points: [
      { label: 2002, value: 2 },
      { label: 2003, value: 1 },
      { label: 2004, value: 0 },
      { label: 2005, value: 0 },
      { label: 2006, value: 0 },
      { label: 2007, value: 2 },
      { label: 2008, value: 2 },
      { label: 2009, value: 6 },
      { label: 2010, value: 2 },
      { label: 2011, value: 0 },
      { label: 2012, value: 1 },
      { label: 2013, value: 4 },
      { label: 2014, value: 3 },
      { label: 2015, value: 13 },
      { label: 2016, value: 16 },
      { label: 2017, value: 17 },
      { label: 2018, value: 14 },
      { label: 2019, value: 29 },
      { label: 2020, value: 23 },
      { label: 2021, value: 36 },
      { label: 2022, value: 32 },
    ],
  },
];

const numberOfParametersOfSignificantMachineLearningSystemsBySector = [
  {
    label: "Academia",
    color: "#d3d2ba",
    points: [
      { label: 1952, value: 40 },
      { label: 1955, value: 225 },
      { label: 1959, value: 3000 },
      { label: 1960, value: 17 },
      { label: 1967, value: 40 },
      { label: 1973, value: 21 },
      { label: 1981, value: 4096 },
      { label: 1982, value: 9900 },
      { label: 1983, value: 324 },
      { label: 1986, value: 144 },
      { label: 1986, value: 211600 },
      { label: 1987, value: 18629 },
      { label: 1988, value: 110 },
      { label: 1989, value: 3994 },
      { label: 1989, value: 10 },
      { label: 1991, value: 429409 },
      { label: 1992, value: 1166 },
      { label: 1994, value: 100000000 },
      { label: 1996, value: 6452 },
      { label: 1997, value: 10504 },
      { label: 1998, value: 7512 },
      { label: 1999, value: 276 },
      { label: 2000, value: 17 },
      { label: 2003, value: 451 },
      { label: 2003, value: 9178890 },
      { label: 2003, value: 11904264 },
      { label: 2004, value: 100000 },
      { label: 2005, value: 152061 },
      { label: 2005, value: 120000000 },
      { label: 2005, value: 178 },
      { label: 2006, value: 1600000 },
      { label: 2006, value: 3800000 },
      { label: 2006, value: 100 },
      { label: 2006, value: 114662 },
      { label: 2006, value: 37097 },
      { label: 2007, value: 100881 },
      { label: 2007, value: 490000 },
      { label: 2008, value: 2600000 },
      { label: 2009, value: 133140 },
      { label: 2009, value: 80940 },
      { label: 2009, value: 100000000 },
      { label: 2010, value: 5269500 },
      { label: 2010, value: 80000000 },
      { label: 2010, value: 16210006 },
      { label: 2010, value: 7082000 },
      { label: 2010, value: 12110000 },
      { label: 2011, value: 15260 },
      { label: 2011, value: 13125 },
      { label: 2012, value: 60000000 },
      { label: 2012, value: 3510255 },
      { label: 2012, value: 48840185 },
      { label: 2012, value: 5592010 },
      { label: 2012, value: 1994300 },
      { label: 2013, value: 29900000 },
      { label: 2013, value: 69003872 },
      { label: 2013, value: 37230 },
      { label: 2013, value: 43000000 },
      { label: 2014, value: 142552000 },
      { label: 2014, value: 144000000 },
      { label: 2014, value: 138000000 },
      { label: 2014, value: 239712 },
      { label: 2014, value: 120000000 },
      { label: 2014, value: 120000000 },
      { label: 2016, value: 92000000 },
      { label: 2017, value: 28100000 },
      { label: 2017, value: 2500000 },
      { label: 2018, value: 106085216 },
      { label: 2018, value: 86000000 },
      { label: 2019, value: 38000000 },
      { label: 2019, value: 36500000 },
      { label: 2020, value: 1500000000 },
      { label: 2020, value: 2600000000 },
      { label: 2020, value: 110000000 },
      { label: 2020, value: 51100000 },
      { label: 2020, value: 907264 },
      { label: 2021, value: 256000000 },
      { label: 2021, value: 1683456 },
      { label: 2022, value: 3500000000 },
      { label: 2022, value: 130000000000 },
      { label: 2022, value: 14500000000000 },
    ],
  },
];
