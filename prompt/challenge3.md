# Challenge 3 - creating a chat bot

Create a simple web based chat bot with guided responses.  

See the [sample.json](sample.json) for all the conversation message lines. 

Each message line consists of:

- text: The conversation message displayed to a user from Woebot.  If multiple messages, a `|` character separates each one.
- replies: Potential replies for the text message which the user can choose from. 
- payloads: Reply payload, corresponding to each reply that user can select or click on in a more machine-readable format.
- routes: The next line to route to.  Corresponding to each reply payload. 
- tag: A control tag for special actions or routing. "bye" if there are no more lines to route to. 
- lesson: The name of the lesson which the line is part of.
- stage: Indicates if that line set is considered an "endpoint" - i.e. if the user has gotten that far, they've completed enough of the lesson for Woebot to not pester them about continuing it the next day.

# Details
- Write a web application - backend built using JavaScript/NodeJS/ExpressJS and frontend developed using React. 
- Implement a simple chat window for the conversation.
- Implement any supporting APIs required to enable the chat.  
- Use any other third party libray of your choice if needed. 
- Include instruction to build, run and test the application if applicable. 
- (Bonus) The application is deployed as a public site so that it can be evaluated. 
- (Bonus) Benchmark the performance of your solution
