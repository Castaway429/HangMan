var images = document.getElementsByClassName('letters');
const fillWithWord = document.getElementById("fillwithword");
const WrongGuesses = document.getElementById("incorrectguesses");
const SMImage = document.getElementById("SMan");

var rnumber = Math.floor(Math.random() * 11);
const words = ["cat", "dog", "bike", "hampster", "leek", "cool", "abyss", "awkward", "banjo", "bikini", "job"];
var valueatRandom = words[rnumber];

var DisplayWords = [];
var blank = "";

var phases = ["Phase1.PNG", "Phase2.PNG", "Phase3.PNG", "Phase4.PNG", "Phase5.PNG", "Phase6.PNG", "Phase7.PNG"];
var z = 0;

SMImage.src = "SManPhases/" + phases[z];

function win()
{
    alert("You win! Generating new word...");
    location.reload();
}

function lose()
{
    alert("Game Over! The word was " + valueatRandom + " ! Generating new word...");
    location.reload();
}

Array.prototype.forEach.call(valueatRandom, function(c){
    blank = " _ ";

    DisplayWords.push(blank)

    fillWithWord.innerHTML = DisplayWords.join(" ");

    console.log(valueatRandom);
    console.log(DisplayWords);

    return;

})

String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}

//Hide Letter (add to incorrect pile later)
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    var letter = this.alt;
    console.log(letter);

    if (valueatRandom.includes(letter) == true)
    {
        this.style.display = 'none';
        var rIndex = (valueatRandom.indexOf(letter));
    
    if (rIndex !== -1)
    {
        const indexes = [];

    for (let index = 0; index < valueatRandom.length; index++) {
        if (valueatRandom[index] === letter) {
            DisplayWords[index] = letter;
        }
    }

        fillWithWord.innerHTML = DisplayWords.join(" ");    
    }

    if (DisplayWords.join("") == valueatRandom)
    {   
        const WinTimeout = setTimeout(win, 1000);
    }
     
    } else 
    {
        z++;        
        SMImage.src = "SManPhases/" + phases[z];
       WrongGuesses.innerHTML += this.alt + ", ";  
        this.style.display = 'none';
        
    if (z == 6)
    {
        const LoseTimeout = setTimeout(lose, 1000);
    }

    }
   
  });
}

