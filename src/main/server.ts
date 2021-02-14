import 'reflect-metadata';
import { ConnectionDatabase } from './config';

ConnectionDatabase.connect()
  .then(async () => {
    const app = (await import('./config/app')).default;
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Hey, server started on ${PORT}`));
  })
  .catch(err => console.log(err));
