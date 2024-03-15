import {useState, useEffect} from 'react'

export default function Gettime() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState(1000);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:4000/vignan/'
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setSlides(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // Update currentTime every second
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run effect only once on mount

  useEffect(() => {
    const intervalIdPhoto = setInterval(() => {
      setPhotoIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, time);
    console.log(photoIndex)

    return () => {
      clearInterval(intervalIdPhoto);
    };
  }, [time, slides.length]);

  useEffect(() => {
    if (slides[photoIndex] && slides[photoIndex].avatar.includes('.mp4')) {
      setFlag(true);
      setTime(1000 * 30); // Change time interval for videos
    } else {
      setFlag(false);
      setTime(1000 * 5); // Reset time interval for images
    }
  }, [photoIndex, slides]);

  return (
    <div>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      <AnotherComponent slide={slides[photoIndex]} flag={flag} />
    </div>
  );
}

function AnotherComponent({ slide, flag }) {
  return (
    <div className='two-grid'>
      <div className='first-box'> 
        {!flag && slide && <img src={slide.avatar} width="100%" height="100%" alt="slide"></img>}
        {flag && <video autoPlay loop controls muted width="100%">
          <source src={slide ? slide.avatar : ''} type="video/mp4"></source>
        </video>}
      </div>

      <div className='second-box'>
        <p>{slide ? slide.text : ''}</p>
      </div>
    </div>
  );
}
