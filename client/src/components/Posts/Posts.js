import React from "react";
import { useSelector } from "react-redux";
import { Grid} from '@material-ui/core';

import Post from "./Post/Post";
import useStyles from './styles'

const Posts = () => {
    const posts = useSelector((state) => state.post);
    const classes = useStyles();

    console.log(posts);
    return (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              <Grid  item xs={12} sm={6} md={6}>
                <Post />
              </Grid>
          </Grid>
      );
    };

export default Posts;