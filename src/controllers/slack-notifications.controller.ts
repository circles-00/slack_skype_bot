import { Request, Response, NextFunction } from 'express'
import { SlackService } from '../services'

export class SlackNotificationsController {
  private static instance: SlackNotificationsController

  public static get(): SlackNotificationsController {
    if (!this.instance) {
      this.instance = new SlackNotificationsController()
    }
    return this.instance
  }

  constructor(
    private readonly slackService: SlackService = new SlackService()
  ) {
    if (SlackNotificationsController.instance) {
      throw new Error('Instance is already created')
    }
  }

  async receiveChannelMessages(request: Request, response: Response, next: NextFunction) {
    try {
      // TODO: Add signing service, which will verify Slack messages that they're valid
      const { body: { event: { attachments: [attachment] } } } = request || {}
      await this.slackService.receiveMessage(attachment)

      return response.send({ message: 'Success' })
    } catch (err) {
      next(err)
    }
  }
}
