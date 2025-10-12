import express,{Request, Response} from "express";
import { generateQuestion, generateRoundSnippets } from "./features/generate-questions";
import { announcerOpener } from "./features/announcer";
import { textToSpeech } from "./features/text-to-speach";
import { createPlayer } from "./db/db-controller/create-player";
import { run } from "./db/db-controller/connection";
const app = express()
const port = 5000
app.use(express.json());

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

app.post('/CreatePlayer', async(req: Request, res: Response) =>{
    console.log("creating player", req.body);
    console.log(Object.keys(req.body));
    const {coderTag, playerCode} = req.body;
    const player = await createPlayer(coderTag, playerCode);
    res.json(player);
})

app.get('/test-connection', async(req: Request, res: Response) =>{
    run().catch(console.dir);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})