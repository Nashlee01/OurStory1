// ==================== 
// Game Configuration & Story Content
// ==================== 

// CUSTOMIZE HERE: Replace these with your own details!
const CUSTOMIZATION = {
    gameTitle: "Our Story",
    playerName: "CJ",
    partnerName: "Nycie",
    meetingPlace: "Tantan",
    firstConversationContext: "King's Day in the Netherlands",
    insideJoke: "umiikot ung mundo ko",
    favoriteSong: "Too Good to Say Goodbye ” Bruno Mars",
    photoURL: "assets/us.jpg"
};

// Story Content - Complete Chapter: "How We Met"
const STORY_DATA = {
    chapters: [
        {
            id: "chapter1",
            title: "Chapter 1: Our Story",
            scenes: [
                {
                    id: "intro",
                    text: `💕 Our Story 💕

Hey ${CUSTOMIZATION.partnerName},

I made something special for you. This is our story - from that first "Filo?" message to right now.

Every choice you make will unlock memories of our journey together.

Ready to relive our story?

- CJ`,
                    choices: [
                        {
                            label: "Let's begin 💕",
                            resultText: "Here's where it all started...",
                            nextSceneId: "scene1"
                        }
                    ]
                },
                {
                    id: "scene1",
                    text: `April 26th. King's Day in the Netherlands.

I was surrounded by orange everywhere people celebrating, music blasting, the whole city going crazy. Then my phone buzzed.

${CUSTOMIZATION.meetingPlace}.

We matched. I opened it and saw your profile. And then... I saw your message.

"Filo?" you asked.

Simple. Direct. I smiled at my screen.`,
                    choices: [
                        {
                            label: "ye",
                            resultText: `I kept it simple. "ye"

"how'd you know" I added.

You replied: "i saw it. in your personal information"

"ahhh" I typed. "i totally forgot i put it there"

Then I asked: "what's ur ethnicity?"

Simple. Natural. The conversation just... flowed.`,
                            nextSceneId: "scene2",
                            memoryUnlocked: {
                                title: "First Message: Filo?",
                                description: "April 26 • King's Day • The message that started everything."
                            }
                        }
                    ]
                },
                {
                    id: "scene2",
                    text: `Then you hit me with it.

"If I say 'ampogi mo,' what ethnicity would you think I am?"

I laughed out loud in the middle of King's Day. You were smooth. Confident. Bold.

I was already hooked.`,
                    choices: [
                        {
                            label: "ur filo too??",
                            resultText: `"ur filo too??" I typed back.

"yasssss" you replied.

"ahhh" I said, then added: "ang ganda mo po ate"

"luh. HAHAHAHAHAHAHA" you responded.

The way you laughed at everything. That energy. I was completely hooked.`,
                            nextSceneId: "scene3",
                            memoryUnlocked: {
                                title: "The Ampogi Line",
                                description: "When you came in smooth and I knew I was in trouble."
                            }
                        }
                    ]
                },
                {
                    id: "scene3",
                    text: `We kept talking. I asked about where you were born, your family, your studies.

The conversation flowed so naturally laughing about education systems, family, life in different countries.

Then I started asking about Tantan.

"so ilan kachat mo dito sa tantan ate" I asked.

"nawawala po silaaaa" you said. "parang bula. hindi nag lalast. HAHAHAHAHAHAH. isang araw pinakamatagal"

I couldn't help but laugh. "hahahahahahahaha ginoghost ka 🤣"

"yah HAHAHAHAHAHHA" you replied. "iba kasi hanap"

That's when I asked: "ano ba hanap mo"`,
                    choices: [
                        {
                            label: "Wait for her answer",
                            resultText: `"gagi i mean iba gusto nila" you said. "lam mo naman mga tao dito"

You were being careful. Testing the waters.

Then you slipped: "gusto ko ng bini. bini baby. ay haaa?????? maliii HAHAHAHAHAHAHAHA"

I saw my chance. "cge i baby kita ate"

I quickly added "typo. hahahaha"

But we both knew it wasn't really a typo.

"pano mo ko ma baby e. ate ka ng ate. hayst" you teased.

So I doubled down: "baby nalang kase"

"ay sir, typo po ata kayo HAHAHAHAHAHAHAHA" you replied.

"hahahahahaha typo nga" I played along.

"sana hindi 🤞" you sent.

"shitt jahahahahaha" I typed.

"gaho. gago HAHAHAHAHAHAHA" you laughed.

The flirting was unhinged. The energy was perfect. And I was absolutely here for it.`,
                            nextSceneId: "scene4",
                            memoryUnlocked: {
                                title: "Baby Era Begins",
                                description: "The 'typo' that changed everything €“ when baby became our thing."
                            }
                        }
                    ]
                },
                {
                    id: "scene4",
                    text: `The conversation kept flowing.

"te gustooo ko matulog ng maaga ngayon" you said. "pero parang d ako makatulog. ng dahil sayo HAHAHAHAHAHAHA"

"may work me tomorrow 🥲"

"anong oras work mo bukas baby" I asked.

"8am-8pm" you replied.

"8am??? wtf" I said.

"ya. carer 🙂"

Then you asked: "nag wo work kadin po ba dyan beb?"

"yess. kakatapos kolang baby" I replied.

"ano work mo?"

"restaurant" I told you. We talked about our schedules, our lives. It was getting late.

Then I said something I didn't plan.`,
                    choices: [
                        {
                            label: "tulog kana baby",
                            resultText: `"tulog kana baby. maaga kapa bukas" I typed.

We kept talking.

We kept talking \u2013 about work, about life, about everything.

Then you said: "i have to sleep now. see ya later. goodnight beb"

"goodnight babyy. talk to you tomorrow" I replied.

Then I added: "baka ighost moko"

"luh HAHAHAHAHAHA" you responded.

"hahahaha. may ig ka beb?" I asked.

"yassss. wow ig talaga haaaa HAHAHAHAHAHA. jabonillo_nycie"

"ano ba. number mo? hahahahaha" I pushed.

"HAHAHAHAHAHA e follow mo na. bago magbago isip ko"

"nafollow kuna po" I confirmed.

That night, something changed. We weren't just chatting anymore.

We were building something real.`,
                            nextSceneId: "scene5",
                            memoryUnlocked: {
                                title: "IG Exchange",
                                description: "When we moved from Tantan to Instagram \u2013 jabonillo_nycie. The moment it got real."
                            }
                        }
                    ]
                },
                {
                    id: "scene5",
                    text: `Few weeks later.

I was scrolling Instagram when I got the notification.

You were live.

I clicked in immediately. There you were on camera, talking, laughing, being you.

Then you said it:

"umiikot ung mundo ko."

I burst out laughing. That line. That delivery.

It stuck with me. Forever.

`,
                    choices: [
                        {
                            label: "Wait for the morning",
                            resultText: `The next day, I woke up to your message.

"hanggang saan ka naka view sa live? hanggang matapos?"

I knew I watched until the end. But during the live, I heard you and your friend talking about a date you had with someone.

My chest tightened. But I played it cool.

"uhmm, i think so" I replied.

Despite that moment of doubt, "umiikot ung mundo ko" became our inside joke.`,
                            nextSceneId: "scene6",
                            memoryUnlocked: {
                                title: "IG Live: Umiikot Ung Mundo Ko",
                                description: "The inside joke that nobody else understands €“ and we wouldn't have it any other way."
                            }
                        },
                        {
                            label: "Call him",
                            resultText: `Incoming call. From you.

But my phone was charging in the other room. By the time I got to it... missed call.`,
                            nextSceneId: "scene6",
                            memoryUnlocked: {
                                title: "IG Live: Umiikot Ung Mundo Ko",
                                description: "The inside joke that nobody else understands €“ and we wouldn't have it any other way."
                            }
                        }
                    ]
                },
                {
                    id: "scene6",
                    text: `Months went by. The texts never stopped. The calls got longer. The feelings got real.

One night, I stared at my phone. Then I opened a flight search.

Netherlands to UK.

I did something crazy.

I texted you: "I'm booking a flight to see you."

Three dots appeared. Then:

"Wait, seriously?"

"Ya, ayaw mo?"`,
                    choices: [
                        {
                            label: "React to his message",
                            resultText: `You sent a string of excited emojis. "I can't believe this is really happening."

"Me neither. But it is," I replied.

I clicked confirm.

Flight booked. Netherlands to London. Arrival: Heathrow.

Date: 28 October 2024.

This was real now. No more screens. No more distance.

Just us.`,
                            nextSceneId: "scene7",
                            memoryUnlocked: {
                                title: "The Flight",
                                description: "When I stopped overthinking and just booked it €“ Netherlands to Heathrow."
                            }
                        }
                    ]
                },
                {
                    id: "scene7",
                    text: `28 October 2024.

Heathrow Airport.

I walked through arrivals, heart pounding. Scanning the crowd.

And then, I saw you.

Really saw you.

Not a screen. Not a voice note. Not a pixelated live video.

You.

Our eyes met.

"Hi," you said, smiling nervous.

"Hi," I said back.

And just like that, everything made sense.`,
                    choices: [
                        {
                            label: "Let him hug you",
                            resultText: `I stepped forward and pulled you into a hug.

You laughed, a little breathless.

First meeting. Heathrow. October 28th. A moment I'll never forget.`,
                            nextSceneId: "scene8",
                            memoryUnlocked: {
                                title: "28 October 2024 €¢ Heathrow",
                                description: "The first time I saw you in real life €“ nervous, excited, unforgettable."
                            }
                        },
                        {
                            label: "Just smile at him",
                            resultText: `I just stood there for a second, taking you in.

First meeting. Heathrow. October 28th.

Everything felt right.`,
                            nextSceneId: "scene8",
                            memoryUnlocked: {
                                title: "28 October 2024 €¢ Heathrow",
                                description: "The first time I saw you in real life €“ nervous, excited, unforgettable."
                            }
                        }
                    ]
                },
                {
                    id: "scene8",
                    text: `More than a year later.

Things got complicated. Life pulled them in different directions. They had a rough patch.

They broke up.

For a while, it felt like that was it. Over.

But some things are too good to let go.`,
                    choices: [
                        {
                            label: "Reach out",
                            resultText: `${CUSTOMIZATION.playerName} sent a text about how he want to make things work again.
They talked. Really talked. About everything.

And they found their way back.`,
                            nextSceneId: "scene10",
                            memoryUnlocked: {
                                title: "Finding Our Way Back",
                                description: "We lost each other for a bit €“ but we found our way home."
                            }
                        }
                    ]
                },
                {
                    id: "scene10",
                    text: `From that first "Filo?" on ${CUSTOMIZATION.meetingPlace} to Heathrow on 28 October 2024. From "umiikot ung mundo ko" to "Too Good to Say Goodbye."

${CUSTOMIZATION.playerName} and ${CUSTOMIZATION.partnerName} had built something real.

They'd laughed until they cried. They'd fought and made up. They created inside jokes nobody else understood. They survived time zones, distance, and a breakup.

And through it all, they chose each other.

${CUSTOMIZATION.playerName} looked at ${CUSTOMIZATION.partnerName}, really looked at her and knew.

It was time.`,
                    imageURL: CUSTOMIZATION.photoURL,
                    choices: [
                        {
                            label: "So... will you be my Valentine? 💕",
                            resultText: `"${CUSTOMIZATION.partnerName}...

From that King's Day message to right now, every moment with you has been worth it. The chaos, the flirting, the flights, the rough patches, all of it.

You're my bebe, my 'ampogi' girl, the one who makes umiikot ung mundo ko. You're the person I want to keep choosing, every single day.

We're too good to say goodbye.

So... will you be my Valentine? 💕
 CJ"`,
                            nextSceneId: "end",
                            memoryUnlocked: {
                                title: "Our Beginning",
                                description: "Not the end €“ just the start of forever."
                            }
                        },
                        {
                            label: "So... will you be my Valentine? 💕",
                            resultText: `

I know things feel a bit rough right now, but I still want to ask you something from a genuine place.
I hope you’ll still be my Valentine.

I also want to be honest, I’m still trying to understand the blocking situation. I don’t fully get why it was okay for others to see what you posted, but not me, and that did make me overthink.

I won’t lie and say I didn’t overthink, but I’m better at controlling it than before. I know I can’t control what you do only how I react and I’m really trying to handle things more calmly and honestly.

I care about you, and I just wanted to be real about where I’m at.
 `,
                            nextSceneId: "end",
                            memoryUnlocked: {
                                title: "Say It Again",
                                description: "Because some questions deserve to be asked twice."
                            }
                        }
                    ]                },
                {
                    id: "end",
                    text: `💕 Thank you for playing our story! 💕

This is just the beginning. I can't wait to create more memories with you and write countless more chapters together.

(You can restart to make different choices and unlock all the memories!)`,
                    choices: []                }
            ]
        }
    ]
};

