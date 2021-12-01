import { app } from './app';

const port = process.env.SERVER_PORT;

app.listen(port, () => console.log(`Server running at ${port}`));
