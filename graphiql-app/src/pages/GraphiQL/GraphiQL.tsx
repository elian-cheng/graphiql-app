import React, { useCallback, useState } from 'react';
import { IconButton, Container, CircularProgress } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

import styles from './GraphiQL.module.scss';

// Delete
const exaQuery = `query allCharacters {
  characters {
    results {
      id
      name
    }
  }
}`;

const url = 'https://rickandmortyapi.com/graphql';

function GraphiQL() {
  const [query, setQuery] = useState(exaQuery);
  const [response, setResponse] = useState('');
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
      setResponse(JSON.stringify(data, null, 2));
      setIsLoaderGoing(false);
    }
  }, [query]);

  return (
    <Container>
      <div className={styles['graph-main-block']}>
        <div className={styles['query-block']}>
          <textarea
            className={styles['query-textarea']}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
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
