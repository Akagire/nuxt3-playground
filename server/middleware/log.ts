export default defineEventHandler((event) => {
  console.log('New Request: ', {
    url: event.req.url,
  });
});
