import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card } from 'react-bootstrap'
import { i18n } from '../assets/translate/i18n'

const pdata = [
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

export default function ScientificCalculator() {

  return (
    <>
      <Card className="card-graphic">
        <Card.Header>
          <Card.Body className="row" style={{ overflowY: "hidden", height: 430 }}>
            <h6 className="text-light py-4" style={{ margin: "auto" }}>{i18n.t('graphic.title')} 📊</h6>
            <ResponsiveContainer width="96%" aspect={3}>
              <LineChart data={pdata}>
                <CartesianGrid/>
                <XAxis dataKey="name" stroke="mintcream" style={{ fontSize: 12 }} interval={'preserveStartEnd'}/>
                <YAxis></YAxis>
                <Legend/>
                <Tooltip/>
                <Line dataKey="students" stroke="chartreuse" activeDot={{ r: 8 }}/>
                <Line dataKey="clients" stroke="#00ffee" activeDot={{ r: 8 }}/>
                <Line dataKey="sales" stroke="gold" activeDot={{ r: 8 }}/>
              </LineChart>
            </ResponsiveContainer>
          </Card.Body>
        </Card.Header>
      </Card>
    </>
  )}