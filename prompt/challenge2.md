# Challenge 2 - optimize a large list 

We have a large list of data that we want to display in a React web application.  Performance is key.  Please implement a solution to optimize the rendering and loading of the list.

Each item in the list is a conversation "line" object contains the following information:

- text: The conversation message displayed to a user from Woebot.  If multiple messages, a `|` character separates each one.
- replies: Potential replies for the text message which the user can choose from. 
- payloads: Reply payload, corresponding to each reply that user can select or click on in a more machine-readable format.
- routes: The next line to route to.  Corresponding to each reply payload. 
- tag: A control tag for special actions or routing. "bye" if there are no more lines to route to. 
- lesson: The name of the lesson which the line is part of.
- stage: Indicates if that line set is considered an "endpoint" - i.e. if the user has gotten that far, they've completed enough of the lesson for Woebot to not pester them about continuing it the next day.

Sample of a "line" object looks like this:
```
  {
    "id": "GYU",
    "text": "Thanks for your honesty 🌟🌟🌟",
    "replies": "You're welcome",
    "payloads": "",
    "routes": "VNT",
    "tag": "",
    "lesson": "labels",
    "stage": "endpoint"
  }
```
# Details
- Write a web application - backend built using JavaScript/NodeJS/ExpressJS and frontend developed using React. 
- Simulate a large list of data for testing of your solution. 
- Provide a quick overview on why you picked this solution. 
- Use any other third party library of your choice if needed. 
- Include instruction to build, run and test the application if applicable. 
- (Bonus) The application is deployed as a public site so that it can be evaluated. 
- (Bonus) Benchmark the performance of your solution
