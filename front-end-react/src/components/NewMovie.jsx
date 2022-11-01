import NavBar from "./NavBar";

import {useState} from 'react'
import { Navigate } from "react-router-dom";


const NewMovie = () => {

    const [title, setTitle] = useState('')
    console.log('title!!!', title)

    const [image, setImage] = useState('')
    console.log('image!!!', image)

    const [date, setDate] = useState('')
    console.log('date!!!', date)

    const [duration, setDuration] = useState('')
    console.log('duration!!!', duration)

    const [genre, setGenre] = useState('')
    console.log('genre!!!', genre)

    const [description, setDescription] = useState('')
    console.log('description!!!', description)



    const saveMovie = async ()=> {
        console.log('We are about to save!!!!!')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: title,
              image: image,
              date: date,
              duration: duration,
              genre: genre,
              description: description
            })
          };
         // do our fetch stuff!!
        const data = await fetch('/movie', requestOptions)
         console.log('time to save movie!!', data)
         window.location.reload();
    }

    return (
        
        <div className="Form">
            <h2>Add A New Movie</h2>
            {/* method is the HTTP verb and action is the destination path */}
            {/* <form method="POST" action="/movie"> */}
            <form >
                <label>Movie Title: </label>
                <input 
                    id="title"
                    name="title"
                    required
                    onChange={(e)=> {setTitle(e.target.value)}}
                />
                <label>Image URL: </label>
                <input 
                    type="url"
                    id="image"
                    name="image"
                    onChange={(e)=> {setImage(e.target.value)}}
                />
                <label>Date Released (year): </label>
                <input 
                    type="number"
                    id="date"
                    name="date"
                    onChange={(e)=> {setDate(e.target.value)}}
                />
                <label>Duration (in minutes): </label>
                <input 
                    type="number"
                    id="duration"
                    name="duration"
                    onChange={(e)=> {setDuration(e.target.value)}}
                />
                <label>Genre: </label>
                <input 
                    type="text"
                    id="genre"
                    name="genre"
                    onChange={(e)=> {setGenre(e.target.value)}}
                />
                <label>Movie Description: </label>
                <textarea
                    id="description"
                    name="description" 
                    onChange={(e)=> {setDescription(e.target.value)}}
                    required
                />
                <input 
                onClick={saveMovie}
                    className="btn"
                   // type="submit"
                    value="Add Movie"
                />
            </form>
        </div>
    )
}

export default NewMovie;