const EditMovie = (data) => {

    return (
        <div className="Form">
            <h2>Edit Movie</h2>
            <form method="POST" action={`/movies/${data.movie.id}?_method=PUT`}>
                <label>Movie Title: </label>
                <input 
                    id="title"
                    name="title"
                    value={data.movie.title}
                    required
                />
                <label>Picture: </label>
                <input 
                    type="url"
                    id="pic"
                    name="pic"
                    value={data.movie.pic}
                />
                <label>Release Date: </label>
                <input 
                    type="number"
                    id="date"
                    name="date"
                    value={data.movie.date}
                    required
                />
                <label>Duration (in minutes): </label>
                <input 
                    type="number"
                    id="duration"
                    name="duration"
                    value={data.movie.duration}
                />
                <label>Genre: </label>
                <input 
                    type="text"
                    id="genre"
                    name="genre"
                    value={data.movie.genre}
                    required
                />
                <label>Movie Description: </label>
                <textarea
                    id="description"
                    name="description" 
                    value={data.movie.description}
                    required
                />
                <input 
                    className="btn"
                    type="submit"
                    value="Update Movie"
                />
            </form>
        </div>
    )
}

export default EditMovie;