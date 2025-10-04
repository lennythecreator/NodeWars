import express,{Request, Response} from "express";
import { generateQuestion, generateRoundSnippets } from "./features/generate-questions";
import { announcerOpener } from "./features/announcer";
import { textToSpeech } from "./features/text-to-speach";
const app = express()
const port = 3000

app.get('/', async (req: Request, res: Response) =>{
     try {
        const answer = await generateRoundSnippets(
            "JavaScript Arrays",
            "Filter and map an array to get squared even numbers",
            5
        );
        res.json(answer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate snippets" });
    }

})

app.get('/welcome', async(req: Request, res: Response) =>{
    try{
        const welcome: string | null = await announcerOpener();
        if (welcome != null){
            textToSpeech(welcome);
            res.json(welcome)
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate snippets" });
    }
    }
)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})