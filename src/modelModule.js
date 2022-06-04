
import { RTMClient } from "@slack/rtm-api";
import { WebClient } from "@slack/web-api";
import { holdChannelId,holdToken } from "./keys.js";

export default class SlackModelClass {

    // instantiations of Rest Objects
    web = new WebClient(holdToken)
    // token = process.env.SLACK_BOT_TOKEN;
    rtm = new RTMClient(holdChannelId)

    // holdToken = () => "xoxb-3164401680611-3591228652978-edQMvXp9rlHuZbd5FYOEFAQR"
    // holdChannelId = () => "C03GYK6CY95"
}