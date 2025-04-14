import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


const app: Application = express();


app.use(cors()); // enable CORS
app.use(express.json()); // parse incoming JSON payload


// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the SecondHand Marketplace API!');
});

app.listen(5000, () => {
  console.log(`🚀 Server is running on http://localhost:5000`);
})

export default app;