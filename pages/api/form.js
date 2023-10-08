import { MessageBuilder, Webhook } from "discord-webhook-node";

// Create new Webhook instance with Beautives Webhook URL
const hook = new Webhook("https://discord.com/api/webhooks/1159786460761821284/DBw4xocwF-9OKz6Ewk3vkq-xVznDgY2T1vALdHK0gjlyr3DxQjlLGrtcNrMMcOUe4PtO");

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Create new Message Builder and configure discord message
        const embed = new MessageBuilder()
        .setTitle('New Form Entry')
        .addField('Email', req.body.email)
        .addField('Instagram', req.body.instagram)
        .addField('Telegram', req.body.telegram)
        .addField('Phone', req.body.phone)
        .addField('Message', req.body.message)
        .setTimestamp();
        
        // Send webhook message with newly created embed
        hook.send(embed);


        // Send respond to client
        res.send()
    }
}