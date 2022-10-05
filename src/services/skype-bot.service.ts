import axios, { AxiosInstance } from 'axios'
import qs from 'querystring'

// TODO: Place variable in env
const { EVA_CHAT_ID, AZURE_BOT_CLIENT_ID, AZURE_BOT_CLIENT_SECRET } = process.env 

export class SkypeBot {
    private axiosInstance: AxiosInstance | null = null
        
    constructor() {
        this.getAxiosInstance().then(axiosInstance => this.axiosInstance = axiosInstance)
    }

    private async getAxiosInstance() {
        const accessToken = await this.getAccessToken()
        return axios.create({
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }
    
    public async getAccessToken() {
        // TODO: Replace hardcoded credentials
        const { data: { access_token: accessToken } } =
            await axios.post('https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token', qs.stringify({
            grant_type: 'client_credentials',
            client_id: AZURE_BOT_CLIENT_ID,
            client_secret: AZURE_BOT_CLIENT_SECRET,
            scope: 'https://api.botframework.com/.default'
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        
        return accessToken
    }

    public async sendMessage(content: string) {
        if (!this.axiosInstance) this.axiosInstance = await this.getAxiosInstance()
        
        return await this.axiosInstance
            .post(`https://smba.trafficmanager.net/apis/v3/conversations/${EVA_CHAT_ID}/activities`,
                {
                    type: 'message',
                    text: content
                })
    }
}