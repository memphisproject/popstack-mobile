import type { FetchFunction } from 'relay-runtime';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery: FetchFunction = async (params, variables, _cacheConfig) => {
  const response = await fetch('http://127.0.0.1:8080/v1beta1/relay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  const json = await response.json();

  if (Array.isArray(json.errors)) {
    console.log(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${
        params.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors,
      )}`,
    );
  }

  return json;
};

const storeObject = new Store(new RecordSource(), {
  gcReleaseBufferSize: 10,
});

export default new Environment({
  network: Network.create(fetchQuery),
  store: storeObject,
});
