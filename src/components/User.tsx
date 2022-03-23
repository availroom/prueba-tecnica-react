import React from "react";
import { Button, Card, CardContent, List, Typography } from "@mui/material";

const User: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Nombre del usuario
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          email
        </Typography>
        <Typography variant="body2">Posts</Typography>
        <List>
          {/* {posts.map((post) => (
            <ListItem key={post.id}>{post.title}</ListItem>
          ))} */}
        </List>
        <Button
          variant="contained"
          sx={{
            marginTop: "1rem"
          }}
        >
          Save
        </Button>
      </CardContent>
    </Card>
  );
};
export default User;
