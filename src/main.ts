import express from 'express';

function init(): void {
  const app = express();
  const PORT = process.env.PORT || 3333;

  app.listen(PORT, () =>
    console.log(`🚀 Server is running on http://localhost:${PORT}`),
  );
}
init();