// ==================== 
// Game State Management
// ==================== 

let gameState = {
    chapterId: "chapter1",
    sceneId: "intro",
    history: [], // Array of {chapterId, sceneId, choiceIndex}
    memories: [] // Array of {title, description}
};

// LocalStorage keys
const STORAGE_KEY = "ourStoryGameState";

// ==================== 
// Core Game Functions
// ==================== 

function initGame() {
    loadGameState();
    renderScene();
    renderMemories();
    setupEventListeners();
}

function loadGameState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            gameState = JSON.parse(saved);
        } catch (e) {
            console.error("Failed to load saved game:", e);
            resetGameState();
        }
    }
}

function saveGameState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
}

function resetGameState() {
    gameState = {
        chapterId: "chapter1",
        sceneId: "intro",
        history: [],
        memories: []
    };
    saveGameState();
}

function getCurrentChapter() {
    return STORY_DATA.chapters.find(ch => ch.id === gameState.chapterId);
}

function getCurrentScene() {
    const chapter = getCurrentChapter();
    return chapter?.scenes.find(sc => sc.id === gameState.sceneId);
}

function getSceneIndex() {
    const chapter = getCurrentChapter();
    return chapter.scenes.findIndex(sc => sc.id === gameState.sceneId) + 1;
}

function getTotalScenes() {
    const chapter = getCurrentChapter();
    return chapter.scenes.length;
}

