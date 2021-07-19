import React from 'react';
import {useHistory} from 'react-router-dom'
export default function SavedList(props) {
  const history = useHistory()
 const goHome = ( ) => {
   console.log('Going Home')
   history.push('/')
 }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={goHome} className="home-button">
        Home
      </div>
    </div>
  );
}
