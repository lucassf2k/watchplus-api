import express from 'express';

function init(): void {
  const app = express();
  const PORT = 3333;

  app.listen(PORT || 3333, () =>
    console.log('🚀 Server is running on http://localhost:3333'),
  );
}
init();
