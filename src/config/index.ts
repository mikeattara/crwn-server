const defaultPort = 4000;

interface Config {
  apollo: {
    introspection: boolean;
    playground: boolean;
  };
  port: number | string;
}

export const config: Config = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === "true",
    playground: process.env.APOLLO_PLAYGROUND === "true"
  },
  port: process.env.PORT || defaultPort
};
