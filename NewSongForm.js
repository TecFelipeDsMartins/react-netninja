import React, {useState} from 'react'

function NewSongForm(){
  return(
    <form>
      <label>Song </label>
      <input type="text" placeHolder="Add a song here" required/>
      <button >Add a new Song</button>
    </form>
  )
}

export default NewSongForm
