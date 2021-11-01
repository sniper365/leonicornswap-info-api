import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    // uri: "https://api.bscgraph.org/subgraphs/name/pancakeswap/exchange-lite",
    uri: "https://api.thegraph.com/subgraphs/name/crypto0390/leonicornswap",
  }),
  cache: new InMemoryCache(),
});
