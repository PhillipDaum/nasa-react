import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [nasaData, setNasaData] = useState(null);
  const [dates, setDates] = useState(null);

  // sets the dates for today and 3 days ago
  useEffect(() => {
    // Today in YYYY-MM-DD
    const today = new Date().toISOString().split("T")[0];
    // 3 days ago in YYYY-MM-DD
    let threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    threeDaysAgo = threeDaysAgo.toISOString().split("T")[0];
    setDates([today, threeDaysAgo]);
  }, []);

  useEffect(() => {
    if (dates) { // Ensure dates are set before making the API call
      // API call components
      const baseURL = "https://api.nasa.gov/";
      const endPoint = "planetary/apod";
      const myKey = "YFd2rMGO2R7KJipZ2lXdYqMP2dsmq3pWKEOz9NXQ";
      // API call URL
      const callURL = `${baseURL}${endPoint}?start_date=${dates[1]}&end_date=${dates[0]}&api_key=${myKey}`;
      
      // Fetching data from NASA
      fetch(callURL)
        .then((response) => response.json())
        .then((data) => {
          setNasaData(data);
        })
        .catch((error) => {
          console.error("Error fetching NASA data:", error);
        });
    }
  }, [dates]);

  return (
    <>
      <div className="daily-photos-wrapper">
        <h1>NASA Photo of the Day</h1>
        <p>{dates ? dates.join(' to ') : 'Loading dates...'}</p>
        {nasaData ? (
          <div className="daily-photos-grid">
            {nasaData.map((media, index) => (
              <div key={index} className="card">
                <h2>{media.title}</h2>
                {media.media_type === "image" ? (
                  <>
                    <img src={media.url} alt={media.title} />
                  </>
                ) : media.media_type === "video" ? (
                  <>
                    <iframe 
                      src={media.url} 
                      title={media.title} 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </>
                ) : (
                  <p>Media type not supported</p>
                )}
                <p>{media.explanation}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading photos...</p>
        )}
      </div>
    </>
  );
}

export default App;
