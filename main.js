var name = window.prompt("Welcome to what may be either your favorite dream or worst nightmare: The Zombie Apocalypse. Please state your name.");

window.alert("Welcome, " + name + ". Good luck!");
var role = window.prompt("Please select a character from the following options: Redneck, City Boy or Sheriff").toLowerCase();
var hasCharacter = false;
while (hasCharacter === false) {
    if (role === "redneck" || role === "city boy" || role === "sheriff") {
        hasCharacter = true;
    } else {
        role = window.prompt("Character not recognized.  Please select a character from the following options: Redneck, City Boy or Sheriff").toLowerCase();
    }
}
var character;
if (role === "redneck") {
    character = {
        health: 8,
        strength: 7,
        stealth: 4,
        weapon: "shotgun",
        weaponStrength: 8,
        speed: 6,
        favStore: "Fred's Dead Heads"
    };
} else if (role === "city boy") {
    character = {
        health: 5,
        strength: 3,
        stealth: 7,
        weapon: "hacky-sack",
        weaponStrength: 1,
        speed: 9,
        favStore: "Aeropostale"
    };
} else if (role === "sheriff") {
    character = {
        health: 9,
        strength: 8,
        stealth: 5,
        weapon: ".500 S&W",
        weaponStrength: 9,
        speed: 4,
        favStore: "Cabela's"
    };
}
var notDead = true;

var choice = window.prompt("You walk into " + character.favStore + ", knowing full well that there's nothing useful here - you just like to come here because you used to come here with friends.  You walk through the isles reminiscing of past times when, you guessed it, big ugly can suddenly be heard across the room, and he sounds hungry!  What will you do?  Choose run or fight.");
choice = choice.toLowerCase();

if (choice === "run") {
    if (character.speed >= 4) {
        window.alert("You make a break for it, and all that running from the cops finally pays off.  Big Ugly can't keep up and you continue on your way as soon as you feel safe.  ");
    } else {
        window.alert("You make a break for it, but Big Ugly is faster.  You always told your kids that the only thing worth running for was free food.  He must have heard that in his past life.  He might not know who you are, but he's closing in and you've got to do something fast.  As a last resort you pull out your" + character.weapon + " And let him have it.  He drops dead of course, and you continue on with your business.");
    }
} else if (choice === "fight") {
    if (character.weaponStrength >= 5) {
        window.alert("You pull out your " + character.weapon + " and let him have it.  He drops deader than he was before, of course, and you continue on with your business.");
    } else {
        window.alert("You pull out your" + character.weapon + " and let him have it.  He makes a sound as if he were laughing as he decends upon your face with a greedy grin.");
        notDead = false;
    }
}

if (notDead) {
    window.alert("Bored, and a little irritated that your fun got ruined by Big Ugly, you decide to check on the group of travelers that you've been watching for a couple of days.  They are set up on the opposite side of town, and you aren't sure what to think of them yet.");
    choice = window.prompt("You arrive to your lookout building and climb to the top.  As you look out over their camp, you are suprised at how quiet things are.  You see two or three people moving from car to car, but the rest are missing.  This worries you, but you decide its a good time to go check them out in person, and head back down the stairs. As you turn the corner to the last flight of stairs, you are greeted by, you guessed it, an entire platoon of zombies.  This day couldn't get any worse.  What will you do?  You can either fight it out, or run to the top of the building where you might be able to yell for help to the strangers camped out nearby.  Choose fight or yell.");
    choice = choice.toLowerCase();
    if (choice === "fight") {
        if (character.weaponStrength >= 5) {
            window.alert("You've got this.  You've fought off bigger, badder groups of zombies.  This won't even break a sweat.  You bring up your " + character.weapon + " take aim, and let loose.  You kill the zombie platoon, but also alert the strangers to your presence.  I guess we'll have to deal with them next.");
        } else {
            window.alert("You know your " + character.weapon + " won't cut it this time.  Looking around you notice a medium-sized wooden stick that you think you might be able to handle.  You grab it and take your first swing.  Unfortunately the stick breaks halfway through the platoon, leaving you with a dagger of a stick, if you can call it that. You fight for your life, but ultimately it resistance is futile.  The zombies make quick work of you, and you are seamlessly assimilated.");
            notDead = false;
        }
        
    } else {
        if (character.stealth < 5) {
            window.alert("You attempt to sneak back up the stairs but your cussing habit gets the best of you and you let rip a whole string of explatives that would make even your mean, backwoods, inbred mother blush.  The zombies come at you in full force due to the desparagin remarks you just made about their upbringing and parental figures.  You pull out your " + character.weapon + " and begin to pick them off.  There's no way you can get them all, however, they are already too close.  In your last moments you think about your mother.  Maybe she wasn't so bad afterall....");
            notDead = false;
            
        } else {
            window.alert("You quickly turn around and sneak upstairs, knowing that your only option is to get help from those people.  You arrive at the top floor and let out a ferocious yell, quickly bringing the attention of the strangers and the zombies right to you.  Luckily for you - for the first time in your life - things don't get worse yet, and the strangers come running to your aid.  They could use the help in their group, and you work as a team to fight off the zombies.");
        }
    }
}


if (notDead) {
    window.alert("You win!  Way to go!");
} else {
    window.alert("You are dee ee dee DED.  Better luck next time!");
}
                           



