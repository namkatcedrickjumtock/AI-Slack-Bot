import SlackModelClass from "./modelModule.js";


export default class SlackControllerClass extends SlackModelClass {


    constructor(props) {
        super(props)

        this.rtm.start()
            .catch(console.error)

        // when resource is ready.
        this.rtm.on('ready', async () => {
            this.sendMessage("#team-echo-reminder-bot", "testing using OOP");
        });

        this.rtm.on('member_joined_channel', async (event) => {
            try {
                // Send a welcome message to the same channel where the new member just joined, and mention the user.
                const reply = await rtm.sendMessage(`Welcome to the channel, <@${event.user}>`, event.channel)
                console.log('Message sent successfully', reply.ts);
            } catch (error) {
                console.log('An error occurred', error);
            }
        })

    }



    // sending msges to channels
    async sendMessage(channele, msg) {
        await this.web.chat.postMessage({
            channel: channele,
            text: msg
        })
    }


    async wehnUserJoinsChannel(msg, event) {
        try {
            const reply = await rtm.sendMessage(`<@${event.user}> 👨‍💻👨‍💻, ${msg} `, event.channel)
            console.log('Message sent successfully', reply.ts);

        } catch (error) {
            console.log('An error occurred', error);
        }
    }

}


let controllerObject = new SlackControllerClass()