import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from 'express';

import { router as questionsRouter } from './questions/router';

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome, stranger');
});

// Make our app reseive json by default
app.use(express.json());

// Add router for questions
app.use('/questions', questionsRouter);

app.listen(process.env.PORT,(): void => {
    try {
        console.log(`server is listening on ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
        process.exit();
    }
});
