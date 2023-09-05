import './App.css'
import Carditem from './components/CardItem/index'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div>
    <h1>Learn 4.0 Technologies</h1>
    <p>
      Get trained by alumini of IITs and top companies like Amazon, Microsoft
      ,Intel,Nvidia,Qualcomm,etc.Learn directly from professionals involved in
      Product Development
    </p>
    <ul>
      <div className="c1">
        <Carditem props={cardsList[0]} key={cardsList[0].id} />
        <Carditem props={cardsList[1]} key={cardsList[1].id} />
      </div>
      <div className="c2">
        <Carditem props={cardsList[2]} key={cardsList[2].id} />
        <Carditem props={cardsList[3]} key={cardsList[3].id} />
      </div>
    </ul>
  </div>
)

export default App
