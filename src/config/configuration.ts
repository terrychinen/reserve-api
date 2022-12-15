export default () => ({
  port: process.env.NEST_PORT,
  jwt: {
    jwtSecret: process.env.JWT_SECRET,
  },
});
