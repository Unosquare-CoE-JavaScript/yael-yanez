import React, { FC } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import moment from "moment";
import Movie from "../models/Movie";

const MovieCard: FC<{ data: Movie }> = ({ data }) => (
  <Card sx={{ maxWidth: 320 }}>
    <CardMedia
      component="img"
      height="400"
      image={data.poster.value[0].url}
      alt={data.title.value}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {data.title.value}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {data.plot.value}
      </Typography>

      <Typography variant="caption" color="text.secondary">
        {data.category.value[0].name} -{" "}
        {moment(data.released.value).format("YYYY")}
      </Typography>
    </CardContent>
  </Card>
);

export default MovieCard;
