var Discordie = require("discordie");
var Events = Discordie.Events;

var client = new Discordie();

autoReconnect: true,

client.connect({ token: "" /* This is the place for the bot's token. */ });

client.connect({ client_id: "" /* This is the place for your user account's ID */});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log("Bot has been connected succesfully!")
  console.log("Connected as: " + client.User.username);
});

var game = {name: "$help"};

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == client.User.mention)
    e.message.channel.sendMessage("Use $help to see the list of commands! :wink:");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$help")
    e.message.channel.sendMessage("```Main: $ping, $invite, $hi, $bye, $month, $year, $404cat, $aboutbot, $changelog, $botinfo, $supportserver, $fish``````Music: Discontinued from September 7, 2017``` If you need help with this bot, please contact **user**");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$ping")
    e.message.channel.sendMessage(":ping_pong: I'm here, so pong!");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$aboutbot")
  	e.message.channel.sendMessage(":question: **About BriciWorld Bot** ```Website:``````Support server:``````Bot owner:``````Twitter:```");
}); 

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$invite")
    e.message.channel.sendMessage("Want me on your server? Here you go: <http://briciworld.ml/bot/invite>");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$hi")
    e.message.channel.sendMessage("Hi!");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$bye")
    e.message.channel.sendMessage("Bye!");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$404cat")
    e.message.channel.sendMessage("https://http.cat/404");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$month")
    e.message.channel.sendMessage(":calendar_spiral: Now we're in September. The next month is October.");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$year")
    e.message.channel.sendMessage(":calendar_spiral: Now we're in 2017. The next year is 2018. 3 months left until 2018!");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$changelog")
    e.message.channel.sendMessage(":question: **BriciWorld Bot Change-Log (If you want to see all about BriciWorld Bot, type $aboutbot)** Removed Music from this bot, for some reasons, `$id` command is removed now (the rewritten bot will have it, maybe), and I have updated `$month` and `$year`. Hope you enjoy these changes! If you have some questions to send about these changes, contact **user** in DMs");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$botinfo")
    e.message.channel.sendMessage("```My name:``````My Discord tag:``````Is a bot? Of course!``````Online Time: 10:30 AM/0:30 AM GMT+3:00```");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$debug")
    e.message.channel.sendMessage("```OS:``````Node.js version:``````Bot engine: BriciWorld Bot Engine 1.2``````Created in: Discordie``````Hosting at: BW-Tech's main PC```");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$supportserver")
    e.message.channel.sendMessage("I know you need help with the bot, or you want to join our server. link");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "$fish")
    e.message.channel.sendMessage(":fish: **You flipped:** Normal fish ```Enjoy!```");
});