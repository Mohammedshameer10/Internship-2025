import React from "react";
import SongList from "./SongList";
import { Box, Typography } from "@mui/material";

export default function Home({ songs, onToggleLike }) {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          All Songs
        </Typography>
        <Typography variant="subtitle1">
          Browse your music library
        </Typography>
      </Box>

      <SongList songs={songs} onToggleLike={onToggleLike} />
    </Box>
  );
}