// ==================== 
// Rendering Functions
// ==================== 

function renderScene() {
    const scene = getCurrentScene();
    const chapter = getCurrentChapter();
    
    if (!scene || !chapter) {
        console.error("Scene or chapter not found");
        return;
    }
    
    // Update progress indicator
    const chapterNum = STORY_DATA.chapters.findIndex(ch => ch.id === gameState.chapterId) + 1;
    const sceneNum = getSceneIndex();
    const totalScenes = getTotalScenes();
    document.getElementById("progressText").textContent = 
        `Chapter ${chapterNum} • Scene ${sceneNum}/${totalScenes}`;
    
    // Update scene text
    const sceneTextEl = document.getElementById("sceneText");
    sceneTextEl.innerHTML = scene.text.split('\n\n').map(p => `<p>${p}</p>`).join('');
    
    // Handle optional image
    const sceneImageEl = document.getElementById("sceneImage");
    const sceneImgEl = document.getElementById("sceneImg");
    if (scene.imageURL && scene.imageURL.trim()) {
        sceneImgEl.src = scene.imageURL;
        sceneImageEl.style.display = "block";
    } else {
        sceneImageEl.style.display = "none";
    }
    
    // Clear result text initially
    document.getElementById("resultText").style.display = "none";
    
    // Render choices
    renderChoices(scene.choices);
    
    // Show/hide back button
    const backBtn = document.getElementById("backBtn");
    backBtn.style.display = gameState.history.length > 0 ? "block" : "none";
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderChoices(choices) {
    const choicesSection = document.getElementById("choicesSection");
    choicesSection.innerHTML = "";
    
    if (choices.length === 0) {
        // End of chapter or story
        return;
    }
    
    choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.className = "choice-btn";
        button.textContent = choice.label;
        button.onclick = () => handleChoice(index);
        choicesSection.appendChild(button);
    });
}

