import SlackModelClass from "./modelModule.js";


export default class SlackControllerClass extends SlackModelClass {


    // controller variables
    date = new Date()
    isTime = 9
    // = date.getHours()
    ispitchFriday = date.getDay()
    minutes = date.getMinutes()
    isHackthon = date.getHours();
    month = date.getMonth

    constructor(props) {
        super(props)

        this.rtm.start()
            .catch(console.error)

        // when resource is ready.
        this.rtm.on('ready', async () => {
            setInterval(async () => {
                await this.isHackthon == 7 ? this.sendMessage("#general", "Hello @space Few Minutes for Stand Up!") : false
                this.ispitchFriday == 5 ? this.sendMessage("#general", "Hello @space Few Minutes for Stand Up!") : false
            }, 86400000); // 1 day

            // isTime == 9 ? scheduleMessage("Hello Guys good morning Time for Stand Up", isTime) : console.log('not yet time for Stand Up');
            this.ispitchFriday == 5 && this.isTime == 10 ? this.sendMessage("#team-echo-reminder-bot", "Hello Guys is Pitch Friday") : console.log('not yet day for Picth Friday');
            this.isHackthon == 6 && this.isTime == 11 ? this.sendMessage("#team-echo-reminder-bot", "Hackthon in 30mns guys") : console.log('not yet time for hackathon');
            console.log(`Today is ${date.getDay()}`);
        });


        // this.rtm.on('member_joined_channel', async (event) => {
        //     try {
        //         // Send a welcome message to the same channel where the new member just joined, and mention the user.
        //         const reply = await rtm.sendMessage(`Welcome to the channel, <@${event.user}>`, event.channel)
        //         console.log('Message sent successfully', reply.ts);
        //     } catch (error) {
        //         console.log('An error occurred', error);
        //     }
        // })

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