import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());

interface WeatherData {
    city: string;
    temperature: number;
    date: string;
    time: string;
}
const weatherHistory: WeatherData[] = [];

// GET all items
router.get("/weather", (req: Request, res: Response) => {
    res.json(weatherHistory);
});

// POST endpoint to save weather history
router.post('/weather', (req: Request, res: Response) => {
    const { city, temperature, date, time } = req.body;
    const newWeatherData: WeatherData = { city, temperature, date, time };
    weatherHistory.push(newWeatherData);
    res.status(201).json(newWeatherData);
});


export default router;