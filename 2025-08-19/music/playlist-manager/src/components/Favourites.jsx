import React from "react";
import SongList from "./SongList";
import { Box, Typography } from "@mui/material";

export default function Favourite({ songs, onToggleLike }) {
  const favouriteSongs = songs.filter((song) => song.liked);

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Favourite Songs
        </Typography>
        <Typography variant="subtitle1">
          Your liked songs
        </Typography>
      </Box>

      <SongList songs={favouriteSongs} onToggleLike={onToggleLike} />
    </Box>
  );
}
