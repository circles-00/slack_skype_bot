import app from './app'
import { appConfig } from './config'

// TODO: Implement logger and replace the console.log
app.listen(appConfig.port, () =>
  console.log(`App listening on port ${appConfig.port}`),
)
