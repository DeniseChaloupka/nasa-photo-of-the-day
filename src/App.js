    import React, {useEffect,useState} from "react";
    import axios from "axios";
    import Title from './Title';
    import Img from './Img';
    import Info from './Info';
    import NasaImg from './5081.jpg';
    import Date from './Date';
    import "./App.css";

function App() {

  const [APODImg, setAPODImg] = useState();
  const [APODTitle, setAPODTitle] = useState();
  const [APODInfo, setAPODInfo] = useState();
  const [APODDate, setAPODDate] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setAPODImg(res.data.url);
        setAPODTitle(res.data.title);
        setAPODInfo(res.data.explanation);
        setAPODDate(res.data.date)
    });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <div className='header'>
        <img className='nasa-logo' src={NasaImg}></img>
        <Title title={APODTitle} />
        <img className='nasa-logo' src={NasaImg}></img>
      </div>
      <Img src={APODImg} />
      <Date date={APODDate} />
      <Info info={APODInfo} />
    </div>
  );
}

export default App;
