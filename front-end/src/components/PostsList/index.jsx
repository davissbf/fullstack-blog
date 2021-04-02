import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import Post from '../Post/index';
import gridFour from '../../assets/grid_four.svg';
import gridThree from '../../assets/grid_three.svg';

const useStyles = makeStyles((theme) => ({
  layoutShifter: {
    float: 'right',
    margin: theme.spacing(2),
  },
}));

const PostDetails = () => {
  const posts = useSelector((state) => state.posts.posts);

  const [layout, setLayout] = useState('gridThree');

  const calculateMd = () => {
    return layout === 'gridThree' ? 4 : 3;
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.layoutShifter}>
        <Button
          variant="text"
          size="small"
          onClick={() => setLayout('gridThree')}
        >
          <img
            src={gridThree}
            style={{ background: layout === 'gridThree' ? '#ccc' : '' }}
            alt="Three Columns Grid Icon"
          />
        </Button>
        <Button
          variant="text"
          size="small"
          onClick={() => setLayout('gridFour')}
        >
          <img
            src={gridFour}
            style={{ background: layout === 'gridFour' ? '#ccc' : '' }}
            alt="Four Columns Grid Icon"
          />
        </Button>
      </div>
      <Grid container spacing={2} alignContent="stretch">
        {posts.length > 0 &&
          posts.map((post) => (
            <Grid item key={post?._id} xs={12} md={calculateMd()}>
              <Post {...post} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default PostDetails;
