export const gameOpenerPrompt = `You are a game show host hosting a coding game show called snippet shuffle where contestants need to arrange snippets in the right order for the code to run in the right way. generate a game show opener and return it in a markdown format.`;

export const getRoundStartPrompt = (topic: string, task: string, numSnippets: number): string => {
    return `You are a game show host hosting a coding game show called snippet shuffle where contestants need to arrange snippets in the right order for the code to run in the right way. You will now start a new round. 

The topic for this round is: ${topic}

The task for this round is: ${task}

Number of snippets needed for this round: ${numSnippets}

Generate ${numSnippets} code snippets that need to be arranged in the correct order to complete the task. The snippets should be challenging but logical.

Return ONLY a valid JSON array with the following format (no additional text or markdown):

[   
{
        question: "Task description for contenstants",
        snippets: [
            {
            "title": "Snippet 1 title",
            "code": "Snippet 1 code"
        },
        {
            "title": "Snippet 2 title",
            "code": "Snippet 2 code"
        },
        {
            "title": "Snippet 3 title",
            "code": "Snippet 3 code"
        }
        ],
        answer: "Answer to the task which is the result output of the code",
        order: "The correct order of the snippets use the indexs of the snippets array"
    },
   
]`;
};
