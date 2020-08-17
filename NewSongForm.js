import React, {useState} from 'react'

function NewSongForm({ addSong }){
  const [title, setTitle] = useState('')
  
  const handleChange = (e) => {
    setTitle(e.target.value)
  } 
  const handleSubmit = (e) => {
    e.preventDefault()
    addSong(title)
    setTitle('')
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>Song </label>
      <input type="text" 
             onChange={handleChange} 
             placeHolder="Add a song here"
             value={title} 
             required
      />
      <input type="submit" value="add song"/>
    </form>
  )
}

export default NewSongForm
