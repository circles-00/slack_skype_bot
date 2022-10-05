import { SkypeBot } from "./skype-bot.service";

export class SlackService {

    constructor(private readonly skypeBotService: SkypeBot = new SkypeBot()) {}

    async receiveMessage(content: Record<any, string>) {
        const { title, text } = content

        if (!text.includes('UPDATE COMPLETE')) return

        const [environment] = title.split(' ')
        const [, status] = text.split(': ')
        const message = `A new deploy has gone live: \n\nEnvironment: ${environment}\nStatus: ${status}`
        
        return await this.skypeBotService.sendMessage(message)
    }
}