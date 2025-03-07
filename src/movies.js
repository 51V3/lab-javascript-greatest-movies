// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    /*
    let countDramaMovies = 0;
    for (let i=0; i<moviesArray.length; i++) {
        if (moviesArray[i].director === 'Steven Spielberg' && moviesArray[i].genre.includes('Drama')) {
            countDramaMovies++;
        }
    }
    return countDramaMovies;
} */
const dramaMovies = moviesArray.filter(movie =>
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
);
return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
        if (moviesArray.length === 0) {
            return 0;
        }
    
        const totalScore = moviesArray.reduce((sum, movie) => {
            if (movie.score) {
                return sum + movie.score;
            }
            return sum;
        }, 0);
    
        const averageScore = totalScore / moviesArray.length;
    
        return parseFloat(averageScore.toFixed(2));
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre === 'Drama');
    if (dramaMovies.length === 0) {
        return 0;
    }
    const totalScore = dramaMovies.reduce((sum, movie) => sum + (movie.score || 0), 0);
    const averageScore = totalScore / dramaMovies.length;
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.slice().sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });

    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title).sort((a, b) => a.localeCompare(b));
    if (titles.length > 20) {
        return titles.slice(0, 20);
    }
    return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
