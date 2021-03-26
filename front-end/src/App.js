import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
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

import PostsList from './components/PostsList';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

const App = () => {
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

            <Button color="primary" variant="outlined" startIcon={<PenIcon />}>
              Nova Postagem
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Switch>
              <Route exact path="/posts" conponent={PostsList} />
              <Route exact path="/posts" conponent={PostsList} />
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
