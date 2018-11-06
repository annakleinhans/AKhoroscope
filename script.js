var signs = ["Aries", "Leo", "Sagittarius", "Taurus", "Virgo", "Capricorn", "Gemini", "Libra",
"Aquarius", "Cancer", "Scorpio", "Pisces", "You are such a prankster. The date entered does not exist."];

var horoscopes = [
    "Take on life with caution, your loved ones will appreciate you for it. If you're travelling, take in the environment around you to see if your personal philosphy can improve.",
    "Take your interests further by going to an event that peaks your curiosity. Compromise with your partner and be weary of taking on the problems of others.",
    "Opportunities to get ahead may present themselves today if you are assertive and motivated. Be weary of your promises, an empty promise will come back to hurt a loved one.",
    "Be wise about your financial situation, don't take unnecessary risks that will jeopordize your progress.",
    "The relationship you have right now could be the one. Keep things low key and don't escalate situations.",
    "Spend your time with someone who has been struggling lately, they could use your support. Your emotions are running on high, be cautious of bad decisions you may make in your personal life.",
    "Deal with an issue directly by going to the source for information. Use your networking to create new opportunities for yourself.",
    "Mixing business with pleasure is safe waters and may create new friendships and success.",
    "If you do face conflict, be prepared to suffer the consequences. Your words and actions will impact those around you heavily.",
    "You bad habit has decided it wants to leave you. Start the process in relieving yourself from the actions that make you feel guilty.",
    "Confrontation will eventually find you, even though you have been trying to avoid it. Use travel to form new valuable relationships.",
    "Seclude yourself and find a way to reflect on your actions. Do a puzzle or a mind game to get into the proper mental space."];

var images = ["images/aries.jpg", "images/leo.jpg", "images/sagittarius.jpg", "images/taurus.jpg", "images/virgo.jpg", "images/capricorn.jpg",
    "images/gemini.jpg", "images/libra.jpg", "images/aquarius.jpg", "images/cancer.jpg", "images/scorpio.jpg", "images/pisces.jpg"];

function start() {

    /* get the month and day from the page */
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    /* set a function equal to the findHoroscope function */
    var zodiac = findHoroscope(month,day);

    // var name = document.getElementById("Name").value;

    /* send the message and the zodiac back into the HTML page */
    document.getElementById("zodiac").innerHTML = signs[zodiac];
    document.getElementById("message").innerHTML = horoscopes[zodiac];
    document.getElementById("pictures").src=images[zodiac];
    //document.getElementById("pictures").src= images[zodiac];

    console.log(month);
    console.log(day);
    console.log(zodiac);
}

function findHoroscope(month,day) {
    /* aries */
    if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return 0;
    }

    /* leo */
    if ((month == 7 && day >= 23)|| (month == 8 && day <=22)){
        return 1;
    }

    /* sagittarius */
    if ((month == 11 && day >= 23 &&  day < 31) || (month == 12 && day <= 21)){
        return 2;
    }

    /* taurus */
    if ((month == 4 && day >=21 && day <31)|| (month == 5 && day <= 20)){
        return 3;
    }

    /* virgo */
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)){
        return 4;
    }

    /* capricorn */
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)){
        return 5;
    }

    /* gemini */
    if ((month == 5 && day >= 21 && day < 31) || (month == 6 && day <= 20)){
        return 6;
    }

    /* libra */
    if ((month == 9 && day >= 23 && day < 31) || (month == 10 && day <= 22)){
        return 7;
    }

    /* aquarius */
    if ((month == 1 && day >= 20)||(month == 2 && day <= 19)){
        return 8;
    }

    /* cancer */
    if ((month == 6 && day >= 21 && day < 31) || (month == 7 && day <= 22)){
        return 9;
    }

    /* scorpio */
    if ((month == 10 && day >= 23 && day < 31) || (month == 11 && day <= 22)){
        return 10;
    }


    /* pisces */
    if ((month == 2 && day >= 20) && (month == 2 && day <= 29) || (month == 3 && day <= 20)){
        return 11;
    }

    /* if none of them work */
    return 12;
}