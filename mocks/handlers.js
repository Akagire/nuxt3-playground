import { rest } from 'msw';

export const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      ctx.status(200),
    );
  }),

  rest.post('/api/logout', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', '');

    return res(
      ctx.status(200),
    );
  }),

  rest.get('/api/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    console.log('[MSW] isAuthenticated', { isAuthenticated});

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),
];
