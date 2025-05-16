/*
Create a React application that displays a dynamic list of movies. 
The application should allow users to filter movies by genre and sort movies by title or release year.
*/
import React, { useState } from 'react';

const Puzzle6 = () => {
    const [movies, setMovies] = useState([
        { title: 'Movie 1, Action, 2020', genre: 'Action', releaseYear: 2020 },
        { title: 'Movie 2, Comedy, 2019', genre: 'Comedy', releaseYear: 2019 },
        { title: 'Movie 3, Action, 2021', genre: 'Action', releaseYear: 2021 },
        { title: 'Movie 4, Comedy, 2020', genre: 'Comedy', releaseYear: 2020 },
        { title: 'Movie 5, Action, 2022', genre: 'Action', releaseYear: 2022 },
        { title: 'Movie 6, Comedy, 2021', genre: 'Comedy', releaseYear: 2021 },
        { title: 'Movie 7, Action, 2019', genre: 'Action', releaseYear: 2019 },
        { title: 'Movie 8, Comedy, 2022', genre: 'Comedy', releaseYear: 2022 },
        { title: 'Movie 9, Action, 2020', genre: 'Action', releaseYear: 2020 },
        { title: 'Movie 10, Comedy, 2019', genre: 'Comedy', releaseYear: 2019 },
    ]);
      

    const [genre, setGenre] = useState('');
    const [sort, setSort] = useState("Title");
    const [order, setOrder] = useState("ASC");

    const updateGenre = (e) => {
        setGenre(e.target.value);
    }
    
    const updateSort = (e) => {
        setSort(e.target.value);
    }

    const updateOrder = (e) => {
        setOrder(e.target.value);
    }

    const filteredMovies = movies.filter((movie) => {
        if (genre) {
            return movie.genre === genre;
        }
        return true;
    });

    const sortedMovies = filteredMovies.sort((a, b) => {
        if (order === "DSC") {
            [a, b] = [b, a];
        }
        if (sort === "Title") {
            return a.title.localeCompare(b.title);
        } else if (sort === "ReleaseYear") {
            return a.releaseYear - b.releaseYear;
        }
        return [];
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{ display: 'flex', gap: '5px'}}>
                <label>Select a genre:</label>
                <select value={genre} onChange={updateGenre}>
                    <option value="">All</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                </select>
            </div>
            <div style={{ display: 'flex', gap: '5px'}}>
                <label>Sort by:</label>
                <select value={sort} onChange={updateSort}>
                    <option value="Title">Title</option>
                    <option value="ReleaseYear">ReleaseYear</option>
                </select>
            </div>
            <div style={{ display: 'flex', gap: '5px'}}>
                <label>Order by:</label>
                <select value={order} onChange={updateOrder}>
                    <option value="ASC">ASC</option>
                    <option value="DSC">DSC</option>
                </select>
            </div>
            <ul style={{ listStyleType: 'none' }}>
                { sortedMovies.map((movie) => (
                    <li key={movie.title}>
                        {movie.title}
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default Puzzle6; 