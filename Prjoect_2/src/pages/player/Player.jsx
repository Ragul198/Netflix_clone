import React, { useState, useEffect } from 'react';
import './Player.css';
import backicon from '../../assets/back_arrow_icon.png';
import { useParams, useNavigate } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [getapi, setapi] = useState({
    published_at: "",
    name: "",
    type: "",
    key: "",
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTEwNWRmNjMxYWU0NjBlNjFlODExZGYyZTczMmFkNCIsIm5iZiI6MTc0MjYyNjQxOC43NTgwMDAxLCJzdWIiOiI2N2RlNWU3MjVmOTc3ODM2YWI3YWExMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NXBhfxsEQkPSL4qAZVXIVE5iQ8cYQChYc1qCN-COMhA'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setapi(res.results[0]);
        } else {
          console.error('No results found');
          setapi({
            published_at: "",
            name: "",
            type: "",
            key: ""
          });
        }
      })
      .catch(err => {
        console.error(err);
        setapi({ published_at: "", name: "", type: "", key: "" });
      });
  }, []);

  return (
    <div className="player">
      <img src={backicon} alt="backicon" onClick={() => {
        console.log('Navigating back');
        navigate(-1);
      }} />

      {getapi.key ? (
        <iframe width='90%' height='90%'
          src={`https://www.youtube.com/embed/${getapi.key}`}
          title='Trailer'
          allowFullScreen
          frameBorder='0'>
        </iframe>
      ) : (
        <p>Trailer not available</p>
      )}

      <div className="player-info">
        <p>{getapi.published_at ? getapi.published_at.slice(0, 10) : "Unknown Date"}</p>
        <p>{getapi.name || "No name available"}</p>
        <p>{getapi.type || "No type available"}</p>
      </div>
    </div>
  );
}

export default Player;
