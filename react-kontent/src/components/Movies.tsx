import React, { FC, useEffect, useState } from "react";
import { Backdrop, CircularProgress, Grid, Typography } from "@mui/material";
import { isEmpty, map } from "lodash";
import deliveryClient from "../api/deliveryClient";
import Movie from "../models/Movie";
import MovieCard from "./MovieCard";

const Movies: FC = () => {
  const [moviesList, setMoviesList] = useState<Movie[] | undefined>(undefined);

  useEffect(() => {
    const getMovies = async () => {
      const { items } = await deliveryClient
        .items<Movie>()
        .type("movie")
        .toPromise();

      setMoviesList(items);
    };

    getMovies();
  }, []);

  return (
    <div>
      <Typography variant="h3" align="center" paddingY="20px">
        Movies
      </Typography>

      <Grid container paddingX="20px" justifyContent="space-between">
        {!isEmpty(moviesList) &&
          map(moviesList, (movie: Movie) => (
            <Grid item>
              <MovieCard data={movie} />
            </Grid>
          ))}
      </Grid>

      <Backdrop open={!moviesList}>
        <CircularProgress />
      </Backdrop>
    </div>
  );
};

export default Movies;
