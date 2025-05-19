# Capstone Read Me Explenation
This document provides a detailed explanation on The Capstone Project. This webiste provides a galley for users to search and explorer using HTML, CSS, and JavaScript.
## Table of Contents
- [HTML Structure](#html-structure)
    - [Detailed HTML Explanation](#detailed-html-explanation)
-[CSS Styling](#css-styling)
    - [Key CSS Features](#key-css-features)
-[JavaScript Functionality](#javascript-functionality)
    -[Script File](#script-file)
    -[Render File](#render-file)
    -[Timer Script](#timer-script)

## Html Structure
The HTML Structure defines the user interface of the Capstone Project
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Tuffy:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body id="body">
            <header id="header">
                <h1>👾🤖Character Explorer 🐱‍🏍🐱‍👤</h1>
                <p> (Anime, Marvel, DC) </p>
                <button id="theme">Toggle Theme</button>
                <br>
                <nav>
                    <input type="text" placeholder="Search character..." id="searchInput">
                    <button>Search</button>
                </nav>
            </header>
            <div id="container">
            <div id="sub-container">
                <p>Search History</p>
                <p></p>
                <button id="clearButton">Clear Search</button>
                <br>
            </div>
            <div id="sub-container-2">
            <main  id="display" class="content">

            </main>
            </div>
        </div>
            <footer id="footer">
                <h2>Sumbit Character</h2>
                <section class="createCharacter">
                    <form id="form">
                        <div>
                            <label for="cname">Character Name:</label><br>
                            <input type="text" id="cname" name="cname" placeholder="Name..."><br>
                            <label for="show">What is the charcter in (Game, Movies, Shows, Book)</label><br>
                            <input type="text" id="show" name="show" placeholder="Show..."><br>
                            <label for="book">Where is the character orginally from (Anime, Book, Manga, Comic)</label><br>
                            <input type="text" id="book" name="book" placeholder="Book..."><br>
                            <label for="year">What year was the character created (Start-End)</label><br>
                            <input type="text" id="year" name="year" placeholder="(YYYY-YYYY)"><br>
                            <label for="occupation">What is the characters occupation</label><br>
                            <input type="text" id="occupation" name="occupation" placeholder="Occupation..."><br>
                        </div>
                        <div>
                            <label for="gender">What is the characters gender</label><br>
                            <input type="text" id="gender" name="gender" placeholder="Gender..."><br>
                            <label for="role">What is the characers role</label><br>
                            <input type="text" id="role" name="role" placeholder="Role..."><br>
                            <label for="bio">Write a summary of the character</label><br>
                            <textarea id="bio" name="bio" placeholder="Bio..."></textarea><br>
                            <label for="image">Submit a image</label><br>
                            <input type="file" id="image" name="image"><br>
                            <input type="submit" value="submit"><br>
                        </div>
                    </form>
                </section>
            </footer>
            <script src="script.js"></script>
            <script src="render.js"></script>
            <script src="timer.js"></script>
    </body>
    </html>
```
### Detailed HTML Explanation:
- A external link to change the fonts on the entire webpage
```html
<link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Tuffy:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```
- A external styles sheet to change the styles in the `head` section of the HTML document naned `styles.css`.
```html
<link rel="stylesheet" href="styles.css">
```
- `body` with an id named (`body`) to change the theme styles.
```html
<body id="body">
```
- A `header` tag which is used to define the (`header`) section of the webpage
```html
    <header id="header">
        <h1>👾🤖Character Explorer 🐱‍🏍🐱‍👤</h1>
        <p> (Anime, Marvel, DC) </p>
        <button id="theme">Toggle Theme</button>
        <br>
        <nav>
            <input type="text" placeholder="Search character..." id="searchInput">
            <button>Search</button>
        </nav>
    </header>
```
- `header` tag holds the "title", `button` "toggle theme", and the `nav` section.

- `container` holds both `sub-containers`'s. This holds where the gallery is going to be.
```html
<div id="container">
            <div id="sub-container">
                <p>Search History</p>
                <p></p>
                <button id="clearButton">Clear Search</button>
                <br>
            </div>
            <div id="sub-container-2">
            <main  id="display" class="content">

            </main>
            </div>
        </div>
```
- `footer` section holds the `form` section which allows you to add a charcter to the gallery.

## CSS Styling
The CSS Styling defines the visual apperance of the Capstone Project
```css
*{
    margin:0;
    font-family: "Tuffy", sans-serif;
    font-weight: 400;
    font-style: normal;
}
:root{
    --header-bg: white;
    --shadow:blue;
    --body-color: black;
    --body-bg:rgb(209, 209, 209);
    --button:lightgrey;
    --button-color:black;
    --button-hover:darkgrey;
    --button-hover-color:blue;
    --sub-container-bg:white;
    --sub-container-bg2:rgb(234, 234, 234);
    --footer-bg:white;
    --section-border:lightgrey;
    --select-bg:lightgrey;
    --select-color:darkslategrey;
    --select-hover-bg:darkgrey;
    --select-hover-color:blue;
    --select-active-bg:blue;
    --select-active-color:darkgrey;
    --card-bg:white;
}
.dark{
    --header-bg: rgb(58, 58, 58);
    --shadow:rgb(0, 157, 255);
    --body-color: white;
    --body-bg: rgb(36, 36, 36);
    --button:black;
    --button-color:white;
    --button-hover:white;
    --button-hover-color:rgb(0, 157, 255);
    --sub-container-bg:rgb(27, 27, 27);
    --sub-container-bg2:rgb(72, 72, 72);
    --footer-bg:rgb(58, 58, 58);
    --section-border:rgb(72, 72, 72);
    --select-bg:black;
    --select-color:white;
    --select-hover-bg:white;
    --select-hover-color:rgb(0, 157, 255);
    --select-active-bg:rgb(0, 157, 255);
    --select-active-color:white;
    --card-bg:lightgrey;
    
}
body{
    margin:0.5em;
    color: var(--body-color);
    background-color: var(--body-bg);
}
header{
    background-color: var(--header-bg); text-align:center;
    padding:0.5em;
    box-shadow: 3px 3px 3px var(--shadow);
    font-weight:bold;
}
header h1{
    margin-bottom:0;
}
header p{
    font-style: italic;
}
button{
    background-color: var(--button);
    color:var(--button-color);
    border:none;
    width:130px;
    height: 25px;
    border-radius: 100px;
}
button:hover{
    transition: ease-in 0.7s;
    background-color: var(--button-hover);
    color:var(--button-hover-color);
    font-weight: bold;
    cursor:grabbing;
}
header input{
    width:50vw;
    margin-top:1em;
}
#container{
    display:grid;
    grid-template-columns: 1fr 3fr;
    margin-top:0.5em;
}
#sub-container{
    height:450px;
    background-color:var(--sub-container-bg) ;
    text-align: center;
    box-shadow: 2px 5px 3px var(--shadow);
    overflow-x: scroll;
}
.content{
    display:flex;
    flex-wrap: wrap;
}
.character-card{
    display: flex;
    margin:1.2em;
    max-width:650px;
    color:black;
    height: 330px;
    text-align: center;
    background-color: var(--card-bg);
    box-shadow: 3px 5px 5px var(--shadow); 
    border-radius: 10px;
}
.character-card img{
    width:150px;
    height: 300px; 
    margin:1em;
    border-radius: 10px;
}
.character-info{
    overflow: scroll;
}
.character-info.hidden{
    display: none;
}
section{
    padding:0em;
    margin:0.5em;
}
select{
    background-color: var(--select-bg);
    color:var(--select-color);
}
select:hover{
    cursor:grabbing;
    transition:ease-in 0.25s;
    color:var(--select-hover-color);
    background-color: var(--select-hover-bg);
}
select:active{
    background-color: var(--select-active-bg);
    color: var(--select-active-color);
}
#sub-container-2{
    background-color: var(--sub-container-bg2);
    margin-left:0.5em;
    box-shadow: 3px 5px 5px var(--shadow);
    overflow-x: scroll;
    height:450px;
}
footer{
    box-shadow: 3px 3px 3px var(--shadow);
    background-color: var(--footer-bg);
    text-align: center;
    margin-top:1em;
    padding:1em;
}
form{
    display: flex;
    text-align: center;
    text-align: left;
    margin-left:4em;
}
form input{
    width:300px;
}
```
### Key CSS Features

- **Universal Styles**: A universal sign `*` used to create a specifc set of terms for the whold webpage.
```css
*{
    margin:0;
    font-family: "Tuffy", sans-serif;
    font-weight: 400;
    font-style: normal;
}
```
1.  Applies a specific `font-family`, `font-weight`, and `font-style`.
2.  Sets margin to 0.

 **Root Styles**: Uses `root` to create a specific set of colors for the `toggleTheme()` function.
```css
:root{
    --header-bg: white;
    --shadow:blue;
    --body-color: black;
    --body-bg:rgb(209, 209, 209);
    --button:lightgrey;
    --button-color:black;
    --button-hover:darkgrey;
    --button-hover-color:blue;
    --sub-container-bg:white;
    --sub-container-bg2:rgb(234, 234, 234);
    --footer-bg:white;
    --section-border:lightgrey;
    --select-bg:lightgrey;
    --select-color:darkslategrey;
    --select-hover-bg:darkgrey;
    --select-hover-color:blue;
    --select-active-bg:blue;
    --select-active-color:darkgrey;
    --card-bg:white;
}
.dark{
    --header-bg: rgb(58, 58, 58);
    --shadow:rgb(0, 157, 255);
    --body-color: white;
    --body-bg: rgb(36, 36, 36);
    --button:black;
    --button-color:white;
    --button-hover:white;
    --button-hover-color:rgb(0, 157, 255);
    --sub-container-bg:rgb(27, 27, 27);
    --sub-container-bg2:rgb(72, 72, 72);
    --footer-bg:rgb(58, 58, 58);
    --section-border:rgb(72, 72, 72);
    --select-bg:black;
    --select-color:white;
    --select-hover-bg:white;
    --select-hover-color:rgb(0, 157, 255);
    --select-active-bg:rgb(0, 157, 255);
    --select-active-color:white;
    --card-bg:lightgrey;
    
}
```

```css
body{
    margin:0.5em;
    color: var(--body-color);
    background-color: var(--body-bg);
}
```
- **Body Styles**: `body` sets the body `background-color` and `color` and set a `margin` of (0.5em),

```css
header{
    background-color: var(--header-bg); text-align:center;
    padding:0.5em;
    box-shadow: 3px 3px 3px var(--shadow);
    font-weight:bold;
}
header h1{
    margin-bottom:0;
}
header p{
    font-style: italic;
}
button{
    background-color: var(--button);
    color:var(--button-color);
    border:none;
    width:130px;
    height: 25px;
    border-radius: 100px;
}
button:hover{
    transition: ease-in 0.7s;
    background-color: var(--button-hover);
    color:var(--button-hover-color);
    font-weight: bold;
    cursor:grabbing;
}
header input{
    width:50vw;
    margin-top:1em;
}
```
- **Header Styles**: `header` styles is used to set the `background-color`, `color`, `padding`, and `box-shadow`. 
- Sets up the styles for the title (`h1`), (`p`) tag, `button` (`:hover`), and `input`.

```css
.content{
    display:flex;
    flex-wrap: wrap;
}
.character-card{
    display: flex;
    margin:1.2em;
    max-width:650px;
    color:black;
    height: 330px;
    text-align: center;
    background-color: var(--card-bg);
    box-shadow: 3px 5px 5px var(--shadow); 
    border-radius: 10px;
}
.character-card img{
    width:150px;
    height: 300px; 
    margin:1em;
    border-radius: 10px;
}
.character-info{
    overflow: scroll;
}
.character-info.hidden{
    display: none;
}
section{
    padding:0em;
    margin:0.5em;
}
#sub-container-2{
    background-color: var(--sub-container-bg2);
    margin-left:0.5em;
    box-shadow: 3px 5px 5px var(--shadow);
    overflow-x: scroll;
    height:450px;
}
```
- **Container Styles**: Sets the styles of `chracter-card` and sets how the boxs going to look setting the `width`, `height`, `color`, and `background-color`.
- Sets the `background-color`, `box-shadow`, and `height` for `sub-container` and `sub-container-2`.
## JavaScript Functionality
The JavaScript code handles all the dynamic behavior of the Task Manager
### Script File
Creates the `greetUser()` and the `toggleTheme()`.
```javascript
function greetUser(){
    const username = prompt("What is your name?");
    if (username === document.cookie.includes(`${username}`)){
        document.cookie = `visitedBefore = true`;
        const expireDate = new Date();
        expireDate.setDate(expireDate.getDate()+7);
        document.cookie = `visitedBefore = true; expires=${expireDate.toUTCString()}; path=/`;
        alert("👋Welcome back. we have missed you!!");
    }else{
            alert("Hello!! Welcome to Character Explorer 👋");
            document.cookie = `${username}`;
            const expireName = new Date();
            expireName.setDate(expireName.getDate()+30);
            document.cookie = `${username}; expires=${expireName.toUTCString()}; path=/`;
    }
    }
greetUser();

const themeBtn = document.getElementById('theme');

if(localStorage.getItem('theme') === "dark"){
    document.body.classList.add('dark')
}

themeBtn.addEventListener('click', toggleTheme)

function toggleTheme(){
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark')

    }else{

        localStorage.setItem('theme', 'light')
    }
}
```
1. **Function `greetUser()`**: this function asks the user their name and create a cookie using `document.cookie`, the function than sets an expiration date and greets the user with either "👋Welcome back. we have missed you!!" if they have visited or "Hello!! Welcome to Character Explorer 👋" if they have not.

```javascript
function greetUser(){
    const username = prompt("What is your name?");
    if (username === document.cookie.includes(`${username}`)){
        document.cookie = `visitedBefore = true`;
        const expireDate = new Date();
        expireDate.setDate(expireDate.getDate()+7);
        document.cookie = `visitedBefore = true; expires=${expireDate.toUTCString()}; path=/`;
        alert("👋Welcome back. we have missed you!!");
    }else{
            alert("Hello!! Welcome to Character Explorer 👋");
            document.cookie = `${username}`;
            const expireName = new Date();
            expireName.setDate(expireName.getDate()+30);
            document.cookie = `${username}; expires=${expireName.toUTCString()}; path=/`;
    }
    }
greetUser();
```
2. **Function `toggleTheme()`**:
```javascript
const themeBtn = document.getElementById('theme');

if(localStorage.getItem('theme') === "dark"){
    document.body.classList.add('dark')
}

themeBtn.addEventListener('click', toggleTheme)
```
Checks the `localStorage` on if the theme is `dark` or not.
```javascript
function toggleTheme(){
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark')

    }else{

        localStorage.setItem('theme', 'light')
    }
}
```
Uses the previous `eventListener` function and removes or adds `dark` theme.

### Render File:
This creates the `renderCharacters(characters)` function, `expandDiv(parent)` function, `initializeSearch()` function, `searchCharacters(searchTerm)` function, `saveSearchTerm(term)` function, and `addCharacter(event)` function. 
```javascript
const character=[
    {
        image:"obito.png",
        name:"Obito Uchiha",
        show:"Naruto, Naruto Shipudden",
        from:"Anime, Manga",
        year:"2000-2023",
        occupation:"Ninja",
        gender:"Male",
        role:"Villian",
        bio:"Obito Uchiha is a character from the Naruto anime and manga series created by Masashi Kishimoto. He was originally a kind-hearted and idealistic member of the Uchiha clan and a teammate of Kakashi Hatake and Rin Nohara under Minato Namikaze (the future Fourth Hokage). Obito was thought to have died during a mission, but he survived and was manipulated by the villain Madara Uchiha. After witnessing Rin’s death, Obito’s worldview changed drastically, and he adopted a darker path. He took on the identity of 'Tobi' and became one of the main antagonists, playing a key role in the Akatsuki organization and initiating the Fourth Great Ninja War. Despite his actions, Obito's story is ultimately one of tragedy and redemption. He realizes the consequences of his choices and sacrifices himself to help Naruto and the Allied Shinobi Forces defeat the true final enemy.",
    },
    {
        image:"2099.png",
        name:"Miguel O' Hara (Spiderman 2099)",
        show:"Spiderman Across the SpiderVerse, Lego Marvel SuperHeroes",
        from:"Comics, Movie",
        year:"1992-2025",
        occupation:"Superhero",
        gender:"Male",
        role:"Vigilante",
        bio:"Spider-Man 2099 is a version of Spider-Man from the future, the year 2099. His real name is Miguel O’Hara, and he is a scientist who works for a big company called Alchemax. After a science experiment goes wrong, he gains spider-like powers, similar to the original Spider-Man. Unlike Peter Parker, Miguel doesn’t have a spider-sense, but he has other cool powers like super strength, speed, sharp claws, and the ability to stick to walls. He also has fangs that can inject venom and glowing red eyes. Miguel becomes Spider-Man to fight against the corruption and crime in his high-tech future world, trying to make things better while also dealing with his own personal struggles.",
    },
    {
        image:"senku.png",
        name:"Ishigami Senku",
        show:"Dr. Stone",
        from:"Manga, Anime",
        year:"2017-2025",
        occupation:"Scientist",
        gender:"Male",
        role:"Protaganist",
        bio:"Senku Ishigami is the main protagonist of the manga and anime series Dr. Stone, created by Riichiro Inagaki and Boichi. He is a highly intelligent and resourceful young scientist with a passion for rebuilding and advancing human civilization, which was wiped out when a mysterious phenomenon turned all of humanity to stone statues. After being freed from his stone form, Senku embarks on a mission to use science to restore humanity to its former glory. With a deep understanding of various scientific fields, Senku is determined to bring back technology, from the simplest tools to complex inventions, and is known for his incredible scientific knowledge, problem-solving skills, and unshakable resolve. His goal is to build a society based on science, and he works tirelessly to achieve it, often clashing with those who prefer simpler or more primitive ways of life. His catchphrase, 'Science is the future!' reflects his unwavering belief in the power of science to overcome any obstacle.",
    },
    {
        image:"bluebettle.png",
        name:"Jaime Reyes(Blue Bettle)",
        show:"Blue Bettle, Injustice",
        from:"DC, Comics",
        year:"2006-2025",
        occupation:"Superhero",
        gender:"Male",
        role:"Protaganist",
        bio:"Jaime Reyes is the third incarnation of DC Comics' Blue Beetle, first introduced in 2006. He is a teenager from El Paso, Texas, who becomes the Blue Beetle after discovering an alien scarab that bonds with his spine, transforming him into a hero. The scarab gives Jaime a suit of alien armor with superhuman strength, the ability to generate weapons, and enhanced agility. Unlike previous Blue Beetles, Jaime's scarab is extraterrestrial in origin, and it has its own sentience. The character stands out for his cultural background, as he is of Mexican-American descent, and the stories often highlight themes of family and community. Jaime has been part of groups like the Teen Titans and the Justice League. His character was also featured in the 2023 Blue Beetle film, where he was portrayed as the first Latino superhero in the DC Extended Universe. Blue Beetle is recognized for its modern take on heroism, blending superhero action with cultural identity.",
    },
    {
        image:"joyboy.png",
        name:"Joy Boy",
        show:"One Piece",
        from:" Manga, metioned in Anime",
        year:"2011-2025",
        occupation:"Pirate",
        gender:"Male, Giant",
        role:"Viginate, Criminal, Leader",
        bio:"Joy Boy is a mysterious and pivotal figure in One Piece, whose full backstory is still being uncovered throughout the series. Here's a simple overview.Role in History: Joy Boy is a person from the distant past, likely connected to the Void Century, a period erased from history. He is closely associated with the legendary island of Raftel (now Laugh Tale) and the One Piece treasure. His connection to the island and its secrets is one of the key driving forces behind the story. The Promise: Joy Boy is best known for a failed promise to the residents of Fish-Man Island during the Void Century. He was supposed to bring something significant to the island, but he was unable to fulfill that promise. This failure left a lasting legacy. Inherited Will: While Joy Boy's actions and fate remain unclear, his will is believed to have been passed down to later generations. Most notably, it seems that Luffy, the main protagonist, is connected to Joy Boy, with Luffy's abilities and actions hinting that he may be the one to fulfill Joy Boy's long-awaited promise. Mystery: The true nature of Joy Boy’s identity, his goals, and his connection to the larger story of the One Piece world remains a central mystery. His role is integral to understanding the series' larger themes of freedom, the Void Century, and the mysteries surrounding the Ancient Kingdom. In short, Joy Boy is a figure wrapped in mystery, whose legacy is closely tied to Luffy’s journey and the secrets of the world."
    },
    {
        image:"beastboy.png",
        name:"Garfield Mark 'Gar' Logan",
        show:"Titans, Teen Titans, Doom Patrol, Teen Titans Go",
        from:"Marvel, Comics",
        year:"1965-2025",
        occupation:"Superhero",
        gender:"Mutant, Male",
        role:"Protaganist, Vigilante",
        bio:"Beast Boy, or Garfield Logan, is a superhero with the ability to shapeshift into any animal, gaining their abilities and traits. Known for his green skin and humorous, carefree personality, he is a key member of the Teen Titans. While often lighthearted, Beast Boy is fiercely loyal and will step up when his friends need him. He first appeared in Doom Patrol before joining the Teen Titans, where he continues to be a valuable and entertaining team member."
    },
    {
        image:"joker.png",
        name:"Jack Oswald (Joker) White",
        show:"Joker, Joker: Folie à Deux, Lego Batman, Suicide Squad, The Dark Knight",
        from:"DC, Comics",
        year:"1940-2025",
        occupation:"Criminal, Serial Killer, Abuser",
        gender:"Male",
        role:"Villian",
        bio:"The Joker is one of the most iconic and enduring villains in comic book history, primarily known as the arch-nemesis of Batman in the DC Universe. He first appeared in Batman #1 in 1940 and was created by Bill Finger, Bob Kane, and Jerry Robinson Character Traits: Appearance: Pale white skin, green hair, red lips, often seen wearing a purple suit and clown makeup. Personality: Chaotic, unpredictable, intelligent, and sadistic. He finds humor in pain and disorder. Motivation: Unlike many villains, the Joker often has no clear goal beyond creating chaos. He thrives on anarchy and sees life as a cruel joke. Backstory: The Joker’s origins vary across stories. One common version shows him as a failed comedian who falls into a vat of chemicals, which disfigures him and drives him insane. In Joker (2019), he's portrayed as Arthur Fleck, a mentally ill man pushed to the edge by society’s neglect. Notable Traits: Mastermind criminal with a flair for theatrics. Lacks empathy or remorse. Often uses fear, manipulation, and elaborate schemes. Cultural Impact: The Joker has been portrayed by several actors, including Heath Ledger, Joaquin Phoenix, Jack Nicholson, and Mark Hamill (voice). He represents the ultimate foil to Batman’s order and justice, embodying chaos and moral ambiguity.",
    },
    {
        image:"leonardo.png",
        name:"Hamato Leonardo",
        show:"Rise of TMNT, TMNT, Ninja Turtles: The Next Mutation, Mutant Turtles: Chōjin Densetsu Hen, Mutant Turtles: Superman Legend, Tales of the Teenage Mutant Ninja Turtles",
        from:"Comics",
        year:"1987-2025",
        occupation:"Ninja",
        gender:"Male",
        role:"Vigilante",
        bio:"Leonardo is the disciplined and courageous leader of the Teenage Mutant Ninja Turtles. Recognizable by his blue mask and twin katana swords, he is known for his strong sense of honor, responsibility, and loyalty to his brothers. Named after the Renaissance artist Leonardo da Vinci, he trains hard under Master Splinter and often struggles with the burden of leadership, but always strives to do what’s right. As the most serious of the team, Leonardo sets the tone in battle and keeps the group focused on their mission to protect the city.",
    },
    {
        image:"starfire.png",
        name:"Koriand'r (Starfire)",
        show:"Teen Titans, Titans, Teen Titans Go",
        from:"Comics, DC",
        year:"1980-2025",
        occupation:"Superhero",
        gender:"Female, Alien",
        role:"Protaganist, Team member",
        bio:"Starfire is a powerful superhero and a member of the Teen Titans. She comes from the alien planet Tamaran and is known for her super strength, flight, and the ability to shoot energy blasts (called starbolts) from her hands and eyes. Starfire has a kind heart, a joyful personality, and a deep curiosity about Earth and its culture. Despite her cheerful and sometimes naive nature, she is a fierce warrior with a tragic past—she was once a princess betrayed and enslaved before escaping to Earth. Her bright orange skin, long fiery red hair, and glowing green eyes make her visually striking. She’s also known for her close friendships with fellow Teen Titans, especially Robin, with whom she often shares a romantic connection.",
    },
    {
        image:"ghostspider.png",
        name:"Gwendolyn Maxine 'Gwen' Stacy",
        show:"Marvel Rising, Spiderman Across the Spider Verse, Spiderman into the Spider Verse",
        from:"Marvel, Comics",
        year:"1965-2025",
        occupation:"Superhero",
        gender:"Female",
        role:"Vigilante",
        bio:"Gwen Stacy is a major character in Marvel's Spider-Man comics and one of Peter Parker’s early love interests. She is depicted as a smart, kind, and independent young woman, often portrayed as the daughter of Captain George Stacy, a police officer in New York. Gwen’s most significant storyline is her tragic death at the hands of the Green Goblin in The Amazing Spider-Man #121 (1973), which marked a pivotal moment in Spider-Man’s life and in comic book history. Her death profoundly affected Peter Parker, shaping his journey and his approach to being Spider-Man. In addition to her role in Peter's life, Gwen has been featured in various alternate universes. In the Spider-Verse storyline, she becomes Spider-Woman (or Spider-Gwen) in a universe where she was bitten by the radioactive spider instead of Peter Parker, gaining similar powers and fighting crime as Spider-Woman.",
    },
    {
        image:"huey.png",
        name:"Huey R. Freeman",
        show:"The Boonducks",
        form:"Other, Adult Swim",
        year:"1999-2014",
        occupation:"Revolutionary",
        gender:"Male",
        role:"Vigilnate",
        bio:"Huey Freeman is the 10-year-old main protagonist of The Boondocks, a satirical comic strip and animated television series created by Aaron McGruder. He's an intelligent, politically conscious, and revolutionary-minded African-American boy who often critiques American society, culture, and politics. Key Traits: Highly intellectual – Huey is wise beyond his years, frequently quoting historical and political figures, and analyzing complex social issues. Revolutionary mindset – He admires black radicals like Malcolm X and Huey P. Newton (his namesake) and often calls out systemic racism, capitalism, and media manipulation. Mature and stoic – Huey rarely shows emotion and often serves as the moral and intellectual compass in contrast to the absurdity around him. Martial arts skills – He is also physically capable, trained in martial arts, and uses his skills when necessary. Role in The Boondocks: Huey acts as a social commentator within the show. Living with his younger brother Riley and their grandfather Robert “Granddad” Freeman in the predominantly white suburb of Woodcrest, Huey often finds himself frustrated by the ignorance and contradictions in both black and white communities. While others indulge in materialism or foolishness, Huey tries to spark awareness and revolution—even if no one listens.",
    },
    {
        image:"stevenu.png",
        name:"Steven Quartz Universe",
        show:"Steven Universe, Steven Universe Future, Steven Universe The Movie",
        from:"Disney, Cartoon Network",
        year:"2010-2020",
        occupation:"Superheroes",
        gender:"Male, Gem",
        role:"Protaganist",
        bio:"Steven Universe is the main protagonist of the animated television series Steven Universe, created by Rebecca Sugar and produced by Cartoon Network. The show follows Steven’s journey of self-discovery, emotional growth, and heroism in a world filled with alien beings known as the Gems. Background: Steven is the son of Greg Universe, a human, and Rose Quartz, a powerful Gem who gave up her physical form to bring Steven into the world. He inherits her gemstone in his navel and becomes part of the Crystal Gems, a group of rebels who protect Earth. The team includes Garnet, Amethyst, and Pearl, who all help raise and train him. Character Arc: Steven starts as a cheerful, naive kid eager to be a hero like the Crystal Gems. Over time, he matures emotionally and learns about the dark history of the Gem war, his mother’s controversial past as Rose Quartz (who was actually Pink Diamond), and the weight of inherited trauma. His journey shifts from fighting monsters to healing others—emotionally and literally. In Steven Universe Future, a sequel epilogue series, Steven struggles with his own trauma and identity after years of conflict resolution, showing the long-term effects of growing up too fast and being burdened with responsibility.",
    },
    {
        image:"harley.png",
        name:"Dr. Harleen Frances Quinzel",
        show:"Suicide Squad, Birds Of Prey, Suicide Squad 2, Harley Quinn, Injustice, Joker: Folie à Deux",
        from:"DC, Comics",
        year:"1992-2025",
        occupation:"Criminal, Theif",
        gender:"Female",
        role:"Villian, Superhero, AntiHero, Vigilante",
        bio:"Harley Quinn is a popular character from DC Comics. She was originally a psychiatrist named Dr. Harleen Quinzel, who fell in love with the Joker while treating him at Arkham Asylum. She eventually became his sidekick and adopted the name Harley Quinn. Story: Harley started as the Joker’s partner in crime, but over time she became her own independent character. She often teams up with other villains, like Poison Ivy (her close friend and sometimes romantic partner), and sometimes even acts as an anti-hero. In many versions of her story, Harley breaks free from the Joker’s abuse and finds her own path.",
    },
    {
        image:"loki.png",
        name:"Loki Laufeyson",
        show:"Loki, Thor, Thor Dark World, Thor Ragnorok, Avengers, Avenger",
        from:"Marvel, Comics",
        year:"1949-2025",
        occupation:"Magician, Terrorist",
        gender:"Male, God",
        role:"Manipulator, Male",
        bio:"Loki is a prominent character in the Marvel Universe, known for his complex personality and shifting roles as both villain and anti-hero. He is based on the Norse god of mischief and is portrayed in the Marvel Cinematic Universe (MCU) by Tom Hiddleston. Story Arc in the MCU: Starts as the antagonist in Thor (2011) and The Avengers (2012), trying to rule Earth. Evolves into a more sympathetic figure in later films, notably in Thor: Ragnarok (2017) and Avengers: Infinity War (2018), where he dies heroically. A variant version of Loki escapes with the Tesseract in Avengers: Endgame (2019), leading to the Disney+ series Loki (2021–2023), where he confronts themes of fate, identity, and free will. In the Loki Series: Captured by the Time Variance Authority (TVA). Learns about the multiverse and timelines. Encounters variants of himself, including Sylvie, a female Loki. Ends Season 2 as the God of Stories, overseeing the multiverse, symbolizing his ultimate transformation from chaos to protector of order.",
    },
    {
        image:"okuran.png",
        name:"Ken 'Okuran' Takakura",
        show:"Dan da dan",
        from:"Anime, Manga",
        year:"2024-2025",
        occupation:"Highschool student, Exorcist",
        gender:"Male",
        role:"Protaganist",
        bio:"Okuran is a central character in the manga Dandadan, known for his reserved demeanor and deep interest in the supernatural. Initially skeptical of ghosts and spirits but a firm believer in aliens, Okuran contrasts with his classmate Momo Ayase, who believes in ghosts but not aliens. After a strange encounter involving both supernatural and extraterrestrial forces, Okuran gains psychic powers, specifically telekinesis, which he uses to battle bizarre and often dangerous entities. Despite his shy and introverted nature, Okuran shows courage and loyalty, especially when protecting Momo and their friends from otherworldly threats. As the story progresses, Okuran becomes more confident and involved in the increasingly chaotic and bizarre events surrounding their lives. His growing friendship—and possible romantic tension—with Momo adds emotional depth to the fast-paced, comedic, and action-heavy plot. Okuran’s character development is driven by his willingness to face the unknown, his desire to understand the mysteries that threaten their world, and his unspoken care for those around him. His journey from a quiet outcast to a key fighter against the paranormal highlights the series' blend of supernatural intrigue, humor, and heartfelt character moments.",
    },
    {
        image:"flash.png",
        name:"Bartholomew Henry 'Barry' Allen",
        show:"The Flash, Arrow, Supergirl, DC Lengends of Tomorrow, Justice League, Flash",
        from:"DC, Comics",
        year:"2014-2025",
        occupation:"Superheros",
        gender:"Male, Metahuman",
        role:"Protaganist",
        bio:"The Flash is a superhero from DC Comics known for his super speed and strong sense of justice. Multiple characters have taken on the mantle, but the most well-known is Barry Allen, a forensic scientist who gained his powers after a lightning strike caused a chemical explosion in his lab. With the ability to move at incredible speeds, Barry becomes the Scarlet Speedster, using his powers to protect Central City and the broader world from criminals, metahumans, and time-altering threats. His connection to the Speed Force, a mysterious energy field, grants him abilities beyond just speed, including time travel and dimension-hopping. Throughout his stories, The Flash often explores themes of heroism, responsibility, and the consequences of tampering with time. Barry's personal life—especially his relationships with his family, love interest Iris West, and his fellow heroes in the Justice League—adds emotional weight to his fast-paced adventures. Whether racing to save lives or confronting powerful villains like Reverse-Flash and Zoom, The Flash represents hope, resilience, and the belief that even in the face of tragedy, one can run toward a better future.",
    },
    {
        image:"luz.png",
        name:"Luz Noceda",
        show:"The Owl House",
        from:"Disney, Disney XD",
        year:"2020-2023",
        occupation:"Witch, Magic User, Palismen Tamer",
        gender:"Female",
        role:"Protaganist",
        bio:"Luz Noceda is the main protagonist of The Owl House, a fantasy-animated series created by Dana Terrace. A quirky, imaginative teenager from the human world, Luz feels out of place in her everyday life due to her love for fantasy, magic, and creativity. Her life changes when she accidentally stumbles into the Boiling Isles, a magical realm inhabited by witches, demons, and strange creatures. There, she becomes the apprentice of the rebellious witch Eda Clawthorne and befriends King, a tiny creature who claims to be the King of Demons. Though Luz has no natural magical ability, she learns to cast spells using glyphs and quickly becomes a determined, clever, and kindhearted force in this new world. As the series progresses, Luz grows not only in magical skill but also in confidence, empathy, and self-understanding. She plays a key role in resisting Emperor Belos's authoritarian regime and protecting her found family and the Boiling Isles from various threats. Her journey also explores themes of identity, neurodivergence, and belonging, especially as she navigates her feelings for her girlfriend, Amity Blight. Luz’s courage and love for others ultimately make her a hero not through power alone, but through her unwavering belief in doing what’s right and being true to herself.",
    },
    {
        image:"fin.png",
        name:"Finn Campbell Mertens",
        show:"Adventure Time, Adventure Time: Distant Lands",
        from:"Disney, Cartoon Network",
        year:"2007-2021",
        occupation:"Adventurer, Fighter, SuperHero",
        gender:"Male",
        role:"Protaganist",
        bio:"Finn the Human is the courageous and adventurous main protagonist of Adventure Time, a surreal animated series created by Pendleton Ward. As the last known human in the Land of Ooo, Finn is a fearless hero who dedicates his life to helping others and fighting evil alongside his magical dog brother and best friend, Jake. Armed with a strong moral compass, a variety of swords, and an unshakable sense of justice, Finn embraces danger head-on, often acting impulsively but with good intentions. Throughout the series, he takes on quests that pit him against monsters, powerful villains like the Ice King, and even abstract concepts like fear and loneliness. As Adventure Time progresses, Finn matures from an enthusiastic boy into a thoughtful young man. His emotional growth is central to the story, as he navigates complex relationships, heartbreak, questions about identity, and the mystery of his human origins. Through loss, love, and self-discovery, Finn evolves into a more compassionate and introspective character, while never losing his heroic spirit and desire to do good. His journey reflects the show's deeper themes of growing up, the nature of existence, and the importance of friendship and forgiveness in a strange and ever-changing world.",
    },
    {
        image:"asta.png",
        name:"Asta Staria",
        show:"Black Clover, Black Clover-Sword of the Wizard King",
        from:"Anime, Manga",
        year:"2014-2025",
        occupation:"Swordsman, Magic Knight, Devil User",
        gender:"Male",
        role:"Protaganist",
        bio:"Asta is the energetic and determined main protagonist of Black Clover, a fantasy anime and manga series created by Yūki Tabata. Born without any magical power in a world where magic determines one’s status, Asta dreams of becoming the Wizard King—the strongest mage in the Clover Kingdom. Despite his lack of magic, he refuses to give up and trains his body relentlessly. His life changes when he receives a rare five-leaf clover grimoire, granting him the ability to wield Anti-Magic swords that nullify other spells. Alongside his rival and childhood friend Yuno, a prodigy blessed with immense magic, Asta joins the Black Bulls, a squad of misfits, to pursue his goal. Throughout the series, Asta's unwavering optimism, resilience, and refusal to give in to despair inspire those around him, earning him respect from allies and enemies alike. He confronts powerful foes, uncovers the secrets of his Anti-Magic powers, and forms strong bonds with his comrades in the Black Bulls. As the world faces growing threats from devils, rogue mages, and political conflict, Asta emerges as a key figure in protecting the Clover Kingdom. His journey is one of grit, perseverance, and defying limitations, proving that even someone born without magic can rise to greatness through sheer will and heart.",
    },
    {
        image:"tanjiro.png",
        name:"Tanjiro Kamado",
        show:"Demon Slayer",
        from:"Anime, Manga",
        year:"2016-2025",
        occupation:"Swordsman",
        gender:"Male",
        role:"Protaganist",
        bio:"Tanjiro Kamado is the kind-hearted and determined protagonist of Demon Slayer: Kimetsu no Yaiba, a dark fantasy anime and manga series created by Koyoharu Gotouge. He begins as a gentle boy living a peaceful life with his family, but his world is shattered when demons slaughter his loved ones, leaving only his younger sister Nezuko alive—transformed into a demon herself. Vowing to avenge his family and find a cure for Nezuko, Tanjiro joins the Demon Slayer Corps, a group dedicated to eradicating demons. Armed with his keen sense of smell, swordsmanship skills, and Water Breathing techniques, he takes on deadly missions to protect humanity. As the story unfolds, Tanjiro’s unwavering compassion and moral clarity set him apart, even in the face of unimaginable cruelty and violence. He seeks to understand his enemies, often showing empathy toward demons' tragic pasts while never hesitating to stop their evil actions. With each battle, he grows stronger—eventually learning the powerful Sun Breathing technique and playing a central role in the fight against Muzan Kibutsuji, the progenitor of all demons. Tanjiro’s journey is a moving tale of love, sacrifice, resilience, and the hope of restoring what was lost, making him a deeply admired hero in the world of anime and manga.",
    },
    {
        image:"shinra.png",
        name:"Shinra Kusakabe",
        show:"Fire Force",
        from:"Anime, Manga",
        year:"2016-2025",
        occupation:"Firefighter, Exorcist",
        gender:"Male, Pyrokenetic",
        role:"Protaganist",
        bio:"Shinra Kusakabe is the fiery protagonist of Fire Force (En'en no Shōbōtai), a supernatural action manga and anime series created by Atsushi Ōkubo. Nicknamed the 'Devil's Footprints' for his ability to ignite his feet at will and move at blazing speeds, Shinra is a Third Generation pyrokinetic who joins Special Fire Force Company 8. Haunted by a tragic past where his mother and younger brother were presumed killed in a mysterious fire, Shinra is determined to become a hero who saves people from spontaneous human combustion—a phenomenon that turns people into destructive Infernals. Despite being misunderstood for his unnerving smile, he is brave, loyal, and driven by a deep desire to protect others. As Shinra uncovers the truth behind the fire that destroyed his family, he finds himself entangled in a vast conspiracy involving the Evangelist, a cult seeking to plunge the world into chaos. Throughout his journey, Shinra’s powers evolve as he taps into Adolla Burst, a mysterious and powerful flame linked to another dimension. His bonds with his fellow firefighters and his unwavering resolve to bring hope to a burning world make him a beacon of light in a dark, chaotic society. Shinra's story is one of perseverance, uncovering hidden truths, and fighting for justice in a world threatened by fire and fanaticism.",
    },
    {
        image:"superman.png",
        name:"Clark Joseph Kent/ Kal-el",
        show:"Man of Steal, Justice League",
        from:"DC, Comics",
        year:"1938-2025",
        occupation:"Reporter, Superhero",
        gender:"Male, Alien",
        role:"Protaganist",
        bio:"Superman is a fictional superhero created by Jerry Siegel and Joe Shuster, first appearing in Action Comics #1 in 1938. He is one of the most iconic and enduring characters in popular culture. Born as Kal-El on the doomed planet Krypton, he was sent to Earth as a baby by his parents to escape the planet’s destruction. Raised by the Kent family in the small town of Smallville, he grew up as Clark Kent, discovering his superhuman powers including flight, super strength, x-ray vision, and invulnerability. As an adult, he works as a reporter for the Daily Planet in Metropolis, using his alter ego Superman to fight evil and uphold truth and justice. Superman’s stories often explore themes of identity, morality, and the immigrant experience, portraying him as a symbol of hope and integrity. He frequently battles powerful villains like Lex Luthor, General Zod, and Doomsday, while also navigating his dual life as both a human and alien. Over the decades, Superman has appeared in countless comic books, television series, films, and video games, becoming a foundational figure in the superhero genre and a beacon of heroism for generations.",
    },
    {
        image:"batman.png",
        name:"Bruce Thomas Wayne",
        show:"Batman, Justice League, Batman Begins, Batman Returns, The Dark Knight",
        from:"DC, Comics",
        year:"1939-2025",
        occupation:"Philanthropist, Business Owner",
        gender:"Male",
        role:"Vigilante, Anti-Hero",
        bio:"Batman is a fictional superhero created by Bob Kane and Bill Finger, first appearing in Detective Comics #27 in 1939. Unlike many superheroes, Batman has no superpowers; instead, he relies on his intelligence, physical prowess, detective skills, and advanced technology. Born Bruce Wayne, he witnessed the murder of his parents as a child, an event that drove him to dedicate his life to fighting crime. Operating in the dark, crime-ridden city of Gotham, he adopts the persona of Batman to strike fear into criminals and protect the innocent. Batman’s stories often delve into themes of justice, vengeance, and duality. By day, he is a billionaire philanthropist and CEO of Wayne Enterprises, while by night, he takes on Gotham’s most dangerous villains, including the Joker, Two-Face, and the Riddler. Aided by allies like Alfred Pennyworth, Robin, and Commissioner Gordon, Batman works outside the law to uphold it. His complex character, moral code, and dark, brooding nature have made him one of the most compelling and influential figures in comic book history.",
    },
    {
        image:"batmanwholaughs.png",
        name:"Bruce Thomas Wayne",
        show:"Dark Multiverse",
        from:"DC, Comics",
        year:"2017-2025",
        occupation:"Murderer",
        gender:"Male, Corrupeted Human",
        role:"Villian",
        bio:"The Batman Who Laughs is a dark and twisted version of Batman from the DC Comics multiverse, first introduced in Dark Days: The Casting (2017) and fully appearing in Dark Nights: Metal. Originating from Earth -22, he is a version of Bruce Wayne who was infected by the Joker's toxin after killing him. The toxin transformed him into a hybrid of Batman's intellect and the Joker's madness, stripping away Bruce's moral code and turning him into a sadistic villain. As the Batman Who Laughs, he retains all of Batman’s strategic brilliance and combat skills, but with the Joker’s chaotic, homicidal mindset, making him one of the most dangerous beings in the multiverse. This character represents the ultimate corruption of Batman’s ideals and showcases what happens when his greatest enemy's influence takes root in his psyche. The Batman Who Laughs leads a group of other dark versions of Batman from the multiverse, collectively known as the Dark Knights, under the service of the cosmic villain Barbatos. His goal is to plunge the multiverse into darkness, believing that only through fear and control can true order be achieved. His terrifying blend of logic and insanity makes him a formidable threat to the Justice League and a symbol of how even the most noble heroes can fall when pushed past their limits.",
    },
    {
        image:"shigaraki.png",
        name:"Tenko Shimura",
        show:"My Hero Academia",
        from:"Anime, Manga",
        year:"2014-2025",
        occupation:"Terrorist, Murderer",
        gender:"Male, Quirk User",
        role:"Villian",
        bio:"Tomura Shigaraki is a central antagonist in the anime and manga series My Hero Academia, created by Kōhei Horikoshi. Born Tenko Shimura, he is the grandson of Nana Shimura, a former wielder of the powerful Quirk One For All. After a traumatic childhood marked by the accidental destruction of his family due to his uncontrollable Quirk, Decay, he was manipulated and taken in by the villain All For One. Under his new name, Tomura Shigaraki, he became the leader of the League of Villains, a group determined to overthrow the hero-dominated society and reshape the world in chaos and destruction. As the series progresses, Shigaraki evolves from a petulant and unstable antagonist into a calculated and terrifying threat. He undergoes a transformation both physically and mentally, enhancing his Decay Quirk and merging with All For One’s power and ideology. This evolution positions him as a near-unstoppable force capable of challenging even the strongest heroes, including the next generation led by Izuku Midoriya. Shigaraki’s character embodies the consequences of a broken society and the dangers of neglect, making him a tragic yet compelling villain who blurs the line between victim and monster.",
    },
    {
        image:"miles.png",
        name:"Miles Gonzalo Morales",
        show:"Spiderman into the SpiderVerse, Spiderman across the SpiderVerse",
        from:"Marvel, Comics",
        year:"2011-2025",
        occupation:"Highschool Student, Superhero",
        gender:"Male",
        role:"Protaganist",
        bio:"Miles Morales is a fictional superhero in the Marvel Comics universe, first introduced in Ultimate Fallout #4 in 2011. Created by writer Brian Michael Bendis and artist Sara Pichelli, Miles is a teenager of African-American and Puerto Rican descent living in Brooklyn. After the death of his universe’s Peter Parker, Miles gains spider-like powers from a genetically altered spider and eventually takes up the mantle of Spider-Man. His abilities include classic powers like wall-crawling and enhanced agility, as well as unique ones such as camouflage and a venom strike that can paralyze enemies. Miles’ story explores themes of identity, legacy, and responsibility, as he struggles to live up to Peter Parker’s example while forging his own path. Balancing his superhero duties with school, family, and friendships, Miles represents a fresh, diverse perspective within the Spider-Man legacy. He has become a beloved character across comics, animation, and video games, especially following the success of Spider-Man: Into the Spider-Verse, where his journey resonated with audiences around the world. Miles Morales stands as a symbol of empowerment and the idea that anyone, regardless of background, can be a hero.",
    },
    {
        image:"deku.png",
        name:"Izuku Midoriya",
        show:"My Hero Academia, My Hero Academia Two Heroes, My Hero Academia Heroes Rising, My Hero Academia World Mission, My Hero Academia Your Next",
        from:"Anime, Manga",
        year:"2014-2025",
        occupation:"HighSchool Student, Superhero",
        gender:"Male",
        role:"Protaganist",
        bio:"Deku, whose real name is Izuku Midoriya, is the main protagonist of the anime and manga series My Hero Academia, created by Kōhei Horikoshi. Born in a world where nearly everyone has superpowers known as Quirks, Izuku starts out powerless but dreams of becoming a great hero like his idol, All Might. His life changes when All Might recognizes his courage and selflessness, choosing him as the successor to the powerful Quirk 'One For All.' After inheriting this ability, Izuku enrolls at U.A. High School, where he trains to become a professional hero while learning to control and master his new powers. Throughout the series, Deku grows from a timid and analytical fanboy into a determined and courageous leader. His journey is marked by intense training, battles against villains, and moral dilemmas that test his values and character. Despite overwhelming odds, he continues to embody the spirit of true heroism—protecting others even at great personal cost. Deku’s evolution reflects core themes of perseverance, self-belief, and the weight of responsibility, making him an inspiring and relatable character in modern shonen storytelling.",
    },
    {
        image:"ivy.png",
        name:"Dr. Pamela Lillian Isley, PhD",
        show:"Harley Quinn, Injustice",
        from:"DC, Comics",
        year:"1992-2025",
        occupation:"Plant User, Criminal, Poison User",
        gender:"Female",
        role:"Villian",
        bio:"Poison Ivy, aka Dr. Pamela Isley, is a fictional supervillain and antihero in the DC Comics universe, first appearing in Batman #181 in 1966. A brilliant botanist, Pamela Isley was transformed into Poison Ivy after being poisoned by a combination of toxins, which gave her the ability to control plants and exude deadly pheromones. With her newfound powers, she becomes an eco-terrorist, using her abilities to manipulate plants and toxins to achieve her goals. Though often depicted as an adversary to Batman, Ivy's motivations are more complex, as she views her actions as a means of protecting the environment and punishing those who harm nature. Over time, Poison Ivy's character has evolved from a straightforward villain into a more nuanced figure, at times acting as an antihero. She is often portrayed as deeply connected to nature and has a strong sense of moral outrage about the destruction of the planet. In various storylines, Ivy has allied with characters like Harley Quinn and even fought alongside Batman when their interests align. Her complex relationship with environmentalism, her tragic backstory, and her unpredictable nature make her one of Gotham's most compelling and multifaceted characters, balancing between villainy and moments of unexpected compassion.",
    },
    {
        image:"ben.png",
        name:"Benjamin Kirby 'Ben' Tennyson",
        show:"Ben 10, Ben 10 Ultimate Alien, Ben 10 Ominverse, Ben 10 Alien Force",
        from:"Disney, Cartoon Network",
        year:"2005-2025",
        occupation:"Superhero",
        gender:"Male",
        role:"Protaganist",
        bio:"Ben 10 is a popular animated series created by 'Man of Action' and produced by Cartoon Network, first airing in 2005. The show follows Ben Tennyson, a young boy who discovers a mysterious alien device called the Omnitrix while on a summer vacation with his grandfather Max and cousin Gwen. The Omnitrix attaches itself to Ben's wrist and gives him the ability to transform into ten different alien species, each with unique powers. As Ben embarks on various adventures, he battles villains, saves the world, and learns valuable lessons about responsibility, courage, and the importance of teamwork. Throughout the series, Ben grows from a somewhat immature and self-centered kid into a more heroic and thoughtful young man. While the show primarily focuses on Ben’s adventures and his use of the Omnitrix, it also delves into the relationships he shares with his family and the challenges that come with wielding such incredible power. Over time, Ben faces increasingly powerful threats, including alien invaders and dangerous criminals, but his core belief in doing the right thing and protecting those he cares about remains steadfast. Ben 10 has spawned numerous sequels, spin-offs, and adaptations, making it a beloved and enduring franchise for fans of all ages.",
    },
    {
        image:"dipper.png",
        name:"Mason 'Dipper' Pines",
        show:"Gravity Falls",
        from:"Disney, Disney XD",
        year:"1999-2025",
        occupation:"Adventure",
        gender:"Male",
        role:"Protaganist",
        bio:"Dipper Pines is one of the main characters in the animated series Gravity Falls, created by Alex Hirsch. He is a curious and intelligent 12-year-old boy who, along with his twin sister Mabel, is sent to spend the summer with their great-uncle Stan in the mysterious town of Gravity Falls. Dipper is highly analytical, often serving as the more serious and cautious counterpart to Mabel’s free-spirited nature. His inquisitive personality and thirst for adventure lead him to uncover the supernatural secrets hidden in the town, with his primary tool being a mysterious journal he finds, which details the strange occurrences in Gravity Falls. As the series progresses, Dipper becomes increasingly involved in solving the mysteries of the town, particularly surrounding the enigmatic figures and supernatural events that seem to plague it. His journey is filled with growth, as he learns to balance his desire for answers with the importance of family and personal connections. While initially struggling with self-doubt and the desire to prove himself, Dipper matures over the course of the series, taking on more responsibility and facing the challenges of both the supernatural world and adolescence. His intellectual nature, bravery, and determination make him a standout character in Gravity Falls, earning him a dedicated fan following.",
    },
    {
        image:"yuji.png",
        name:"Yuji Itadori",
        show:"Jujutsu Kaisen",
        from:"Anime, Manga",
        year:"2018-2025",
        occupation:"Sorcerer, Highschool student",
        gender:"Male",
        role:"Protaganist",
    },
    {
        image:"toji.png",
        name:"Toji Fushiguro",
        show:"Jujutsu Kaisen",
        from:"Anime, Manga",
        year:"2018-2025",
        occupation:"Bounty Hunter, Gambler",
        gender:"Male",
        role:"Vigilante, Villian",
    },
    {
        image:"firestorm.png",
        name:"Ronald Roy 'Ronnie' Raymond",
        show:"Injustice",
        from:"DC, Comics",
        year:"1978-2025",
        occupation:"Superhero",
        gender:"Male",
        role:"Protaganist",
    },
    {
        image:"catwoman.png",
        name:"Selina Kyle",
        show:"The Dark Knight Rises, Batman",
        from:"DC, Comics",
        year:"1940-2025",
        occupation:"Jewel Thief, Criminal",
        gender:"Female",
        role:"Vigilante",
    }
]


function renderCharacters(characters){
    console.log('renderCharacters called with', characters.length, 'characters');
    const display = document.getElementById('display');
    if(!display){
        console.error('Display not found');
        return;
    }
    display.innerHTML = '';
    if(characters.length === 0){
        console.log('No characters found, showing empty message');
        display.innerHTML = '<p>No characters found 📭</p>';
        return;
    }
    characters.forEach(character =>{
        if(!character ||typeof character.name !== 'string'){
            console.warn('Invalid country object:', character);
            return;
        }
        const characterDiv =  document.createElement('div');
        characterDiv.className = 'character-card';
        characterDiv.innerHTML=`
                <img onclick="expandDiv(this.parentElement)"src="${character.image || ''}" alt="Image of ${character.name}" class = "character-img">
                <div class="character-info hidden">
            <h3>${character.name}</h3>
            <h4>${character.show}</h4>
            <h4>From a ${character.from}</h4>
            <h4>Year: ${character.year}</h4>
            <h4>Occupation: ${character.occupation}</h4>
            <h4>Gender: ${character.gender}</h4>
            <h4>Role: ${character.role}</h4>
            <p>Bio: ${character.bio}</p>
        </div>

        `;
        // characterElements.push(characterDiv);
        display.appendChild(characterDiv);
    });
    // characterElements.forEach(element =>{
    //     display.appendChild(element);
    // });
    console.log(`Successfully rendered ${characters.length} characters`);
}
renderCharacters(character);
function expandDiv(parent){
    console.log(parent)
    parent.querySelector(".character-info").classList.toggle("hidden")

}

function initializeSearch(){
    console.log('Initializing seach functionality');
    renderCharacters(character);
    const searchInput = document.getElementById('searchInput');
    if(!searchInput){
        console.error('Search input element not found');
        return;
    }
    searchInput.addEventListener('input', function(){
        const searchTerm = this.value.trim().toLowerCase();
        console.log('Input event detected, search term:', searchTerm);

        if(searchTerm !== ''){
            searchCharacters(searchTerm);
        }
    });
    searchInput.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            const searchTerm = searchInput.value.trim().toLowerCase();
            console.log('Enetr key pressed for search term:', searchTerm);

            if(searchTerm !== ''){
                searchCharacters(searchTerm);
                saveSearchTerm(searchTerm);

                searchInput.value = '';
            };
        };
    });
};

