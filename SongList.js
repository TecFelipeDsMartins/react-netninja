import React , {useState} from 'react';

function SongList(){
  const [songs, setSongs] = useState([
    {title: "Digno de Glória", id:1},
    {title: "Jesus em tua presença", id:1},
    {title: "A Ele a Glória", id:1}
  ])

  const addSong = () =>{
    setSongs([...songs, {title:"Porque Dele e por Ele", id: 4}])
  }

  return(
    <div className="song-list">
      <ul>
        {songs.map(song => <li key={song.id}>{song.title}</li>)}  
      </ul>
      <label>Song </label>
      <input type="text" placeHolder="Add a song here" required/>
      <button onClick={addSong}>Add a new Song</button>
    </div>
  )
}

export default SongList
