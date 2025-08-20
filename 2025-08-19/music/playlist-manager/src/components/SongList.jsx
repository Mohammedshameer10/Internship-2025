import React from "react";
import {
  Card,
  CardContent,
  Typography,
   Grid,
  IconButton,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; 

const SongList = ({ songs = [], onToggleLike }) => {
    const navigate = useNavigate();
  return (
    <Grid container spacing={3} >
      {songs.length > 0 ? (
        songs.map((song) => (
          <Grid size={{xs:12, sm:6, md:3}}  key={song.id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 2,
                width: 300,  
                bgcolor: "rgb(37 37 38)",
                height: 120,    
                color:"white",     
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1
              }}
            >
              <Avatar
                variant="rounded"
                src={song.cover || ""}
                alt={song.name}
                sx={{ width: 64, height: 64, mr: 2 }}
              />

              <CardContent
                sx={{
                  flex: "1 1 auto",
                  p: "8px !important",
                  minWidth: 0, 
                }}
              >
                <Typography variant="subtitle1" noWrap >
                  {song.name}
                </Typography>
                <Typography variant="body2" noWrap>
                  {song.artist}
                </Typography>
              </CardContent>

              <Box>
                <IconButton onClick={() => onToggleLike(song.id)}>
  {song.liked ? (
    <Favorite sx={{ color: "#ff4d4d" }} />
  ) : (
    <FavoriteBorder sx={{ color: "white" }} />
  )}
</IconButton>

              </Box>
            </Card>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
        <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/")} 
                >
                    Back to Home
                </Button>        </Grid>
      )}
    </Grid>
  );
};

export default SongList;
