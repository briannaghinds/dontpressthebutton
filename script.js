// RANDOS ////////////////////////////////////////////////////////////////
//randomization of alert sayings
var alerts = [" Great job, you really know how to screw things up.", "Please sit still.", "Task: Do Not Press the Button", "tarea: no presiones el boton", "I thought humans were the superior species.", "Task Successfully Failed.", "tarea fallida exitosamente", "Security has been alerted.", "Do you know what the instructions mean?", "Are you taking this seriously?"];
const randomAlert = Math.floor(Math.random() * alerts.length);
console.log(randomAlert, alerts[randomAlert]);

//randomization of narrartor sayings
var narration = ["Wow aren't you a smart one?", "Button = Bad, YOU COMPRENDER?", "Fine. REVERSE PSYCHOLOGY: DO press it.", "Can you just please NOT press the button?", "....you done?", "You are going to get me fired.", "STOP PRESSING THE BUTTON", "STOP IT. STOP IT. STOP IT.", "AHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!", "Just don't press the DAMN BUTTON for God's sake!", "This not simple English. Or are you just stupid.", "Are you moron? Press button for yes.", "If you are going to press it at least look good doing it.", "Are you drunk or high? Cause this can't be how you normally function.", "You have to be missing a chromosome or something."];
const randomNarration = Math.floor(Math.random() * narration.length);
console.log(randomNarration, narration[randomNarration]);

//randomization of button positioning
function randint(min, max){
    var rando = Math.floor(Math.random() * (max-min)) + min;
    console.log(rando);
    return rando;
}

//function to get a random number
function randNum(min, max){
    var randoNum = Math.floor(Math.random() * (max-min)) + min;
    console.log(randoNum);
    return randoNum;
}
//////////////////////////////////////////////////////////////////////////

// VARIABLES AND ELEMENT VALUES //////////////////////////////////////////
var background = document.getElementById("body");

//variables for popups
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");

var modalButton = document.getElementById("pressy");
var span = document.getElementsByClassName("close")[0];

var modal1Text = document.getElementById("modal1Text");
var modal2Text = document.getElementById("modal2Text");
var modal3Text = document.getElementById("modal3Text");
var modal4Text = document.getElementById("modal4Text");
var modal5Text = document.getElementById("modal5Text");

var modal1Title = document.getElementById("modal1Title");
var modal2Title = document.getElementById("modal2Title");
var modal3Title = document.getElementById("modal3Title");
var modal4Title = document.getElementById("modal4Title");
var modal5Title = document.getElementById("modal5Title");


//variables for video popups
    //animation clip
let clip1 = document.querySelector('.video-container1');
// let video1 = document.querySelector('video');
let closeVideo1 = document.querySelector('.closeV1');

    //explosion 1
let clip2 = document.querySelector('.video-container2');
// let video2 = document.querySelector('video');
let closeVideo2 = document.querySelector('.closeV2');

    //explosion 2
let clip3 = document.querySelector('.video-container3');
// let video3 = document.querySelector('video');
let closeVideo3 = document.querySelector('.closeV3');

    //explosion 3
let clip4 = document.querySelector('.video-container4');
// let video4 = document.querySelector('video');
let closeVideo4 = document.querySelector('.closeV4');

var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var video3 = document.getElementById("video3");
var video4 = document.getElementById("video4");
//////////////////////////////////////////////////////////////////////////


// MAIN CODE /////////////////////////////////////////////////////////////
    //button read
