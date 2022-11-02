import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import NavBar from './NavBar';


const EditMovie = (data) => {
    const {id} = useParams()
    console.log('This is the id we need to get out of the DB!', id)
     
        useEffect(()=> {
            const fetchData = async () => {
                const data = await fetch(`/movie/${id}`, {
                  mode: "cors",
                });
                const jsonData = await data.json();
                console.log("people from db", jsonData);
                editTitle(jsonData.title)
                editImage(jsonData.image)
                editDate(jsonData.date)
                editDuration(jsonData.duration)
                editGenre(jsonData.genre)
                editDescription(jsonData.description)
              };
              fetchData();
        }, [id])

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
            
            const data = await fetch(`/movie/${id}`, requestOption)

            console.log('time to edit movie!!', data)
       
        }
        console.log('this is the data props thing', data)
    return (
        <div>
            <NavBar />
            <div className="Form">
                <h2>Edit Movie</h2>
                <form>
                    <label>Movie Title: </label>
                    <input 
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e)=> {editTitle(e.target.value)}}
                        required
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
                        onChange={(e)=> {editDescription(e.target.value)}}
                        required
                    />
                    <input 
                        className="btn"
                        onClick={movieEdit}
                        type="submit"
                        value="Update Movie"
                    />
                </form>
            </div>
        </div>
    );
};

export default EditMovie;