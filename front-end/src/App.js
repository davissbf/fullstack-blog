import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import PenIcon from '@material-ui/icons/Create';

import useStyle from './styles';
import PostsList from './components/PostsList/index';
import AddPostForm from './components/AddPostForm/index';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyle();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation="0">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.container}
              color="inherit"
            />

            <Typography
              variant="h6"
              color="secondary"
              className={classes.title}
            >
              <Link to="http://localhost:3000/posts">FullStackBlog</Link>
            </Typography>

            <Button
              color="primary"
              variant="outlined"
              startIcon={<PenIcon />}
              onCLick={handleOpen()}
            >
              Nova Postagem
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Switch>
              <Route exact path="/posts" conponent={PostsList} />
            </Switch>
            <Redirect from="/" to="/posts" />
          </Grid>
        </Grid>
      </Container>

      <AddPostForm open={open} handleClose={handleClose} />
    </>
  );
};

export default App;