function searchCharacters(searchTerm){
    console.log('searchCharacters called with term:', searchTerm);

    if(typeof character === ' undefined' || !Array.isArray(character)){
        console.error('character is not defined or not an array in searchCharacters');
        return;
    }

    if(searchTerm === ''){
        console.log('Empty search term, showing all characters');
        renderCharacters(character);
        return;
    }
    const filteredCharaters = character.filter(ch => {
        if(!ch || typeof ch.name !== 'string'){
            console.warn('Invalid character object found:'. ch);
            return false;
        };
        return ch.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(`Found ${filteredCharaters.length} charcaters matching "${searchTerm}"`);

    renderCharacters(filteredCharaters);
}
function saveSearchTerm(term){
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    if(searchHistory.length >= 10){
        searchHistory.shift();
    }
    if(!searchHistory.includes(term)){
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
};

initializeSearch();
renderCharacters(character);

document.getElementById("form").addEventListener("submit", (event) => addCharacter(event))
function addCharacter(event){
    event.preventDefault()
    const cnameInput = document.getElementById('cname').value;
    const showInput = document.getElementById('show').value;
    const bookInput = document.getElementById('book').value;
    const yearInput = document.getElementById('year').value;
    const occupationInput = document.getElementById('occupation').value;
    const genderInput = document.getElementById('gender').value;
    const roleInput = document.getElementById('role').value;
    const bioInput = document.getElementById('bio').value;
    const imageInput = document.getElementById('image').value.split('fakepath')[1];

    console.log(imageInput)

    let newCharacter = {
        image:imageInput,
        name:cnameInput,
        show:showInput,
        from:bookInput,
        year:yearInput,
        occupation:occupationInput,
        gender:genderInput,
        role:roleInput,
        bio:bioInput
    }
character.push(newCharacter)
renderCharacters(character)
}
```
The JavaScript file creates an array named `character`.
```javascript
const character=[
    {
        image:"obito.png",
        name:"Obito Uchiha",
        show:"Naruto, Naruto Shipudden",
        from:"Anime, Manga",
        year:"2000-2023",
        occupation:"Ninja",
        gender:"Male",
        role:"Villian",
        bio:"Obito Uchiha is a character from the Naruto anime and manga series created by Masashi Kishimoto. He was originally a kind-hearted and idealistic member of the Uchiha clan and a teammate of Kakashi Hatake and Rin Nohara under Minato Namikaze (the future Fourth Hokage). Obito was thought to have died during a mission, but he survived and was manipulated by the villain Madara Uchiha. After witnessing Rin’s death, Obito’s worldview changed drastically, and he adopted a darker path. He took on the identity of 'Tobi' and became one of the main antagonists, playing a key role in the Akatsuki organization and initiating the Fourth Great Ninja War. Despite his actions, Obito's story is ultimately one of tragedy and redemption. He realizes the consequences of his choices and sacrifices himself to help Naruto and the Allied Shinobi Forces defeat the true final enemy.",
    },
    {
        image:"2099.png",
        name:"Miguel O' Hara (Spiderman 2099)",
        show:"Spiderman Across the SpiderVerse, Lego Marvel SuperHeroes",
        from:"Comics, Movie",
        year:"1992-2025",
        occupation:"Superhero",
        gender:"Male",
        role:"Vigilante",
        bio:"Spider-Man 2099 is a version of Spider-Man from the future, the year 2099. His real name is Miguel O’Hara, and he is a scientist who works for a big company called Alchemax. After a science experiment goes wrong, he gains spider-like powers, similar to the original Spider-Man. Unlike Peter Parker, Miguel doesn’t have a spider-sense, but he has other cool powers like super strength, speed, sharp claws, and the ability to stick to walls. He also has fangs that can inject venom and glowing red eyes. Miguel becomes Spider-Man to fight against the corruption and crime in his high-tech future world, trying to make things better while also dealing with his own personal struggles.",
    },
    {
        image:"senku.png",
        name:"Ishigami Senku",
        show:"Dr. Stone",
        from:"Manga, Anime",
        year:"2017-2025",
        occupation:"Scientist",
        gender:"Male",
        role:"Protaganist",
        bio:"Senku Ishigami is the main protagonist of the manga and anime series Dr. Stone, created by Riichiro Inagaki and Boichi. He is a highly intelligent and resourceful young scientist with a passion for rebuilding and advancing human civilization, which was wiped out when a mysterious phenomenon turned all of humanity to stone statues. After being freed from his stone form, Senku embarks on a mission to use science to restore humanity to its former glory. With a deep understanding of various scientific fields, Senku is determined to bring back technology, from the simplest tools to complex inventions, and is known for his incredible scientific knowledge, problem-solving skills, and unshakable resolve. His goal is to build a society based on science, and he works tirelessly to achieve it, often clashing with those who prefer simpler or more primitive ways of life. His catchphrase, 'Science is the future!' reflects his unwavering belief in the power of science to overcome any obstacle.",
    },
    {
        image:"bluebettle.png",
        name:"Jaime Reyes(Blue Bettle)",
        show:"Blue Bettle, Injustice",
        from:"DC, Comics",
        year:"2006-2025",
        occupation:"Superhero",
        gender:"Male",
        role:"Protaganist",
        bio:"Jaime Reyes is the third incarnation of DC Comics' Blue Beetle, first introduced in 2006. He is a teenager from El Paso, Texas, who becomes the Blue Beetle after discovering an alien scarab that bonds with his spine, transforming him into a hero. The scarab gives Jaime a suit of alien armor with superhuman strength, the ability to generate weapons, and enhanced agility. Unlike previous Blue Beetles, Jaime's scarab is extraterrestrial in origin, and it has its own sentience. The character stands out for his cultural background, as he is of Mexican-American descent, and the stories often highlight themes of family and community. Jaime has been part of groups like the Teen Titans and the Justice League. His character was also featured in the 2023 Blue Beetle film, where he was portrayed as the first Latino superhero in the DC Extended Universe. Blue Beetle is recognized for its modern take on heroism, blending superhero action with cultural identity.",
    },
    {
        image:"joyboy.png",
        name:"Joy Boy",
        show:"One Piece",
        from:" Manga, metioned in Anime",
        year:"2011-2025",
        occupation:"Pirate",
        gender:"Male, Giant",
        role:"Viginate, Criminal, Leader",
        bio:"Joy Boy is a mysterious and pivotal figure in One Piece, whose full backstory is still being uncovered throughout the series. Here's a simple overview.Role in History: Joy Boy is a person from the distant past, likely connected to the Void Century, a period erased from history. He is closely associated with the legendary island of Raftel (now Laugh Tale) and the One Piece treasure. His connection to the island and its secrets is one of the key driving forces behind the story. The Promise: Joy Boy is best known for a failed promise to the residents of Fish-Man Island during the Void Century. He was supposed to bring something significant to the island, but he was unable to fulfill that promise. This failure left a lasting legacy. Inherited Will: While Joy Boy's actions and fate remain unclear, his will is believed to have been passed down to later generations. Most notably, it seems that Luffy, the main protagonist, is connected to Joy Boy, with Luffy's abilities and actions hinting that he may be the one to fulfill Joy Boy's long-awaited promise. Mystery: The true nature of Joy Boy’s identity, his goals, and his connection to the larger story of the One Piece world remains a central mystery. His role is integral to understanding the series' larger themes of freedom, the Void Century, and the mysteries surrounding the Ancient Kingdom. In short, Joy Boy is a figure wrapped in mystery, whose legacy is closely tied to Luffy’s journey and the secrets of the world."
    },
    {
        image:"beastboy.png",
        name:"Garfield Mark 'Gar' Logan",
        show:"Titans, Teen Titans, Doom Patrol, Teen Titans Go",
        from:"Marvel, Comics",
        year:"1965-2025",
        occupation:"Superhero",
        gender:"Mutant, Male",
        role:"Protaganist, Vigilante",
        bio:"Beast Boy, or Garfield Logan, is a superhero with the ability to shapeshift into any animal, gaining their abilities and traits. Known for his green skin and humorous, carefree personality, he is a key member of the Teen Titans. While often lighthearted, Beast Boy is fiercely loyal and will step up when his friends need him. He first appeared in Doom Patrol before joining the Teen Titans, where he continues to be a valuable and entertaining team member."
    },
    {
        image:"joker.png",
        name:"Jack Oswald (Joker) White",
        show:"Joker, Joker: Folie à Deux, Lego Batman, Suicide Squad, The Dark Knight",
        from:"DC, Comics",
        year:"1940-2025",
        occupation:"Criminal, Serial Killer, Abuser",
        gender:"Male",
        role:"Villian",
        bio:"The Joker is one of the most iconic and enduring villains in comic book history, primarily known as the arch-nemesis of Batman in the DC Universe. He first appeared in Batman #1 in 1940 and was created by Bill Finger, Bob Kane, and Jerry Robinson Character Traits: Appearance: Pale white skin, green hair, red lips, often seen wearing a purple suit and clown makeup. Personality: Chaotic, unpredictable, intelligent, and sadistic. He finds humor in pain and disorder. Motivation: Unlike many villains, the Joker often has no clear goal beyond creating chaos. He thrives on anarchy and sees life as a cruel joke. Backstory: The Joker’s origins vary across stories. One common version shows him as a failed comedian who falls into a vat of chemicals, which disfigures him and drives him insane. In Joker (2019), he's portrayed as Arthur Fleck, a mentally ill man pushed to the edge by society’s neglect. Notable Traits: Mastermind criminal with a flair for theatrics. Lacks empathy or remorse. Often uses fear, manipulation, and elaborate schemes. Cultural Impact: The Joker has been portrayed by several actors, including Heath Ledger, Joaquin Phoenix, Jack Nicholson, and Mark Hamill (voice). He represents the ultimate foil to Batman’s order and justice, embodying chaos and moral ambiguity.",
    },
    {
        image:"leonardo.png",
        name:"Hamato Leonardo",
        show:"Rise of TMNT, TMNT, Ninja Turtles: The Next Mutation, Mutant Turtles: Chōjin Densetsu Hen, Mutant Turtles: Superman Legend, Tales of the Teenage Mutant Ninja Turtles",
        from:"Comics",
        year:"1987-2025",
        occupation:"Ninja",
        gender:"Male",
        role:"Vigilante",
        bio:"Leonardo is the disciplined and courageous leader of the Teenage Mutant Ninja Turtles. Recognizable by his blue mask and twin katana swords, he is known for his strong sense of honor, responsibility, and loyalty to his brothers. Named after the Renaissance artist Leonardo da Vinci, he trains hard under Master Splinter and often struggles with the burden of leadership, but always strives to do what’s right. As the most serious of the team, Leonardo sets the tone in battle and keeps the group focused on their mission to protect the city.",
    },
    {
        image:"starfire.png",
        name:"Koriand'r (Starfire)",
        show:"Teen Titans, Titans, Teen Titans Go",
        from:"Comics, DC",
        year:"1980-2025",
        occupation:"Superhero",
        gender:"Female, Alien",
        role:"Protaganist, Team member",
        bio:"Starfire is a powerful superhero and a member of the Teen Titans. She comes from the alien planet Tamaran and is known for her super strength, flight, and the ability to shoot energy blasts (called starbolts) from her hands and eyes. Starfire has a kind heart, a joyful personality, and a deep curiosity about Earth and its culture. Despite her cheerful and sometimes naive nature, she is a fierce warrior with a tragic past—she was once a princess betrayed and enslaved before escaping to Earth. Her bright orange skin, long fiery red hair, and glowing green eyes make her visually striking. She’s also known for her close friendships with fellow Teen Titans, especially Robin, with whom she often shares a romantic connection.",
    },
    {
        image:"ghostspider.png",
        name:"Gwendolyn Maxine 'Gwen' Stacy",
        show:"Marvel Rising, Spiderman Across the Spider Verse, Spiderman into the Spider Verse",
        from:"Marvel, Comics",
        year:"1965-2025",
        occupation:"Superhero",
        gender:"Female",
        role:"Vigilante",
        bio:"Gwen Stacy is a major character in Marvel's Spider-Man comics and one of Peter Parker’s early love interests. She is depicted as a smart, kind, and independent young woman, often portrayed as the daughter of Captain George Stacy, a police officer in New York. Gwen’s most significant storyline is her tragic death at the hands of the Green Goblin in The Amazing Spider-Man #121 (1973), which marked a pivotal moment in Spider-Man’s life and in comic book history. Her death profoundly affected Peter Parker, shaping his journey and his approach to being Spider-Man. In addition to her role in Peter's life, Gwen has been featured in various alternate universes. In the Spider-Verse storyline, she becomes Spider-Woman (or Spider-Gwen) in a universe where she was bitten by the radioactive spider instead of Peter Parker, gaining similar powers and fighting crime as Spider-Woman.",
    },
    {
        image:"huey.png",
        name:"Huey R. Freeman",
        show:"The Boonducks",
        form:"Other, Adult Swim",
        year:"1999-2014",
        occupation:"Revolutionary",
        gender:"Male",
        role:"Vigilnate",
        bio:"Huey Freeman is the 10-year-old main protagonist of The Boondocks, a satirical comic strip and animated television series created by Aaron McGruder. He's an intelligent, politically conscious, and revolutionary-minded African-American boy who often critiques American society, culture, and politics. Key Traits: Highly intellectual – Huey is wise beyond his years, frequently quoting historical and political figures, and analyzing complex social issues. Revolutionary mindset – He admires black radicals like Malcolm X and Huey P. Newton (his namesake) and often calls out systemic racism, capitalism, and media manipulation. Mature and stoic – Huey rarely shows emotion and often serves as the moral and intellectual compass in contrast to the absurdity around him. Martial arts skills – He is also physically capable, trained in martial arts, and uses his skills when necessary. Role in The Boondocks: Huey acts as a social commentator within the show. Living with his younger brother Riley and their grandfather Robert “Granddad” Freeman in the predominantly white suburb of Woodcrest, Huey often finds himself frustrated by the ignorance and contradictions in both black and white communities. While others indulge in materialism or foolishness, Huey tries to spark awareness and revolution—even if no one listens.",
    },
    {
        image:"stevenu.png",
        name:"Steven Quartz Universe",
        show:"Steven Universe, Steven Universe Future, Steven Universe The Movie",
        from:"Disney, Cartoon Network",
        year:"2010-2020",
        occupation:"Superheroes",
        gender:"Male, Gem",
        role:"Protaganist",
        bio:"Steven Universe is the main protagonist of the animated television series Steven Universe, created by Rebecca Sugar and produced by Cartoon Network. The show follows Steven’s journey of self-discovery, emotional growth, and heroism in a world filled with alien beings known as the Gems. Background: Steven is the son of Greg Universe, a human, and Rose Quartz, a powerful Gem who gave up her physical form to bring Steven into the world. He inherits her gemstone in his navel and becomes part of the Crystal Gems, a group of rebels who protect Earth. The team includes Garnet, Amethyst, and Pearl, who all help raise and train him. Character Arc: Steven starts as a cheerful, naive kid eager to be a hero like the Crystal Gems. Over time, he matures emotionally and learns about the dark history of the Gem war, his mother’s controversial past as Rose Quartz (who was actually Pink Diamond), and the weight of inherited trauma. His journey shifts from fighting monsters to healing others—emotionally and literally. In Steven Universe Future, a sequel epilogue series, Steven struggles with his own trauma and identity after years of conflict resolution, showing the long-term effects of growing up too fast and being burdened with responsibility.",
    },
    {
        image:"harley.png",
        name:"Dr. Harleen Frances Quinzel",
        show:"Suicide Squad, Birds Of Prey, Suicide Squad 2, Harley Quinn, Injustice, Joker: Folie à Deux",
        from:"DC, Comics",
        year:"1992-2025",
        occupation:"Criminal, Theif",
        gender:"Female",
        role:"Villian, Superhero, AntiHero, Vigilante",
        bio:"Harley Quinn is a popular character from DC Comics. She was originally a psychiatrist named Dr. Harleen Quinzel, who fell in love with the Joker while treating him at Arkham Asylum. She eventually became his sidekick and adopted the name Harley Quinn. Story: Harley started as the Joker’s partner in crime, but over time she became her own independent character. She often teams up with other villains, like Poison Ivy (her close friend and sometimes romantic partner), and sometimes even acts as an anti-hero. In many versions of her story, Harley breaks free from the Joker’s abuse and finds her own path.",
    },
    {
        image:"loki.png",
        name:"Loki Laufeyson",
        show:"Loki, Thor, Thor Dark World, Thor Ragnorok, Avengers, Avenger",
        from:"Marvel, Comics",
        year:"1949-2025",
        occupation:"Magician, Terrorist",
        gender:"Male, God",
        role:"Manipulator, Male",
        bio:"Loki is a prominent character in the Marvel Universe, known for his complex personality and shifting roles as both villain and anti-hero. He is based on the Norse god of mischief and is portrayed in the Marvel Cinematic Universe (MCU) by Tom Hiddleston. Story Arc in the MCU: Starts as the antagonist in Thor (2011) and The Avengers (2012), trying to rule Earth. Evolves into a more sympathetic figure in later films, notably in Thor: Ragnarok (2017) and Avengers: Infinity War (2018), where he dies heroically. A variant version of Loki escapes with the Tesseract in Avengers: Endgame (2019), leading to the Disney+ series Loki (2021–2023), where he confronts themes of fate, identity, and free will. In the Loki Series: Captured by the Time Variance Authority (TVA). Learns about the multiverse and timelines. Encounters variants of himself, including Sylvie, a female Loki. Ends Season 2 as the God of Stories, overseeing the multiverse, symbolizing his ultimate transformation from chaos to protector of order.",
    },
    {
        image:"okuran.png",
        name:"Ken 'Okuran' Takakura",
        show:"Dan da dan",
        from:"Anime, Manga",
        year:"2024-2025",
        occupation:"Highschool student, Exorcist",
        gender:"Male",
        role:"Protaganist",
        bio:"Okuran is a central character in the manga Dandadan, known for his reserved demeanor and deep interest in the supernatural. Initially skeptical of ghosts and spirits but a firm believer in aliens, Okuran contrasts with his classmate Momo Ayase, who believes in ghosts but not aliens. After a strange encounter involving both supernatural and extraterrestrial forces, Okuran gains psychic powers, specifically telekinesis, which he uses to battle bizarre and often dangerous entities. Despite his shy and introverted nature, Okuran shows courage and loyalty, especially when protecting Momo and their friends from otherworldly threats. As the story progresses, Okuran becomes more confident and involved in the increasingly chaotic and bizarre events surrounding their lives. His growing friendship—and possible romantic tension—with Momo adds emotional depth to the fast-paced, comedic, and action-heavy plot. Okuran’s character development is driven by his willingness to face the unknown, his desire to understand the mysteries that threaten their world, and his unspoken care for those around him. His journey from a quiet outcast to a key fighter against the paranormal highlights the series' blend of supernatural intrigue, humor, and heartfelt character moments.",
    },
    {
        image:"flash.png",
        name:"Bartholomew Henry 'Barry' Allen",
        show:"The Flash, Arrow, Supergirl, DC Lengends of Tomorrow, Justice League, Flash",
        from:"DC, Comics",
        year:"2014-2025",
        occupation:"Superheros",
        gender:"Male, Metahuman",
        role:"Protaganist",
        bio:"The Flash is a superhero from DC Comics known for his super speed and strong sense of justice. Multiple characters have taken on the mantle, but the most well-known is Barry Allen, a forensic scientist who gained his powers after a lightning strike caused a chemical explosion in his lab. With the ability to move at incredible speeds, Barry becomes the Scarlet Speedster, using his powers to protect Central City and the broader world from criminals, metahumans, and time-altering threats. His connection to the Speed Force, a mysterious energy field, grants him abilities beyond just speed, including time travel and dimension-hopping. Throughout his stories, The Flash often explores themes of heroism, responsibility, and the consequences of tampering with time. Barry's personal life—especially his relationships with his family, love interest Iris West, and his fellow heroes in the Justice League—adds emotional weight to his fast-paced adventures. Whether racing to save lives or confronting powerful villains like Reverse-Flash and Zoom, The Flash represents hope, resilience, and the belief that even in the face of tragedy, one can run toward a better future.",
    },
    {
        image:"luz.png",
        name:"Luz Noceda",
        show:"The Owl House",
        from:"Disney, Disney XD",
        year:"2020-2023",
        occupation:"Witch, Magic User, Palismen Tamer",
        gender:"Female",
        role:"Protaganist",
        bio:"Luz Noceda is the main protagonist of The Owl House, a fantasy-animated series created by Dana Terrace. A quirky, imaginative teenager from the human world, Luz feels out of place in her everyday life due to her love for fantasy, magic, and creativity. Her life changes when she accidentally stumbles into the Boiling Isles, a magical realm inhabited by witches, demons, and strange creatures. There, she becomes the apprentice of the rebellious witch Eda Clawthorne and befriends King, a tiny creature who claims to be the King of Demons. Though Luz has no natural magical ability, she learns to cast spells using glyphs and quickly becomes a determined, clever, and kindhearted force in this new world. As the series progresses, Luz grows not only in magical skill but also in confidence, empathy, and self-understanding. She plays a key role in resisting Emperor Belos's authoritarian regime and protecting her found family and the Boiling Isles from various threats. Her journey also explores themes of identity, neurodivergence, and belonging, especially as she navigates her feelings for her girlfriend, Amity Blight. Luz’s courage and love for others ultimately make her a hero not through power alone, but through her unwavering belief in doing what’s right and being true to herself.",
    },
    {
        image:"fin.png",
        name:"Finn Campbell Mertens",
        show:"Adventure Time, Adventure Time: Distant Lands",
        from:"Disney, Cartoon Network",
        year:"2007-2021",
        occupation:"Adventurer, Fighter, SuperHero",
        gender:"Male",
        role:"Protaganist",
        bio:"Finn the Human is the courageous and adventurous main protagonist of Adventure Time, a surreal animated series created by Pendleton Ward. As the last known human in the Land of Ooo, Finn is a fearless hero who dedicates his life to helping others and fighting evil alongside his magical dog brother and best friend, Jake. Armed with a strong moral compass, a variety of swords, and an unshakable sense of justice, Finn embraces danger head-on, often acting impulsively but with good intentions. Throughout the series, he takes on quests that pit him against monsters, powerful villains like the Ice King, and even abstract concepts like fear and loneliness. As Adventure Time progresses, Finn matures from an enthusiastic boy into a thoughtful young man. His emotional growth is central to the story, as he navigates complex relationships, heartbreak, questions about identity, and the mystery of his human origins. Through loss, love, and self-discovery, Finn evolves into a more compassionate and introspective character, while never losing his heroic spirit and desire to do good. His journey reflects the show's deeper themes of growing up, the nature of existence, and the importance of friendship and forgiveness in a strange and ever-changing world.",
    },
    {
        image:"asta.png",
        name:"Asta Staria",
        show:"Black Clover, Black Clover-Sword of the Wizard King",
        from:"Anime, Manga",
        year:"2014-2025",
        occupation:"Swordsman, Magic Knight, Devil User",
        gender:"Male",
        role:"Protaganist",
        bio:"Asta is the energetic and determined main protagonist of Black Clover, a fantasy anime and manga series created by Yūki Tabata. Born without any magical power in a world where magic determines one’s status, Asta dreams of becoming the Wizard King—the strongest mage in the Clover Kingdom. Despite his lack of magic, he refuses to give up and trains his body relentlessly. His life changes when he receives a rare five-leaf clover grimoire, granting him the ability to wield Anti-Magic swords that nullify other spells. Alongside his rival and childhood friend Yuno, a prodigy blessed with immense magic, Asta joins the Black Bulls, a squad of misfits, to pursue his goal. Throughout the series, Asta's unwavering optimism, resilience, and refusal to give in to despair inspire those around him, earning him respect from allies and enemies alike. He confronts powerful foes, uncovers the secrets of his Anti-Magic powers, and forms strong bonds with his comrades in the Black Bulls. As the world faces growing threats from devils, rogue mages, and political conflict, Asta emerges as a key figure in protecting the Clover Kingdom. His journey is one of grit, perseverance, and defying limitations, proving that even someone born without magic can rise to greatness through sheer will and heart.",
    },
    {
        image:"tanjiro.png",
        name:"Tanjiro Kamado",
        show:"Demon Slayer",
        from:"Anime, Manga",
        year:"2016-2025",
        occupation:"Swordsman",
        gender:"Male",
        role:"Protaganist",
        bio:"Tanjiro Kamado is the kind-hearted and determined protagonist of Demon Slayer: Kimetsu no Yaiba, a dark fantasy anime and manga series created by Koyoharu Gotouge. He begins as a gentle boy living a peaceful life with his family, but his world is shattered when demons slaughter his loved ones, leaving only his younger sister Nezuko alive—transformed into a demon herself. Vowing to avenge his family and find a cure for Nezuko, Tanjiro joins the Demon Slayer Corps, a group dedicated to eradicating demons. Armed with his keen sense of smell, swordsmanship skills, and Water Breathing techniques, he takes on deadly missions to protect humanity. As the story unfolds, Tanjiro’s unwavering compassion and moral clarity set him apart, even in the face of unimaginable cruelty and violence. He seeks to understand his enemies, often showing empathy toward demons' tragic pasts while never hesitating to stop their evil actions. With each battle, he grows stronger—eventually learning the powerful Sun Breathing technique and playing a central role in the fight against Muzan Kibutsuji, the progenitor of all demons. Tanjiro’s journey is a moving tale of love, sacrifice, resilience, and the hope of restoring what was lost, making him a deeply admired hero in the world of anime and manga.",
    },
    {
        image:"shinra.png",
        name:"Shinra Kusakabe",
        show:"Fire Force",
        from:"Anime, Manga",
        year:"2016-2025",
        occupation:"Firefighter, Exorcist",
        gender:"Male, Pyrokenetic",
        role:"Protaganist",
        bio:"Shinra Kusakabe is the fiery protagonist of Fire Force (En'en no Shōbōtai), a supernatural action manga and anime series created by Atsushi Ōkubo. Nicknamed the 'Devil's Footprints' for his ability to ignite his feet at will and move at blazing speeds, Shinra is a Third Generation pyrokinetic who joins Special Fire Force Company 8. Haunted by a tragic past where his mother and younger brother were presumed killed in a mysterious fire, Shinra is determined to become a hero who saves people from spontaneous human combustion—a phenomenon that turns people into destructive Infernals. Despite being misunderstood for his unnerving smile, he is brave, loyal, and driven by a deep desire to protect others. As Shinra uncovers the truth behind the fire that destroyed his family, he finds himself entangled in a vast conspiracy involving the Evangelist, a cult seeking to plunge the world into chaos. Throughout his journey, Shinra’s powers evolve as he taps into Adolla Burst, a mysterious and powerful flame linked to another dimension. His bonds with his fellow firefighters and his unwavering resolve to bring hope to a burning world make him a beacon of light in a dark, chaotic society. Shinra's story is one of perseverance, uncovering hidden truths, and fighting for justice in a world threatened by fire and fanaticism.",
    },
    {
        image:"superman.png",
        name:"Clark Joseph Kent/ Kal-el",
        show:"Man of Steal, Justice League",
        from:"DC, Comics",
        year:"1938-2025",
        occupation:"Reporter, Superhero",
        gender:"Male, Alien",
        role:"Protaganist",
        bio:"Superman is a fictional superhero created by Jerry Siegel and Joe Shuster, first appearing in Action Comics #1 in 1938. He is one of the most iconic and enduring characters in popular culture. Born as Kal-El on the doomed planet Krypton, he was sent to Earth as a baby by his parents to escape the planet’s destruction. Raised by the Kent family in the small town of Smallville, he grew up as Clark Kent, discovering his superhuman powers including flight, super strength, x-ray vision, and invulnerability. As an adult, he works as a reporter for the Daily Planet in Metropolis, using his alter ego Superman to fight evil and uphold truth and justice. Superman’s stories often explore themes of identity, morality, and the immigrant experience, portraying him as a symbol of hope and integrity. He frequently battles powerful villains like Lex Luthor, General Zod, and Doomsday, while also navigating his dual life as both a human and alien. Over the decades, Superman has appeared in countless comic books, television series, films, and video games, becoming a foundational figure in the superhero genre and a beacon of heroism for generations.",
    },
    {
        image:"batman.png",
        name:"Bruce Thomas Wayne",
        show:"Batman, Justice League, Batman Begins, Batman Returns, The Dark Knight",
        from:"DC, Comics",
        year:"1939-2025",
        occupation:"Philanthropist, Business Owner",
        gender:"Male",
        role:"Vigilante, Anti-Hero",
        bio:"Batman is a fictional superhero created by Bob Kane and Bill Finger, first appearing in Detective Comics #27 in 1939. Unlike many superheroes, Batman has no superpowers; instead, he relies on his intelligence, physical prowess, detective skills, and advanced technology. Born Bruce Wayne, he witnessed the murder of his parents as a child, an event that drove him to dedicate his life to fighting crime. Operating in the dark, crime-ridden city of Gotham, he adopts the persona of Batman to strike fear into criminals and protect the innocent. Batman’s stories often delve into themes of justice, vengeance, and duality. By day, he is a billionaire philanthropist and CEO of Wayne Enterprises, while by night, he takes on Gotham’s most dangerous villains, including the Joker, Two-Face, and the Riddler. Aided by allies like Alfred Pennyworth, Robin, and Commissioner Gordon, Batman works outside the law to uphold it. His complex character, moral code, and dark, brooding nature have made him one of the most compelling and influential figures in comic book history.",
    },
    {
        image:"batmanwholaughs.png",
        name:"Bruce Thomas Wayne",
        show:"Dark Multiverse",
        from:"DC, Comics",
        year:"2017-2025",
        occupation:"Murderer",
        gender:"Male, Corrupeted Human",
        role:"Villian",
        bio:"The Batman Who Laughs is a dark and twisted version of Batman from the DC Comics multiverse, first introduced in Dark Days: The Casting (2017) and fully appearing in Dark Nights: Metal. Originating from Earth -22, he is a version of Bruce Wayne who was infected by the Joker's toxin after killing him. The toxin transformed him into a hybrid of Batman's intellect and the Joker's madness, stripping away Bruce's moral code and turning him into a sadistic villain. As the Batman Who Laughs, he retains all of Batman’s strategic brilliance and combat skills, but with the Joker’s chaotic, homicidal mindset, making him one of the most dangerous beings in the multiverse. This character represents the ultimate corruption of Batman’s ideals and showcases what happens when his greatest enemy's influence takes root in his psyche. The Batman Who Laughs leads a group of other dark versions of Batman from the multiverse, collectively known as the Dark Knights, under the service of the cosmic villain Barbatos. His goal is to plunge the multiverse into darkness, believing that only through fear and control can true order be achieved. His terrifying blend of logic and insanity makes him a formidable threat to the Justice League and a symbol of how even the most noble heroes can fall when pushed past their limits.",
    },
    {
        image:"shigaraki.png",
        name:"Tenko Shimura",
        show:"My Hero Academia",
        from:"Anime, Manga",
        year:"2014-2025",
        occupation:"Terrorist, Murderer",
        gender:"Male, Quirk User",
        role:"Villian",
        bio:"Tomura Shigaraki is a central antagonist in the anime and manga series My Hero Academia, created by Kōhei Horikoshi. Born Tenko Shimura, he is the grandson of Nana Shimura, a former wielder of the powerful Quirk One For All. After a traumatic childhood marked by the accidental destruction of his family due to his uncontrollable Quirk, Decay, he was manipulated and taken in by the villain All For One. Under his new name, Tomura Shigaraki, he became the leader of the League of Villains, a group determined to overthrow the hero-dominated society and reshape the world in chaos and destruction. As the series progresses, Shigaraki evolves from a petulant and unstable antagonist into a calculated and terrifying threat. He undergoes a transformation both physically and mentally, enhancing his Decay Quirk and merging with All For One’s power and ideology. This evolution positions him as a near-unstoppable force capable of challenging even the strongest heroes, including the next generation led by Izuku Midoriya. Shigaraki’s character embodies the consequences of a broken society and the dangers of neglect, making him a tragic yet compelling villain who blurs the line between victim and monster.",
    },
    {
        image:"miles.png",
        name:"Miles Gonzalo Morales",
        show:"Spiderman into the SpiderVerse, Spiderman across the SpiderVerse",
        from:"Marvel, Comics",
        year:"2011-2025",
        occupation:"Highschool Student, Superhero",
        gender:"Male",
        role:"Protaganist",
        bio:"Miles Morales is a fictional superhero in the Marvel Comics universe, first introduced in Ultimate Fallout #4 in 2011. Created by writer Brian Michael Bendis and artist Sara Pichelli, Miles is a teenager of African-American and Puerto Rican descent living in Brooklyn. After the death of his universe’s Peter Parker, Miles gains spider-like powers from a genetically altered spider and eventually takes up the mantle of Spider-Man. His abilities include classic powers like wall-crawling and enhanced agility, as well as unique ones such as camouflage and a venom strike that can paralyze enemies. Miles’ story explores themes of identity, legacy, and responsibility, as he struggles to live up to Peter Parker’s example while forging his own path. Balancing his superhero duties with school, family, and friendships, Miles represents a fresh, diverse perspective within the Spider-Man legacy. He has become a beloved character across comics, animation, and video games, especially following the success of Spider-Man: Into the Spider-Verse, where his journey resonated with audiences around the world. Miles Morales stands as a symbol of empowerment and the idea that anyone, regardless of background, can be a hero.",
    },
    {
        image:"deku.png",
        name:"Izuku Midoriya",
        show:"My Hero Academia, My Hero Academia Two Heroes, My Hero Academia Heroes Rising, My Hero Academia World Mission, My Hero Academia Your Next",
        from:"Anime, Manga",
        year:"2014-2025",
        occupation:"HighSchool Student, Superhero",
        gender:"Male",
        role:"Protaganist",
        bio:"Deku, whose real name is Izuku Midoriya, is the main protagonist of the anime and manga series My Hero Academia, created by Kōhei Horikoshi. Born in a world where nearly everyone has superpowers known as Quirks, Izuku starts out powerless but dreams of becoming a great hero like his idol, All Might. His life changes when All Might recognizes his courage and selflessness, choosing him as the successor to the powerful Quirk 'One For All.' After inheriting this ability, Izuku enrolls at U.A. High School, where he trains to become a professional hero while learning to control and master his new powers. Throughout the series, Deku grows from a timid and analytical fanboy into a determined and courageous leader. His journey is marked by intense training, battles against villains, and moral dilemmas that test his values and character. Despite overwhelming odds, he continues to embody the spirit of true heroism—protecting others even at great personal cost. Deku’s evolution reflects core themes of perseverance, self-belief, and the weight of responsibility, making him an inspiring and relatable character in modern shonen storytelling.",
    },
    {
        image:"ivy.png",
        name:"Dr. Pamela Lillian Isley, PhD",
        show:"Harley Quinn, Injustice",
        from:"DC, Comics",
        year:"1992-2025",
        occupation:"Plant User, Criminal, Poison User",
        gender:"Female",
        role:"Villian",
        bio:"Poison Ivy, aka Dr. Pamela Isley, is a fictional supervillain and antihero in the DC Comics universe, first appearing in Batman #181 in 1966. A brilliant botanist, Pamela Isley was transformed into Poison Ivy after being poisoned by a combination of toxins, which gave her the ability to control plants and exude deadly pheromones. With her newfound powers, she becomes an eco-terrorist, using her abilities to manipulate plants and toxins to achieve her goals. Though often depicted as an adversary to Batman, Ivy's motivations are more complex, as she views her actions as a means of protecting the environment and punishing those who harm nature. Over time, Poison Ivy's character has evolved from a straightforward villain into a more nuanced figure, at times acting as an antihero. She is often portrayed as deeply connected to nature and has a strong sense of moral outrage about the destruction of the planet. In various storylines, Ivy has allied with characters like Harley Quinn and even fought alongside Batman when their interests align. Her complex relationship with environmentalism, her tragic backstory, and her unpredictable nature make her one of Gotham's most compelling and multifaceted characters, balancing between villainy and moments of unexpected compassion.",
    },
    {
        image:"ben.png",
        name:"Benjamin Kirby 'Ben' Tennyson",
        show:"Ben 10, Ben 10 Ultimate Alien, Ben 10 Ominverse, Ben 10 Alien Force",
        from:"Disney, Cartoon Network",
        year:"2005-2025",
        occupation:"Superhero",
        gender:"Male",
        role:"Protaganist",
        bio:"Ben 10 is a popular animated series created by 'Man of Action' and produced by Cartoon Network, first airing in 2005. The show follows Ben Tennyson, a young boy who discovers a mysterious alien device called the Omnitrix while on a summer vacation with his grandfather Max and cousin Gwen. The Omnitrix attaches itself to Ben's wrist and gives him the ability to transform into ten different alien species, each with unique powers. As Ben embarks on various adventures, he battles villains, saves the world, and learns valuable lessons about responsibility, courage, and the importance of teamwork. Throughout the series, Ben grows from a somewhat immature and self-centered kid into a more heroic and thoughtful young man. While the show primarily focuses on Ben’s adventures and his use of the Omnitrix, it also delves into the relationships he shares with his family and the challenges that come with wielding such incredible power. Over time, Ben faces increasingly powerful threats, including alien invaders and dangerous criminals, but his core belief in doing the right thing and protecting those he cares about remains steadfast. Ben 10 has spawned numerous sequels, spin-offs, and adaptations, making it a beloved and enduring franchise for fans of all ages.",
    },
    {
        image:"dipper.png",
        name:"Mason 'Dipper' Pines",
        show:"Gravity Falls",
        from:"Disney, Disney XD",
        year:"1999-2025",
        occupation:"Adventure",
        gender:"Male",
        role:"Protaganist",
        bio:"Dipper Pines is one of the main characters in the animated series Gravity Falls, created by Alex Hirsch. He is a curious and intelligent 12-year-old boy who, along with his twin sister Mabel, is sent to spend the summer with their great-uncle Stan in the mysterious town of Gravity Falls. Dipper is highly analytical, often serving as the more serious and cautious counterpart to Mabel’s free-spirited nature. His inquisitive personality and thirst for adventure lead him to uncover the supernatural secrets hidden in the town, with his primary tool being a mysterious journal he finds, which details the strange occurrences in Gravity Falls. As the series progresses, Dipper becomes increasingly involved in solving the mysteries of the town, particularly surrounding the enigmatic figures and supernatural events that seem to plague it. His journey is filled with growth, as he learns to balance his desire for answers with the importance of family and personal connections. While initially struggling with self-doubt and the desire to prove himself, Dipper matures over the course of the series, taking on more responsibility and facing the challenges of both the supernatural world and adolescence. His intellectual nature, bravery, and determination make him a standout character in Gravity Falls, earning him a dedicated fan following.",
    },
    {
        image:"yuji.png",
        name:"Yuji Itadori",
        show:"Jujutsu Kaisen",
        from:"Anime, Manga",
        year:"2018-2025",
        occupation:"Sorcerer, Highschool student",
        gender:"Male",
        role:"Protaganist",
    },
    {
        image:"toji.png",
        name:"Toji Fushiguro",
        show:"Jujutsu Kaisen",
        from:"Anime, Manga",
        year:"2018-2025",
        occupation:"Bounty Hunter, Gambler",
        gender:"Male",
        role:"Vigilante, Villian",
    },
    {
        image:"firestorm.png",
        name:"Ronald Roy 'Ronnie' Raymond",
        show:"Injustice",
        from:"DC, Comics",
        year:"1978-2025",
        occupation:"Superhero",
        gender:"Male",
        role:"Protaganist",
    },
    {
        image:"catwoman.png",
        name:"Selina Kyle",
        show:"The Dark Knight Rises, Batman",
        from:"DC, Comics",
        year:"1940-2025",
        occupation:"Jewel Thief, Criminal",
        gender:"Female",
        role:"Vigilante",
    }
]
```
1. **renderCharacters(character)**: Creates a function named `renderCharacters()`, this function displays the array (character), but only the image and checks if the contents could be displayed by debugging the array.
```javascript
function renderCharacters(characters){
    console.log('renderCharacters called with', characters.length, 'characters');
    const display = document.getElementById('display');
    if(!display){
        console.error('Display not found');
        return;
    }
    display.innerHTML = '';
    if(characters.length === 0){
        console.log('No characters found, showing empty message');
        display.innerHTML = '<p>No characters found 📭</p>';
        return;
    }
    characters.forEach(character =>{
        if(!character ||typeof character.name !== 'string'){
            console.warn('Invalid country object:', character);
            return;
        }
        const characterDiv =  document.createElement('div');
        characterDiv.className = 'character-card';
        characterDiv.innerHTML=`
                <img onclick="expandDiv(this.parentElement)"src="${character.image || ''}" alt="Image of ${character.name}" class = "character-img">
                <div class="character-info hidden">
            <h3>${character.name}</h3>
            <h4>${character.show}</h4>
            <h4>From a ${character.from}</h4>
            <h4>Year: ${character.year}</h4>
            <h4>Occupation: ${character.occupation}</h4>
            <h4>Gender: ${character.gender}</h4>
            <h4>Role: ${character.role}</h4>
            <p>Bio: ${character.bio}</p>
        </div>

        `;

        display.appendChild(characterDiv);
    });

    console.log(`Successfully rendered ${characters.length} characters`);
}
```
2. **expandDiv(parent)**:With the clickable image people can toggle back in forth between information and just the image with the function `expandDiv(parent)`. Right after declaring the function `renderCharacters(character)`
```javascript
renderCharacters(character);
function expandDiv(parent){
    console.log(parent)
    parent.querySelector(".character-info").classList.toggle("hidden")

}
```
3. **initializesSearch()**: The function `initializeSearch()` get the value of the input and create a `addEventListener()` to allow the user to press enter to search.
```javascript
function initializeSearch(){
    console.log('Initializing seach functionality');
    renderCharacters(character);
    const searchInput = document.getElementById('searchInput');
    if(!searchInput){
        console.error('Search input element not found');
        return;
    }
    searchInput.addEventListener('input', function(){
        const searchTerm = this.value.trim().toLowerCase();
        console.log('Input event detected, search term:', searchTerm);

        if(searchTerm !== ''){
            searchCharacters(searchTerm);
        }
    });
    searchInput.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            const searchTerm = searchInput.value.trim().toLowerCase();
            console.log('Enetr key pressed for search term:', searchTerm);

            if(searchTerm !== ''){
                searchCharacters(searchTerm);
                saveSearchTerm(searchTerm);

                searchInput.value = '';
            };
        };
    });
};
```
4. **searchCharacter()**: The `searchCharacter` function searches the input and displays the gallery after filteringit thourgh the search
```javascript
function searchCharacters(searchTerm){
    console.log('searchCharacters called with term:', searchTerm);

    if(typeof character === ' undefined' || !Array.isArray(character)){
        console.error('character is not defined or not an array in searchCharacters');
        return;
    }

    if(searchTerm === ''){
        console.log('Empty search term, showing all characters');
        renderCharacters(character);
        return;
    }
    const filteredCharaters = character.filter(ch => {
        if(!ch || typeof ch.name !== 'string'){
            console.warn('Invalid character object found:'. ch);
            return false;
        };
        return ch.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(`Found ${filteredCharaters.length} charcaters matching "${searchTerm}"`);

    renderCharacters(filteredCharaters);
}
```
5. **searchTerm()**: This function saves the search in the `localStorage`.
```javascript
function saveSearchTerm(term){
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    if(searchHistory.length >= 10){
        searchHistory.shift();
    }
    if(!searchHistory.includes(term)){
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
};
```
6. **addCharacter()**: This function gets the input from the forms and displays them in the gallery
```javascript
addCharacter(event))
function addCharacter(event){
    event.preventDefault()
    const cnameInput = document.getElementById('cname').value;
    const showInput = document.getElementById('show').value;
    const bookInput = document.getElementById('book').value;
    const yearInput = document.getElementById('year').value;
    const occupationInput = document.getElementById('occupation').value;
    const genderInput = document.getElementById('gender').value;
    const roleInput = document.getElementById('role').value;
    const bioInput = document.getElementById('bio').value;
    const imageInput = document.getElementById('image').value.split('fakepath')[1];

    console.log(imageInput)

    let newCharacter = {
        image:imageInput,
        name:cnameInput,
        show:showInput,
        from:bookInput,
        year:yearInput,
        occupation:occupationInput,
        gender:genderInput,
        role:roleInput,
        bio:bioInput
    }
character.push(newCharacter)
renderCharacters(character)
}
```
### Timer Script:
The timer script add a timer to the webpage and than displays an message whe timer hits 5 minutes
```javascript
function startTimer(){
    console.log('Starting session timer');

    if(document.getElementById('sessionTimer')){
        console.log('Timer already exists, not creating a new one');
        return;
    }

    let sessionSeconds = 0;
    const timerElement = document.createElement('div');
    timerElement.id = 'sessionTimer';
    timerElement.style.marginTop = '20px';
    timerElement.style.color = "var(--body-color)";
    timerElement.style.fontSize = '18px';
    timerElement.style.textAlign = 'center';
    document.body.appendChild(timerElement);

    updateTimerDisplay(timerElement, sessionSeconds);

    let timerInterval = setInterval(() =>{
        sessionSeconds++;
        updateTimerDisplay(timerElement, sessionSeconds);

        sessionStorage.setItem('timeOnPage', sessionSeconds.toString());

        if(sessionSeconds === 300){
            showLongSessionMessage();
        }
    }, 1000);
    
    window.addEventListener('beforeunload', () => {
        console.log('Page unloading, stopping timer');
        clearInterval(timerInterval);
    });
};
function updateTimerDisplay(element, totalSeconds){
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600)/ 60);
    const seconds = totalSeconds % 60;

    let timeText = `⏰ Time on page:`;

    if(hours > 0){
        timeText += `${hours}h`;
    };
    if(hours > 0 ||minutes > 0){
        timeText += `${minutes}m`;
    };
    timeText += `${seconds}s`;
    element.textContent = timeText;
}

