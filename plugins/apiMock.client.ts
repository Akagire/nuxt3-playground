export default async () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('../mocks/browser');
    await worker.start();
  }
};
