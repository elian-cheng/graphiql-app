import React, { useCallback, useState } from 'react';
import { IconButton, Container, CircularProgress } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, setResponse } from '../../redux/graphQLSlice';

import styles from './GraphiQL.module.scss';

const url = 'https://rickandmortyapi.com/graphql';

function GraphiQL() {
  const query = useSelector((state: RootState) => state.graphQL.query);
  const response = useSelector((state: RootState) => state.graphQL.response);
  const dispatch = useDispatch();
  const [isLoaderGoing, setIsLoaderGoing] = useState(false);

  const onClickHandler = useCallback(async () => {
    if (query) {
      setIsLoaderGoing(true);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query: query }),
      });
      const data = await response.json();
      console.log(data);
      dispatch(setResponse(JSON.stringify(data, null, 2)));
      setIsLoaderGoing(false);
    }
  }, [dispatch, query]);

  return (
    <Container>
      <div className={styles['graph-main-block']}>
        <div className={styles['query-block']}>
          <textarea
            className={styles['query-textarea']}
            value={query}
            onChange={(event) => dispatch(setQuery(event.target.value))}
          ></textarea>
          <IconButton className={styles['btn-start']} color="success" onClick={onClickHandler}>
            <PlayArrow sx={{ fontSize: 30 }} />
          </IconButton>
        </div>
        <div className={styles['response-block']}>
          {isLoaderGoing ? (
            <div className={styles['loader-block']}>
              <CircularProgress />
            </div>
          ) : (
            <pre>{response}</pre>
          )}
        </div>
      </div>
    </Container>
  );
}

export default GraphiQL;
