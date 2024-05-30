import { MessageBuilder, Webhook } from "discord-webhook-node";

const webhookURL = "https://discord.com/api/webhooks/1245704159639113728/ywhmWMpgXeNgAyLHFWkayz07PJp0ANaR71CzbSeLWrfjM1GfCTutFYtfq68sjiFcIr4L"
// Create new Webhook instance with Beautives Webhook URL
const hook = new Webhook(webhookURL);

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
        .setText('<@321531954631671810>')
        .setTimestamp()
            .setColor('#00ff00')
        
        // Send webhook message with newly created embed
        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(embed.payload)
        }).then((response) =>{
            //pass response along to the client
            res.send()
        })
    }
}
