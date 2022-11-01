import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';

const EditMovie = (data) => {
        const [title, editTitle] = useState('')
        console.log('title!!!', title)
    
        const [image, editImage] = useState('')
        console.log('image!!!', image)
    
        const [date, editDate] = useState('')
        console.log('date!!!', date)
    
        const [duration, editDuration] = useState('')
        console.log('duration!!!', duration)
    
        const [genre, editGenre] = useState('')
        console.log('genre!!!', genre)
    
        const [description, editDescription] = useState('')
        console.log('description!!!', description)

        const movieEdit = async ()=> {
            console.log('We are about to save!!!!!')
            const requestOption = {
                method: 'PUT',
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
             const getData = async () => {
             const data = await fetch('/movie', +id, requestOption)
             console.log('time to edit movie!!', data)

             const {id} = useParams()
            console.log('THI si the person we need to get out of the DB!', id)

        useEffect(()=> {
                getData();
        }, [])
        
        }

        console.log('this is the data props thing', data)

    return (
        <div className="Form">
            <h2>Edit Movie</h2>
            {/* <form method="PUT" action={`/movies/${data.movie.id}?_method=PUT`}> */}
            {/* <form>
                <label>Movie Title: </label>
                <input 
                    id="title"
                    name="title"
                    value={title}
                    required
                    onChange={(e)=> {editTitle(e.target.value)}}
                />
                <label>Image URL: </label>
                <input 
                    type="url"
                    id="image"
                    name="image"
                    value={image}
                    onChange={(e)=> {editImage(e.target.value)}}
                />
                <label>Date Released (year): </label>
                <input 
                    type="number"
                    id="date"
                    name="date"
                    value={date}
                    required
                    onChange={(e)=> {editDate(e.target.value)}}
                />
                <label>Duration (in minutes): </label>
                <input 
                    type="number"
                    id="duration"
                    name="duration"
                    value={duration}
                    onChange={(e)=> {editDuration(e.target.value)}}
                />
                <label>Genre: </label>
                <input 
                    type="text"
                    id="genre"
                    name="genre"
                    value={genre}
                    onChange={(e)=> {editGenre(e.target.value)}}
                />
                <label>Movie Description: </label>
                <textarea
                    id="description"
                    name="description" 
                    value={description}
                    required
                    onChange={(e)=> {editDescription(e.target.value)}}
                />
                <input 
                    className="btn"
                    onClick={movieEdit}
                    type="submit"
                    value="Update Movie"
                />
            </form> */}
        </div>
    )
}
}

export default EditMovie;