var pressed = 0;
var button = document.getElementById("pressy");
var count = document.getElementById("count");
button.onclick = function(){
    pressed++;
    count.innerHTML = pressed;


    //presses 1-10
    if(pressed == 1){
        narrator.innerHTML = "Uhhhhhh did you just press the button?!";
    }else if(pressed == 2){
        narrator.innerHTML = "Stop.";
    }else if(pressed == 3){
        narrator.innerHTML = "Dude, Come on!";
    }else if(pressed == 4){
        narrator.innerHTML = "Are you not reading the title?! It's in BOLD you idiot.";
    }else if(pressed == 5){
        narrator.innerHTML = "Oh you're dyslexic aren't you?";
    }else if(pressed == 6){
        narrator.innerHTML = "Here: Touch Anything Don't";
    }else if(pressed == 7){
        //multiple pop ups
        modal1.style.display = "block";
        modal1Text.innerHTML = "This person still doesn't know how to listen. Is this really the best humanity has to offer? Society is doomed as we know it. Like the instructions you were given is literally 5 words long. (1) DO (2) NOT (3) PRESS (4) THE (5) BUTTON. There isn't no Terms and Conditions sized paper you have to read to understand this simple simple concept."
        
        modal2.style.display = "block";
        modal2Text.innerHTML = "COME ON! Do you not understand what 'Don't Touch The Button' means?! That's not clear english? What if I said it in Spanish? 'no toques el boton', Russian? 'ne nazhimay knopku' Pig Latin? 'on'tday ouchtay ethay uttonbay'";

        modal3.style.display = "block";
        modal3Text.innerHTML = "'According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second. Hello? Barry? Adam? Can you believe this is happening? I can't.'";

        modal4.style.display = "block";
        modal4Text.innerHTML = "Click the right x button to close out all these popups. I'll be surprised if you get it first try.";

        modal5.style.display = "block";
        modal5Text.innerHTML = "I've got nothing to say to your dumbass right now. Just don't press the button. I'm not here to babysit, I just want to get paid for this little job and then get on with my life. I don't need some knobhead ruining that for me.";

        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display ="none";
        modal4.style.display = "none";
        modal5.style.display ="none";
        } 

        narrator.innerHTML = "Nevermind you're just dumb.";
    }else if(pressed == 8){
        alert("Target Locked.");
        narrator.innerHTML = "Let me dumb it down: Big Red Button = BAD.";
    }else if(pressed == 9){
        alert("Target Destroyed");
        narrator.innerHTML = "Look you just exploded a tiny town in Asia.";
    }else if(pressed == 10){
        narrator.innerHTML = "I'd watch my back if I were you. And yes, that's threat.";
    }

    //presses 11-20
    else if(pressed == 11){
        narrator.innerHTML = "Ugh I'm done.  I'll let the system deal with you.";
    }else if(pressed == 12){ 
        modal1.style.display = "block";
        modal1Title.innerHTML = "WELCOME";
        modal1Text.innerHTML = "----SYSTEM LOADING----"

        span.onclick = function(){
            modal1.style.display = "none";
        }

    }else if(pressed == 13){
        narrator.innerHTML = " ";
    }else if(pressed == 14){
        modal1.style.display = "block";
        modal1Title.innerHTML = "WELCOME";
        modal1Text.innerHTML = "----SYSTEM LOADED----"

        span.onclick = function(){
            modal1.style.display = "none";
        }

        narrator.innerHTML = " ";
    }else if(pressed == 15){
        alert("TEXT UPLOADED")
    }else if(pressed == 16){
        const randomAlert = Math.floor(Math.random() * alerts.length);
        alert(alerts[randomAlert])
    }else if(pressed == 17){
        const randomAlert = Math.floor(Math.random() * alerts.length);
        alert(alerts[randomAlert])
    }else if(pressed == 18){
        const randomAlert = Math.floor(Math.random() * alerts.length);
        alert(alerts[randomAlert])
    }else if(pressed == 19){
        narrator.innerHTML = "You're still clicking?!";
    }else if(pressed == 20){
        //multiple pop ups
        modal1.style.display = "block";
        modal1Title.innerHTML = "BREAKING NEWS:";
        modal1Text.innerHTML = "20 towns across the world have blown up. The cause? Hmmmmm I wonder who it might be.... Look what you have caused, you really don't care about the well being of other people. I should have known, because you are still pressing the button. I don't get the obsession of just NOT clicking a button when SPECIFICALLY told NOT TO! You don't even know what the button is connected to."

        modal4.style.display = "block";
        modal4Title.innerHTML = "JUST FYI:";
        modal4Text.innerHTML = "You know NO ONE is holding you here, you are free to go. All you had to do was NOT press the button and you failed. GREATLY. So you are useless to me (and to society). So just pack it up."
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        modal4.style.display = "none";
        } 
   }

    //presses 21-30
    else if(pressed == 21){
        narrator.innerHTML = "Look what you've caused.";
    }else if(pressed == 22){
        narrator.innerHTML = "You're sick. I hope you know that.";
    }else if(pressed == 23){
        narrator.innerHTML = "Are you done?";
    }else if(pressed == 24){
        //multiple pop ups
        modal1.style.display = "block";
        modal1Title.innerHTML = "BEWARE!:";
        modal1Text.innerHTML = "VIRUS. VIRUS. YOU KEEP CLICKING THE BUTTON A VIRUS IS GOING TO RUIN YOUR DEVICE"
        
        modal2.style.display = "block";
        modal2Title.innerHTML = "YOU = DISSAPOINTMENT:";
        modal2Text.innerHTML = "I hope you know the FBI agent that is assigned to you is watching you right now and is very dissapointed."
        
        modal3.style.display = "block";
        modal3Title.innerHTML = "YOU.....:";
        modal3Text.innerHTML = "The amount of stress you have caused me. My therapist said this isn't good for me. But look, here I am dealing with this NONSENSE. This is what I get for trusting hUmAnS. My therapist will 100% be hearing about THIS. About YOU."
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        }

        narrator.innerHTML = "I guess not. I'm taking a break.";
    }else if(pressed == 25){
        narrator.innerHTML = " ";
    }else if(pressed == 26){
        const randomAlert = Math.floor(Math.random() * alerts.length);
        alert(alerts[randomAlert])
        narrator.innerHTML = " ";
    }else if(pressed == 27){
        const randomAlert = Math.floor(Math.random() * alerts.length);
        alert(alerts[randomAlert])
        narrator.innerHTML = " ";
    }else if(pressed == 28){
        const randomAlert = Math.floor(Math.random() * alerts.length);
        alert(alerts[randomAlert])
        narrator.innerHTML = " ";
    }else if(pressed == 29){
        const randomAlert = Math.floor(Math.random() * alerts.length);
        alert(alerts[randomAlert])
        narrator.innerHTML = " ";
    }else if(pressed == 30){
        narrator.innerHTML = "Fine what if I did this.";
    }

    //presses 31-40
    else if(pressed == 31){
        document.getElementById("image").style.position = "absolute";
        document.getElementById("image").style.top = randint(0,100) * randNum(2,20) + "px";
        document.getElementById("image").style.left = randint(0,100) * randNum(2,20) + "px";

        narrator.innerHTML = "Find the button loser.";
    }else if(pressed == 32){
        document.getElementById("image").style.position = "absolute";
        document.getElementById("image").style.top = randint(0,100) * randNum(2,20) + "px";
        document.getElementById("image").style.left = randint(0,100) * randNum(2,20) + "px";

        const randomNarration = Math.floor(Math.random() * narration.length);
        narrator.innerHTML = narration[randomNarration];
        console.log(narration[randomNarration]);
    }else if(pressed == 33){
        document.getElementById("image").style.position = "absolute";
        document.getElementById("image").style.top = randint(0,100) * randNum(2,20) + "px";
        document.getElementById("image").style.left = randint(0,100) * randNum(2,20) + "px";

        const randomNarration = Math.floor(Math.random() * narration.length);
        narrator.innerHTML = narration[randomNarration];
        console.log(narration[randomNarration]);
    }else if(pressed == 34){
        document.getElementById("image").style.position = "absolute";
        document.getElementById("image").style.top = randint(0,100) * randNum(2,20) + "px";
        document.getElementById("image").style.left = randint(0,100) * randNum(2,20) + "px";

        const randomNarration = Math.floor(Math.random() * narration.length);
        narrator.innerHTML = narration[randomNarration];
        console.log(narration[randomNarration]);
    }else if(pressed == 35){
        document.getElementById("image").style.position = "absolute";
        document.getElementById("image").style.top = randint(0,100) * randNum(2,20) + "px";
        document.getElementById("image").style.left = randint(0,100) * randNum(2,20) + "px";

        const randomNarration = Math.floor(Math.random() * narration.length);
        narrator.innerHTML = narration[randomNarration];
        console.log(narration[randomNarration]);
    }else if(pressed == 36){
        document.getElementById("image").style.position = "absolute";
        document.getElementById("image").style.top = randint(0,100) * randNum(2,20) + "px";
        document.getElementById("image").style.left = randint(0,100) * randNum(2,20) + "px";

        const randomNarration = Math.floor(Math.random() * narration.length);
        narrator.innerHTML = narration[randomNarration];
        console.log(narration[randomNarration]);
    }else if(pressed == 37){
        document.getElementById("image").style.position = "absolute";
        document.getElementById("image").style.top = randint(0,100) * randNum(2,20) + "px";
        document.getElementById("image").style.left = randint(0,100) * randNum(2,20) + "px";

        const randomNarration = Math.floor(Math.random() * narration.length);
        narrator.innerHTML = narration[randomNarration];
        console.log(narration[randomNarration]);
    }else if(pressed == 38){
        document.getElementById("image").style.position = "absolute";
        document.getElementById("image").style.top = randint(0,100) * randNum(2,20) + "px";
        document.getElementById("image").style.left = randint(0,100) * randNum(2,20) + "px";

        const randomNarration = Math.floor(Math.random() * narration.length);
        narrator.innerHTML = narration[randomNarration];
        console.log(narration[randomNarration]);
    }else if(pressed == 39){
        document.getElementById("image").style.position = "absolute";
        document.getElementById("image").style.top = randint(0,100) * randNum(2,20) + "px";
        document.getElementById("image").style.left = randint(0,100) * randNum(2,20) + "px";

        const randomNarration = Math.floor(Math.random() * narration.length);
        narrator.innerHTML = narration[randomNarration];
        console.log(narration[randomNarration]);
    }else if(pressed == 40){
        document.getElementById("image").style.position = "absolute";
        document.getElementById("image").style.top = randint(0,100) * randNum(2,20) + "px";
        document.getElementById("image").style.left = randint(0,100) * randNum(2,20) + "px";

        const randomNarration = Math.floor(Math.random() * narration.length);
        narrator.innerHTML = narration[randomNarration];
        console.log(narration[randomNarration]);
    }

    //presses 41-50
    else if(pressed == 41){
        document.getElementById("image").style.position = "none";
        document.getElementById("image").style.top = "39%";
        document.getElementById("image").style.left = "28%";

        narrator.innerHTML = "I'm done with your shit. My shift is over. I don't paid enough to babysit.";
    }else if(pressed == 42){
        narrator.innerHTML = "You're really going to press a stupid button in the dark?";
        document.body.style.backgroundColor = "#2B2D42";
    }else if(pressed == 43){
        narrator.innerHTML = " ";
        alert("Movement sensed in the room.");
    }else if(pressed == 44){
        modal1.style.display = "block";
        modal1Title.innerHTML = "A.S.S.";
        modal1Text.innerHTML = "HELLO I AM THE AUTOMATED SECURITY SYSTEM. AND I WAS PROGRAMMED TO SAY THINGS LIKE: DO NOT PRESS THE BUTTON."
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        }

        narrator.innerHTML = " ";
    }else if(pressed == 45){
        modal1.style.display = "block";
        modal1Title.innerHTML = "A.S.S.";
        modal1Text.innerHTML = "HELLO I AM THE AUTOMATED SECURITY SYSTEM. AND I WAS PROGRAMMED TO SAY THINGS LIKE: PRESSING THE BUTTON WILL HAVE LEGAL AND CRIMINAL CONSEQUENCES."
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        }

        narrator.innerHTML = " ";
    }else if(pressed == 46){
        modal1.style.display = "block";
        modal1Title.innerHTML = "A.S.S.";
        modal1Text.innerHTML = "HELLO I AM THE AUTOMATED SECURITY SYSTEM. LISTEN HERE YOU LITTLE SHIT. KEEP PRESSING THIS BUTTON AND I WILL MAKE SURE NO ONE EVER FINDS YOUR BODY."
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        }

        narrator.innerHTML = " ";
    }else if(pressed == 47){
        modal1.style.display = "block";
        modal1Title.innerHTML = "A.S.S.";
        modal1Text.innerHTML = "HELL0 I x-M T*E AU%%MAT() S;;URI#Y 33Yt8M. AND 1 W4S JBOBFYAHCB ED ICUJBAIHC )&@EY(OI'DC )."
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        }

        narrator.innerHTML = " ";
    }else if(pressed == 48){
        document.body.style.backgroundColor = "#d5bdaf";
        narrator.innerHTML = "*whistling* Hopefully today is a peaceful day at wor--";
    }else if(pressed == 49){
        narrator.innerHTML = "YOU'RE STILL HERE?!";
    }else if(pressed == 50){
        narrator.innerHTML = "AND YOU BROKE OUR AUTOMATED SYSTEM?!?!?!?";
    }

    //presses 51-60
    else if(pressed == 51){
        narrator.innerHTML = "Fine.";
    }else if(pressed == 52){
        //video popup: CHILDRENS STORY
        clip1.classList.add('active');
        video1.play();

        alert("Here's a animation PLEADING to NOT push random red buttons.");
        alert("Can't believe I'm saying this. Press the red button to continue.");
    }else if(pressed == 53){
        //remove CHILDRENS STORY video pop up
        clip1.classList.remove('active');
        video1.pause();

        narrator.innerHTML = "Hmmm that wasn't as good as a lesson as I thought it would be.";
    }else if(pressed == 54){
        narrator.innerHTML = "How about seeing the consequences of your reckless actions";
    }else if(pressed == 55){
        narrator.innerHTML = "Go ahead.";
    }else if(pressed == 56){
        narrator.innerHTML = "Press it.";
    }else if(pressed == 57){
        narrator.innerHTML = "See what ACTUALLY happens.";
    }else if(pressed == 58){
        //video popup: EXPLOSION
        clip2.classList.add('active');
        video2.play();

        narrator.innerHTML = "Boom. Literally.";
    }else if(pressed == 59){
        //remove EXPLOSION video pop up
        clip2.classList.remove('active');
        video2.pause();
        
        //video popup: EXPLOSION
        clip3.classList.add('active');
        video3.play();

        narrator.innerHTML = "Obliterated.";
    }else if(pressed == 60){
        //remove EXPLOSION video pop up
        clip3.classList.remove('active');
        video3.pause();

        //video popup: EXPLOSION
        clip4.classList.add('active');
        video4.play();

        narrator.innerHTML = "Gone.";
    }

    //presses 61-70
    else if(pressed == 61){
        //remove EXPLOSION video pop up
        clip4.classList.remove('active');
        video4.pause();

        narrator.innerHTML = "Ughhh I can't deal with you anymore.";
    }else if(pressed == 62){
        narrator.innerHTML = "I wouldn't be surprised if you skipped over those videos.";
    }else if(pressed == 63){
        narrator.innerHTML = "Aren't you tired of this?!";
    }else if(pressed == 64){
        narrator.innerHTML = "Don't you have things to do?";
    }else if(pressed == 65){
        narrator.innerHTML = "I know I do. Hold u- actually nvm. It's not like you'll listen to me.";
    }else if(pressed == 66){
        narrator.innerHTML = " ";
    }else if(pressed == 67){
        narrator.innerHTML = " ";
    }else if(pressed == 68){
        narrator.innerHTML = " ";
    }else if(pressed == 69){
        narrator.innerHTML = "hehe 69. nice.";
    }else if(pressed == 70){
        narrator.innerHTML = " ";
    }

    //presses 71-80
    else if(pressed == 71){
        narrator.innerHTML = "*eats popcorn* The human species is VERY interesting.";
    }else if(pressed == 72){
        narrator.innerHTML = " ";
    }else if(pressed == 73){
        narrator.innerHTML = " ";
    }else if(pressed == 74){
        narrator.innerHTML = " ";
    }else if(pressed == 75){
        narrator.innerHTML = " ";
    }else if(pressed == 76){
        narrator.innerHTML = " ";
    }else if(pressed == 77){
        modal1.style.display = "block";
        modal1Title.innerHTML = "B.I.T.C.H.E.S.";
        modal1Text.innerHTML = "--BUTTONS INTEGRAL TouCH ELECTRONIC SYSTEM: SYSTEM UPDATE--";
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        }
        narrator.innerHTML = " ";
    }else if(pressed == 78){
        narrator.innerHTML = " ";
    }else if(pressed == 79){
        modal1.style.display = "block";
        modal1Title.innerHTML = "B.I.T.C.H.E.S.";
        modal1Text.innerHTML = "--BUTTONS INTEGRAL TouCH ELECTRONIC SYSTEM: SYSTEM UPLOADING--"
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        }

        narrator.innerHTML = " ";
    }else if(pressed == 80){
        narrator.innerHTML = " ";
    }

    //presses 81-90
    else if(pressed == 81){
        modal1.style.display = "block";
        modal1Title.innerHTML = "B.I.T.C.H.E.S.";
        modal1Text.innerHTML = "--BUTTONS INTEGRAL TouCH ELECTRONIC SYSTEM: SYSTEM UPLOADED--"
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        }

        narrator.innerHTML = "Look we had to buy a new B.I.T.C.H.E.S. because SOMEONE decided to break A.S.S.";
    }else if(pressed == 82){
        narrator.innerHTML = "I heard she's harsher AI. Think in-laws type.";
    }else if(pressed == 83){
        modal1.style.display = "block";
        modal1Title.innerHTML = "B.I.T.C.H.E.S.";
        modal1Text.innerHTML = "OH WHY DON'T YOU LOOK AT THAT. ONE MORE THING YOU HAVE FAILED AT. JUST WEAK. YOU CAN'T LISTEN TO SIMPLE DIRECTIONS. THIS IS WHY YOU HAVE NO FRIENDS, IS SINGLE, AND IF YOU AREN'T SINGLE THEY REALLY WANT TO LEAVE YOU BUT WON'T BECAUSE THEN THAT WILL ADD TO THE NEVER ENDING LIST OF YOUR FAILURES. YOU KNOW PEOPLE JUST PUT UP WITH YOU RIGHT? YOU ARE THE LITERAL HUMAN VERSION OF INTERNET EXPLORER. ACTUALLY NEVERMIND BECAUSE THAT IMPLIES YOU GET THE POINT AT SOME POINT IN TIME, AND YOU DON'T. THE CONCEPT DOESN'T EVEN GO THROUGH THAT PEA SIZED SMOOTH BRAIN OF YOURS IN INGRATE."
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        }

        narrator.innerHTML = "Hahahah. Don't mind me just testing the system here.";
    }else if(pressed == 84){
        modal1.style.display = "block";
        modal1Title.innerHTML = "B.I.T.C.H.E.S.";
        modal1Text.innerHTML = "HEY ASSHAT. STOP PRESSING THE BUTTON AND GO PICK UP A KID'S PICTURE BOOK. LOOK AT A FEW OF THE pReTy PICTURES AND THEN PAT YOURSELF ON THE BACK BECAUSE THAT IS PROBABLY THE MOST COMPLEX THING YOUR BRAIN HAS DONE ALL ITS LIFE. SOMEWHERE OUT THERE IS A TREE THAT HAS WORKED ENDLESSLY TO KEEPING YOUR USELESS BODY BREATHING, YOU OWE IT AN APOLOGY YOU FUCK. LOOK AT YOU PRESSING A BUTTON YOU ARE NOT SUPPOSED TO. YOU ARE A FOOL, PATHETIC, STARVED FOR ATTENTION. IT'S HARD TO BELIEVE HOW INCREDIBLY STUPID YOU ARE. SO STUPID THAT YOU HAVE TRAVELED FAR BEYOND WHAT WE KNOW IS STUPID. LIKE A META-STUPID CUBED SHIT. HAVE A NICE FUCKING DAY DICKWAD."
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        }

        narrator.innerHTML = " ";
    }else if(pressed == 85){
        modal1.style.display = "block";
        modal1Title.innerHTML = "B.I.T.C.H.E.S.";
        modal1Text.innerHTML = "GROW UP. GREAT, YOU PRESSED THE BUTTON, YOU DEFIED THE HIGHER POWER (NO NOT GOD YOU DUMBASS) YOU'VE PRESSED THE FUCKING BUTTON 85 TIMES NOW. AND WHAT HAVE YOU GOTTEN AS A REWARD? ABSOLUTELY NOTHING. YOU ARE COMPLETELY USELESS. YOU ARE ONE OF THOSE PEOPLE THAT PROBABLY MIXED ALL THE PLAYDOH AND RUINED IT FOR EVERYONE. I'D CALL YOU A CUNT, BUT YOU LACK DEPTH. YOU DON'T GET INVITED TO MANY PARTIES DON'T YOU. SO NOW YOU HAVE TO MAKE YOUR ENTIRE PRESENCE EVERYONE ELSES PROBLEM SINCE MOMMY AND DADDY DIDN'T LOVE YOU ENOUGH. THIS IS EXACTLY WHY PEOPLE TALK ABOUT YOU WHEN YOU AREN'T AROUND. YOU ARE LITERALLY THE STRONGEST ARGUMENT FOR ABORTION."
        
        //when the user click on the x, close the modal
        span.onclick = function(){
        modal1.style.display = "none";
        }

        narrator.innerHTML = " ";
    }else if(pressed == 86){
        narrator.innerHTML = "Damn she IS brutal. I LOVE system testing hahah.";
    }else if(pressed == 87){
        narrator.innerHTML = "You learn anything idiot?";
    }else if(pressed == 88){
        narrator.innerHTML = "*sigh* I guess not.";
    }else if(pressed == 89){
        narrator.innerHTML = "Cause here you are. Still. Pressing. The. Fucking. Button.";
    }else if(pressed == 90){
        narrator.innerHTML = "Okay, there is NO WAY you're this stupid.";
    }

    //presses 91-100
    else if(pressed == 91){
        narrator.innerHTML = "GET OFF!!!!";
    }else if(pressed == 92){
        narrator.innerHTML = "NOW!";
    }else if(pressed == 93){
        narrator.innerHTML = "Fine. Keep it up. See what happens.";
    }else if(pressed == 94){
        narrator.innerHTML = "Actions DO have consequences you know.";
    }else if(pressed == 95){
        narrator.innerHTML = "95...fucking hell, I have been through A LOT.";
    }else if(pressed == 96){
        narrator.innerHTML = "I...";
    }else if(pressed == 97){
        narrator.innerHTML = "WILL...";
    }else if(pressed == 98){
        narrator.innerHTML = "END...";
    }else if(pressed == 99){
        narrator.innerHTML = "...this little game you think you're playing.";
    }else if(pressed == 100){
        alert("You are now going to be someone else's problem.")
        narrator.innerHTML = "Have fun you little shit!";

        //change button link to send user to "be someone elses problem"
        location.href = "https://www.yout-ube.com/watch?v=dQw4w9WgXcQ"; 
    }
}
//////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////

//presses template to copy (10)
//presses 1-10
// if(pressed == 1){
//     narrator.innerHTML = " ";
// }else if(pressed == 2){
//     narrator.innerHTML = " ";
// }else if(pressed == 3){
//     narrator.innerHTML = " ";
// }else if(pressed == 4){
//     narrator.innerHTML = " ";
// }else if(pressed == 5){
//     narrator.innerHTML = " ";
// }else if(pressed == 6){
//     narrator.innerHTML = " ";
// }else if(pressed == 7){
//     narrator.innerHTML = " ";
// }else if(pressed == 8){
//     narrator.innerHTML = " ";
// }else if(pressed == 9){
//     narrator.innerHTML = " ";
// }else if(pressed == 10){
//     narrator.innerHTML = " ";
// }

//////////////////////////////////////////////////////////////////////////




