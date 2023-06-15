import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cross, Customized, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAreaChart, faBarChart, faChartLine, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { i18n } from '../assets/translate/i18n'

const bookData = [
  {
    name: 'Microservices',
    students: 50,
    clients: 7,
    sales: 120
  },
  {
    name: 'Microservices in.Net',
    students: 62,
    clients: 25,
    sales: 177
  },
  {
    name: 'HTTP/2',
    students: 86,
    clients: 65,
    sales: 165
  },
  {
    name: 'Unity in Action',
    students: 54,
    clients: 102,
    sales: 156
  },
  {
    name: 'Enterprise OSGI',
    students: 132,
    clients: 83,
    sales: 197
  },
  {
    name: 'AspectJ in Action',
    students: 156,
    clients: 62,
    sales: 223
  },
  {
    name: 'Grails in Action',
    students: 136,
    clients: 72,
    sales: 164
  },
  {
    name: 'Spring in Action',
    students: 106,
    clients: 42,
    sales: 190
  },
  {
    name: 'Cloud Native',
    students: 176,
    clients: 32,
    sales: 114
  }
]

const genreData = [
  {
    subject: 'Horror',
    A: 100,
    B: 110,
    fullScale: 150
  },
  {
    subject: 'Fantasy',
    A: 1,
    B: 130,
    fullScale: 150
  },
  {
    subject: 'Romance',
    A: 155,
    B: 130,
    fullScale: 150
  },
  {
    subject: 'Science',
    A: 45,
    B: 100,
    fullScale: 150
  },
  {
    subject: 'Technology',
    A: 60,
    B: 90,
    fullScale: 150
  },
  {
    subject: 'Biography',
    A: 130,
    B: 109,
    fullScale: 150
  }
]

export default function Graphic() {

    const CustomizedCross = props => {
    const { width, height, stroke, fill, formattedGraphicalItems } = props
    const firstSeries = formattedGraphicalItems[0]
    const secondPoint = firstSeries?.props?.points[1]

    return (
      <Cross
        y={secondPoint?.y}
        x={secondPoint?.x}
        top={5}
        left={50}
        height={height}
        width={width}
        stroke={stroke ?? '#fff'}
        fill={fill ?? 'none'}
      />
    )}

    const getIntroOfPage = label => {
      if (label === 'Microservices') {
        return "Page A is about Microservices"
      }
      if (label === 'Microservices in.Net') {
        return "Page B is about Microservices in.Net"
      }
      if (label === 'HTTP/2') {
        return "Page C is about HTTP/2"
      }
      if (label === 'Unity in Action') {
        return 'Page D is about Unity in Action'
      }
      if (label === 'Enterprise OSGI') {
        return 'Page E is about Enterprise OSGI'
      }
      if (label === 'AspectJ in Action') {
        return 'Page F is about AspectJ in Action'
      }
      if (label === 'Grails in Action') {
        return 'Page G is about Grails in Action'
      }
      if (label === 'Spring in Action') {
        return 'Page H is about Spring in Action'
      }
      if (label === 'Cloud Native') {
        return 'Page I is about Cloud Native'
      }
      return ''
    }

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip text-light">
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <p className="intro">{getIntroOfPage(label)}</p>
            <p className="desc">Anything you want can be displayed here.</p>
          </div>
        )}
      return null
    }

  return (
    <>
      <Card className="card-graphic text-light">
        <Card.Header>
          <Card.Body className="row" style={{ overflowY: "scroll", height: 430 }}>
           <h6 style={{ margin: "auto" }}>{i18n.t('graphic.title')} <FontAwesomeIcon icon={faChartLine}/></h6>
            <ResponsiveContainer className="py-4" width="96%" aspect={3}>
              <LineChart data={bookData} margin={{ bottom: -34 }}>
                <CartesianGrid strokeDasharray="1"/>
                <XAxis dataKey="name" stroke="#cdcccc" style={{ fontSize: 12 }} interval={'preserveStart'}/>
                <YAxis stroke="#c4c4c4" style={{ fontSize: 12 }}/>
                <Legend/>
                <Tooltip content={<CustomTooltip/>}/>
                <Line type="basicClosed" dataKey="students" strokeDasharray="2" stroke="chartreuse" activeDot={{ r: 8 }}/>
                <Line type="basicClosed" dataKey="clients" stroke="#00ffee" activeDot={{ r: 8 }}/>
                <Line type="basicClosed" dataKey="sales" stroke="gold" activeDot={{ r: 8 }}/>
                <Customized component={CustomizedCross}/>
              </LineChart>
            </ResponsiveContainer>

           <h6 className="py-4" style={{ margin: "auto" }}>AreaChart <FontAwesomeIcon icon={faAreaChart}/></h6>
            <ResponsiveContainer className="py-2" width="97%" height={200}>
              <AreaChart width={500} height={200} data={bookData} syncId="anyId" margin={{ right: 20, bottom: -10 }}>
                <CartesianGrid strokeDasharray="1"/>
                <XAxis stroke="#c4c4c4" style={{ fontSize: 12 }} dataKey="name"/>
                <YAxis stroke="#c4c4c4" style={{ fontSize: 12 }}/>
                <Tooltip/>
                <Area type="monotone" dataKey="students" strokeDasharray="2" stroke="#82ca9d" fill="#00ffee"/>
              </AreaChart>
            </ResponsiveContainer>

           <h6 className="py-5" style={{ margin: "auto" }}>RadarChart <FontAwesomeIcon icon={faChartPie}/></h6>
            <ResponsiveContainer width="96%" height="90%">
              <RadarChart cx="52%" cy="41%" outerRadius="70%" data={genreData}>
                <PolarGrid/>
                <PolarAngleAxis stroke="#c4c4c4" style={{ fontSize: 11 }} dataKey="subject"/>
                <PolarRadiusAxis angle={30} domain={[0, 180]} stroke="white" style={{ fontSize: 11 }}/>
                <Radar name="Genre" dataKey="A" stroke="gold" fill="gold" fillOpacity={.9}/>
                <Radar name="Sales" dataKey="B" stroke="turquoise" fill="turquoise" fillOpacity={.6}/>
              </RadarChart>
            </ResponsiveContainer>

           <h6 style={{ margin: "auto" }}>BarChart <FontAwesomeIcon icon={faBarChart}/></h6>
            <ResponsiveContainer width="97%" height="90%">
              <BarChart width={500} height={300} data={bookData} margin={{ top: 20, right: 20, bottom: -10 }}>
                <CartesianGrid strokeDasharray="1"/>
                <XAxis stroke="#c4c4c4" style={{ fontSize: 11 }} dataKey="name"/>
                <YAxis stroke="#c4c4c4" style={{ fontSize: 11 }}/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="sales" stackId="a" fill="#8884d8"/>
                <Bar dataKey="clients" stackId="a" fill="turquoise"/>
                <Bar dataKey="students" fill="#c3ce28"/>
              </BarChart>
            </ResponsiveContainer>

          </Card.Body>
        </Card.Header>
      </Card>
    </>
  )}