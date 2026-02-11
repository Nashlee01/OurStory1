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
    favoriteSong: "Too Good to Say Goodbye — Bruno Mars",
    photoURL: "assets/us.jpg"
};

// Story Content - Complete Chapter: "How We Met"
const STORY_DATA = {
    chapters: [
        {
            id: "chapter1",
            title: "Chapter 1: How We Met",
            scenes: [
                {
                    id: "scene1",
                    text: `It was just another day in the Netherlands, April 27th – King's Day. The streets were alive with orange, music, and celebration. ${CUSTOMIZATION.playerName} was enjoying the festivities when a notification lit up the phone screen.

${CUSTOMIZATION.meetingPlace}. A dating app ${CUSTOMIZATION.playerName} had almost forgotten about. But this notification... this one felt different somehow.

Someone had matched. ${CUSTOMIZATION.playerName} opened the app and saw her profile – ${CUSTOMIZATION.partnerName}. And then, a message...

"Filo?"`,
                    choices: [
                        {
                            label: "Reply: 'Yes! Are you Filipino too?'",
                            resultText: `${CUSTOMIZATION.playerName} smiled and quickly typed back: "Yes! Are you Filipino too?" There was something exciting about this simple question – a connection that felt instant, even through a screen.`,
                            nextSceneId: "scene2",
                            memoryUnlocked: {
                                title: "First Message: 'Filo?'",
                                description: "That simple word that started everything. Who knew three letters could change a life?"
                            }
                        },
                        {
                            label: "Reply: 'Yeah! What gave it away? 😄'",
                            resultText: `${CUSTOMIZATION.playerName} grinned and sent: "Yeah! What gave it away? 😄" The King's Day celebrations continued around, but suddenly all that mattered was this conversation.`,
                            nextSceneId: "scene2",
                            memoryUnlocked: {
                                title: "First Message: 'Filo?'",
                                description: "That simple word that started everything. Who knew three letters could change a life?"
                            }
                        },
                        {
                            label: "Reply: 'Yes! Happy King's Day btw!'",
                            resultText: `${CUSTOMIZATION.playerName} typed back enthusiastically: "Yes! Happy King's Day btw!" Maybe sharing the moment would make the conversation more memorable. Spoiler: it definitely did.`,
                            nextSceneId: "scene2",
                            memoryUnlocked: {
                                title: "King's Day Connection",
                                description: "We started talking on King's Day in the Netherlands – a day of celebration that became even more special."
                            }
                        }
                    ]
                },
                {
                    id: "scene2",
                    text: `The reply came faster than expected. ${CUSTOMIZATION.playerName}'s phone buzzed again.

"If I say 'ampogi,' what ethnicity would you think I am?" 

${CUSTOMIZATION.playerName} laughed out loud, getting a few curious looks from the orange-clad crowd. This girl had game. 'Ampogi' – a Tagalog word meaning 'so handsome.' She was smooth, funny, and definitely Filipino.`,
                    choices: [
                        {
                            label: "Reply: 'Haha definitely Filipino! Smooth line btw 😊'",
                            resultText: `${CUSTOMIZATION.playerName} typed: "Haha definitely Filipino! Smooth line btw 😊" There was something charming about her confidence. ${CUSTOMIZATION.partnerName} responded with a laughing emoji and "Thank you, I try 😌"`,
                            nextSceneId: "scene3",
                            memoryUnlocked: {
                                title: "The Ampogi Line",
                                description: "When Nycie dropped the smoothest pickup line and we both knew this was going to be fun."
                            }
                        },
                        {
                            label: "Reply: 'That's the best line I've heard all day 😂'",
                            resultText: `${CUSTOMIZATION.playerName} sent: "That's the best line I've heard all day 😂" It was true. King's Day was great, but this conversation was already the highlight. ${CUSTOMIZATION.partnerName} replied: "All day? I'm aiming for all week!"`,
                            nextSceneId: "scene3",
                            memoryUnlocked: {
                                title: "The Ampogi Line",
                                description: "When Nycie dropped the smoothest pickup line and we both knew this was going to be fun."
                            }
                        }
                    ]
                },
                {
                    id: "scene3",
                    text: `The conversation flowed effortlessly. Messages flew back and forth – about life in the Netherlands, Filipino food they missed, funny stories, dreams, and random thoughts. Hours passed in what felt like minutes.

They talked about everything: favorite movies, embarrassing moments, what they were doing in the Netherlands, their families back home. ${CUSTOMIZATION.playerName} learned that ${CUSTOMIZATION.partnerName} had this amazing laugh and a way with words that made even mundane topics interesting.

As the King's Day celebrations wound down, the conversation was just getting started...`,
                    choices: [
                        {
                            label: "Suggest video calling sometime",
                            resultText: `${CUSTOMIZATION.playerName} took a chance: "This is fun, but I bet you're even funnier in person... or video call? 😊" ${CUSTOMIZATION.partnerName} replied almost immediately: "Smooth! I like it. Let's do it."`,
                            nextSceneId: "scene4",
                            memoryUnlocked: {
                                title: "Taking It Further",
                                description: "When we decided that messages weren't enough – we needed to see each other."
                            }
                        },
                        {
                            label: "Ask if she wants to meet up",
                            resultText: `${CUSTOMIZATION.playerName} felt bold: "So... when can I actually meet you? Coffee? Dinner? Walk?" ${CUSTOMIZATION.partnerName} sent a smiling emoji: "Someone's confident! I like that. Let's meet up."`,
                            nextSceneId: "scene4",
                            memoryUnlocked: {
                                title: "Taking It Further",
                                description: "When we decided that messages weren't enough – we needed to see each other."
                            }
                        }
                    ]
                },
                {
                    id: "scene4",
                    text: `Days turned into weeks, weeks into months. What started as messages on ${CUSTOMIZATION.meetingPlace} evolved into video calls, late-night conversations, meeting up for coffee, dinners, walks through Dutch streets, and creating countless inside jokes.

One evening after a fun night out, ${CUSTOMIZATION.partnerName} had a few drinks and got that adorable tipsy glow. She looked at ${CUSTOMIZATION.playerName} with slightly unfocused but happy eyes and said something that would become *their* thing...

"${CUSTOMIZATION.insideJoke}..." (the world is spinning)`,
                    choices: [
                        {
                            label: "Laugh and hold her steady",
                            resultText: `${CUSTOMIZATION.playerName} laughed and gently held her steady. "Easy there! How many did you have?" ${CUSTOMIZATION.partnerName} giggled. "Not that many! The world just likes spinning when I'm with you." From that moment, "${CUSTOMIZATION.insideJoke}" became their special phrase – a reminder of that perfect, silly, loving moment.`,
                            nextSceneId: "scene5",
                            memoryUnlocked: {
                                title: "Umiikot Ung Mundo Ko",
                                description: "Our inside joke that nobody else gets – born from a tipsy night and endless laughter."
                            }
                        }
                    ]
                },
                {
                    id: "scene5",
                    text: `Everything felt perfect. They had found something real – something worth holding onto. But life isn't always simple, and sometimes even the best relationships face storms.

There was a time when things got complicated. Misunderstandings, doubts, different paths pulling them in different directions. They went their separate ways for a while.

Those months apart were hard. ${CUSTOMIZATION.playerName} missed ${CUSTOMIZATION.partnerName}'s laugh, her texts, her presence. And ${CUSTOMIZATION.partnerName} missed ${CUSTOMIZATION.playerName} too – more than she wanted to admit.`,
                    choices: [
                        {
                            label: "Reach out to her",
                            resultText: `${CUSTOMIZATION.playerName} finally worked up the courage and sent a simple message: "I miss you." Three words. Three incredibly important words. ${CUSTOMIZATION.partnerName} replied almost immediately: "I miss you too. Can we talk?"`,
                            nextSceneId: "scene6",
                            memoryUnlocked: {
                                title: "Finding Our Way Back",
                                description: "We lost our way for a bit, but found each other again – stronger and more sure than ever."
                            }
                        },
                        {
                            label: "Wait and hope she reaches out",
                            resultText: `${CUSTOMIZATION.playerName} waited, hoping. And then, one evening, the phone buzzed. ${CUSTOMIZATION.partnerName}: "Hey... can we talk? I've been thinking about us." ${CUSTOMIZATION.playerName}'s heart leaped. "I'd like that. I've been thinking about you too."`,
                            nextSceneId: "scene6",
                            memoryUnlocked: {
                                title: "Finding Our Way Back",
                                description: "We lost our way for a bit, but found each other again – stronger and more sure than ever."
                            }
                        }
                    ]
                },
                {
                    id: "scene6",
                    text: `They talked for hours – really talked. About what went wrong, what they learned, what they wanted. And they realized something important: they were better together. The time apart taught them what they had was rare and worth fighting for.

They decided to try again – this time with more honesty, more patience, more understanding. And it was even better the second time around. They knew what they could lose, so they held on tighter.

One evening, ${CUSTOMIZATION.partnerName} took ${CUSTOMIZATION.playerName}'s hand. "You know what? I'm glad we went through everything we did. It brought us here – to this version of us. And I love this version."`,
                    choices: [
                        {
                            label: "Tell her you feel the same",
                            resultText: `${CUSTOMIZATION.playerName} squeezed her hand. "Me too. Every challenge made us stronger. And I wouldn't change a thing because it led us here." They smiled at each other, and it felt like coming home.`,
                            nextSceneId: "scene7",
                            memoryUnlocked: {
                                title: "Stronger Together",
                                description: "We learned that love isn't perfect, but it's worth it – especially with the right person."
                            }
                        },
                        {
                            label: "Kiss her gently",
                            resultText: `${CUSTOMIZATION.playerName} leaned in and kissed her gently – a kiss that said everything words couldn't. When they pulled apart, ${CUSTOMIZATION.partnerName} smiled. "I love you." "I love you too."`,
                            nextSceneId: "scene7",
                            memoryUnlocked: {
                                title: "Stronger Together",
                                description: "We learned that love isn't perfect, but it's worth it – especially with the right person."
                            }
                        }
                    ]
                },
                {
                    id: "scene7",
                    text: `As the sun started to set, painting the sky in shades of pink and gold, they found a bench overlooking a small pond. ${CUSTOMIZATION.partnerName} leaned their head on ${CUSTOMIZATION.playerName}'s shoulder.

"This has been perfect," ${CUSTOMIZATION.partnerName} whispered.

"It really has," ${CUSTOMIZATION.playerName} agreed, heart so full it could burst.

Then ${CUSTOMIZATION.partnerName} brought up ${CUSTOMIZATION.insideJoke}, and they both burst into laughter, earning curious looks from passersby. It became their thing – a joke only they understood.`,
                    choices: [
                        {
                            label: "Tell them how you feel",
                            resultText: `${CUSTOMIZATION.playerName} took a deep breath. "I know we just met, but I really like spending time with you. I can't remember the last time I felt this... happy." ${CUSTOMIZATION.partnerName} looked up, eyes shining. "Me too. Let's keep doing this – making memories together."`,
                            nextSceneId: "scene_final",
                            memoryUnlocked: {
                                title: "A Perfect Day",
                                description: "The day we knew this was something special – something worth holding onto."
                            }
                        }
                    ]
                },
                {
                    id: "scene_final",
                    text: `They built a life together, moment by moment. They discovered their shared love for Bruno Mars, especially "${CUSTOMIZATION.favoriteSong}" – a song that seemed written just for them. Every time it played, they'd look at each other and smile.

They created countless memories: cooking Filipino food together, late-night talks, dancing in the living room, dealing with life's ups and downs, always together.

One evening, ${CUSTOMIZATION.partnerName} took ${CUSTOMIZATION.playerName} somewhere special – a quiet rooftop with a view of the city lights, decorated with fairy lights that twinkled like stars. The perfect romantic setting.`,
                    imageURL: CUSTOMIZATION.photoURL,
                    choices: [
                        {
                            label: "Put on 'Too Good to Say Goodbye'",
                            resultText: `${CUSTOMIZATION.playerName} pulled out a phone and played their song – "${CUSTOMIZATION.favoriteSong}" by Bruno Mars. As the familiar melody filled the air, ${CUSTOMIZATION.partnerName} smiled. "Our song." They swayed together under the fairy lights, wrapped in the moment and in each other.`,
                            nextSceneId: "scene8",
                            memoryUnlocked: {
                                title: "Our Song",
                                description: "'Too Good to Say Goodbye' by Bruno Mars – the song that's ours, forever and always."
                            }
                        },
                        {
                            label: "Tell her this moment is perfect",
                            resultText: `"This is perfect," ${CUSTOMIZATION.playerName} whispered, looking at the fairy lights, the city view, and most importantly – at ${CUSTOMIZATION.partnerName}. "You make everything perfect," she replied, leaning against him. The world could have been spinning, but in that moment, everything was exactly where it should be.`,
                            nextSceneId: "scene8",
                            memoryUnlocked: {
                                title: "Rooftop Magic",
                                description: "Under fairy lights with the city below us, everything felt like a dream come true."
                            }
                        }
                    ]
                },
                {
                    id: "scene8",
                    text: `One evening, ${CUSTOMIZATION.partnerName} took ${CUSTOMIZATION.playerName} to their favorite spot in the city – a quiet rooftop garden that few people knew about. Under the stars, surrounded by flowers and fairy lights...`,
                    imageURL: CUSTOMIZATION.photoURL,
                    choices: [
                        {
                            label: "This moment is perfect",
                            resultText: `${CUSTOMIZATION.playerName} smiled at ${CUSTOMIZATION.partnerName} in the fairy lights. "This moment – you and me, right here. It's perfect." ${CUSTOMIZATION.partnerName} squeezed their hand. "With you, every moment is perfect."`,
                            nextSceneId: "scene_proposal",
                            memoryUnlocked: {
                                title: "Perfect Moment",
                                description: "A moment where everything felt absolutely right – just the two of us."
                            }
                        }
                    ]
                },
                {
                    id: "scene_proposal",
                    text: `From that first "Filo?" message on ${CUSTOMIZATION.meetingPlace} to this moment, ${CUSTOMIZATION.playerName} and ${CUSTOMIZATION.partnerName} have built something incredible together.

They've laughed until they cried, weathered storms and came out stronger, created inside jokes nobody else understands, and found in each other a partner, best friend, and home.

Every challenge made them appreciate the good times more. Every moment apart made them treasure being together. And through it all, they learned that real love isn't perfect – it's choosing each other, again and again.

${CUSTOMIZATION.playerName} looked at ${CUSTOMIZATION.partnerName} in the fairy lights, heart full of love and certainty. It was time to ask an important question...`,
                    choices: [
                        {
                            label: "So... will you be my Valentine? 💕",
                            resultText: `"${CUSTOMIZATION.partnerName}, from that first message to this moment, every day with you has been a gift. We've been through so much together – the fun times, the hard times, and everything in between. And I wouldn't change a thing because it all led us here.

You're my favorite person, my inside joke keeper, my 'ampogi' flirt, the one who makes my world spin (${CUSTOMIZATION.insideJoke}, right? 😊). You're the person I want to keep making memories with, the one I want to share every Bruno Mars song with, the one I choose every single day.

So, ${CUSTOMIZATION.partnerName}... will you be my Valentine? 💕

— CJ"`,
                            nextSceneId: "end",
                            memoryUnlocked: {
                                title: "Our Beginning",
                                description: "Not the end of our story – just the end of Chapter 1. Forever more chapters to write together."
                            }
                        }
                    ]
                },
                {
                    id: "scene8",
                    text: `From that first "Filo?" message on ${CUSTOMIZATION.meetingPlace} to this moment, ${CUSTOMIZATION.playerName} and ${CUSTOMIZATION.partnerName} have built something incredible together.

They've laughed until they cried, weathered storms and came out stronger, created inside jokes nobody else understands, and found in each other a partner, best friend, and home.

Every challenge made them appreciate the good times more. Every moment apart made them treasure being together. And through it all, they learned that real love isn't perfect – it's choosing each other, again and again.

${CUSTOMIZATION.playerName} looked at ${CUSTOMIZATION.partnerName} in the fairy lights, heart full of love and certainty. It was time to ask an important question...`,
                    choices: [
                        {
                            label: "So... will you be my Valentine? 💕",
                            resultText: `"${CUSTOMIZATION.partnerName}, from that first message to this moment, every day with you has been a gift. We've been through so much together – the fun times, the hard times, and everything in between. And I wouldn't change a thing because it all led us here.

You're my favorite person, my inside joke keeper, my 'ampogi' flirt, the one who makes my world spin (${CUSTOMIZATION.insideJoke}, right? 😊). You're the person I want to keep making memories with, the one I want to share every Bruno Mars song with, the one I choose every single day.

So, ${CUSTOMIZATION.partnerName}... will you be my Valentine? 💕

— CJ"`,
                            nextSceneId: "end",
                            memoryUnlocked: {
                                title: "Our Beginning",
                                description: "Not the end of our story – just the end of Chapter 1. Forever more chapters to write together."
                            }
                        }
                    ]
                },
                {
                    id: "end",
                    text: `💕 Thank you for playing our story! 💕

This is just the beginning. I can't wait to create more memories with you and write countless more chapters together.

(You can restart to make different choices and unlock all the memories!)`,
                    choices: []
                }
            ]
        }
    ]
};

// ==================== 
// Game State Management
// ==================== 

let gameState = {
    chapterId: "chapter1",
    sceneId: "scene1",
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
        sceneId: "scene1",
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
        continueBtn.textContent = "Continue →";
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