function showLongSessionMessage(){
    console.log('Showing long session message (5 minutes)');

    if(document.getElementById('longSessionMessage')){
        console.log(' Long sesison message already exists');
        return;
    }
    const messageDiv = document.createElement('div');
    messageDiv.id = 'longSessionMessage';
    messageDiv.style.padding = '10px';
    messageDiv.style.margin = '20px 0';
    messageDiv.style.backgroundColor = 'var(--footer-bg)';
    messageDiv.style.color = 'var(--body-color)';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.textAlign = 'center';
    messageDiv.innerHTML = `
    <p>⚠ You have  been exploring for 5 minutes! Thank you for your interest in Character Explorer </p>
    <button id="dismissMessage" style="margin-top: 10px; padding: 5px 10px; border:none; border-radius: 4px; cursor:pointer;">
    Dismiss
    </button>
    `;

    const timerElement = document.getElementById('sessionTimer');
    if(timerElement){
        document.body.insertBefore(messageDiv, timerElement);
    }
    else{
        document.body.appendChild('messageDiv');
    }
    const dismissButton = document.getElementById('dismissMessage');
    if(dismissButton){
        dismissButton.addEventListener('click', function(){
            const message = document.getElementById('longSessionMessage');
            if(message){
                message.remove;
            };
        });
    };
};
startTimer();
```
