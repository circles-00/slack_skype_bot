
# Currently this service is listening to Slack webhooks and is sending messages via skype

  

## To learn more about slack webhooks visit: <a href="https://slack.com/help/articles/115005265063-Incoming-webhooks-for-Slack"> Slack Incoming Webhooks</a>

## To learn more about creating Azure bots visit: <a href="https://learn.microsoft.com/en-us/composer/quickstart-create-bot-with-azure">Create a bot with Azure</a>

## To learn more about connecting bot with Skype visit: <a href="https://learn.microsoft.com/en-us/azure/bot-service/bot-service-channel-connect-skype?view=azure-bot-service-4.0">Connect a bot to Skype</a>

## Reference to .env.example to see which environment variables you need to set before starting the project

# To start the project in production mode
```typescript
yarn
yarn build
cp .env.example .env // Populate your .env file with your credentials
yarn start:prod
```