function renderMemories() {
    const memoriesGrid = document.getElementById("memoriesGrid");
    
    if (gameState.memories.length === 0) {
        memoriesGrid.innerHTML = '<p class="no-memories">No memories unlocked yet...</p>';
        return;
    }
    
    memoriesGrid.innerHTML = "";
    gameState.memories.forEach(memory => {
        const card = document.createElement("div");
        card.className = "memory-card";
        card.innerHTML = `
            <h3>${memory.title}</h3>
            <p>${memory.description}</p>
        `;
        memoriesGrid.appendChild(card);
    });
}

// ==================== 
// Game Logic
// ==================== 

function handleChoice(choiceIndex) {
    const scene = getCurrentScene();
    const choice = scene.choices[choiceIndex];
    
    // Save current state to history
    gameState.history.push({
        chapterId: gameState.chapterId,
        sceneId: gameState.sceneId,
        choiceIndex: choiceIndex
    });
    
    // Show result text if available
    if (choice.resultText) {
        const resultTextEl = document.getElementById("resultText");
        resultTextEl.innerHTML = `<p>${choice.resultText}</p>`;
        resultTextEl.style.display = "block";
        
        // Hide choices temporarily
        document.getElementById("choicesSection").innerHTML = "";
        
        // Show a continue button
        const continueBtn = document.createElement("button");
        continueBtn.className = "choice-btn";
        continueBtn.textContent = "Continue †’";
        continueBtn.onclick = () => continueToNextScene(choice);
        document.getElementById("choicesSection").appendChild(continueBtn);
    } else {
        continueToNextScene(choice);
    }
}

function continueToNextScene(choice) {
    // Unlock memory if present
    if (choice.memoryUnlocked) {
        const memoryExists = gameState.memories.some(
            m => m.title === choice.memoryUnlocked.title
        );
        if (!memoryExists) {
            gameState.memories.push(choice.memoryUnlocked);
            renderMemories();
        }
    }
    
    // Move to next scene
    gameState.sceneId = choice.nextSceneId;
    
    // Save state
    saveGameState();
    
    // Render new scene
    renderScene();
}

function goBack() {
    if (gameState.history.length === 0) return;
    
    // Pop the last history entry
    const lastState = gameState.history.pop();
    
    // Restore to that state
    gameState.chapterId = lastState.chapterId;
    gameState.sceneId = lastState.sceneId;
    
    // Save and render
    saveGameState();
    renderScene();
}

function restartGame() {
    if (confirm("Are you sure you want to restart? This will reset your progress and memories.")) {
        resetGameState();
        renderScene();
        renderMemories();
    }
}

// ==================== 
// Event Listeners
// ==================== 

function setupEventListeners() {
    document.getElementById("backBtn").addEventListener("click", goBack);
    document.getElementById("restartBtn").addEventListener("click", restartGame);
}

// ==================== 
// Initialize Game on Load
// ==================== 

document.addEventListener("DOMContentLoaded", initGame);


