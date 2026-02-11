# 💕 Our Story: The Game

An interactive romantic narrative game built with vanilla HTML, CSS, and JavaScript. A personalized Valentine's Day experience that tells the story of CJ and Nycie.

## ✨ Features

- **Interactive Story**: Make choices that shape the narrative
- **Memory Unlocking System**: Collect special memories as you progress through the story
- **Auto-Save**: Uses localStorage to automatically save progress
- **Mobile-First Design**: Optimized for phone screens with comfortable touch targets
- **No Dependencies**: Pure vanilla JavaScript - no frameworks or build steps
- **GitHub Pages Ready**: Deploy instantly to share with your loved one

## 🚀 Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start playing!

No server, no build tools, no installation needed.

### Deploy to GitHub Pages

1. **Create a GitHub repository** (if you haven't already):
   - Go to [github.com](https://github.com) and create a new repository
   - Name it whatever you like (e.g., `our-story-game`)

2. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Our Story Game"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under "Source", select **Deploy from a branch**
   - Choose branch: **main** and folder: **/ (root)**
   - Click **Save**

4. **Access your game**:
   - After a few minutes, your game will be live at:
   - `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   - Share this URL with your special someone! 💕

## 📱 Playing the Game

1. Read through the story of how CJ and Nycie met
2. Make choices that unlock different memories
3. There are no wrong choices - all paths lead forward
4. Progress is auto-saved, so you can close the tab and resume later
5. Use the **Back** button to revisit previous scenes
6. Click **Restart** to play again and explore different choices
7. Collect all the memories to complete the full story!

## 🎨 Customization

To personalize this game with your own story, edit the `CUSTOMIZATION` object in [game.js](game.js):

```javascript
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
```

### Adding Your Photo

1. Create an `assets` folder in your project
2. Add your photo as `us.jpg` (or change the filename in `photoURL`)
3. The image will appear in the romantic rooftop scene

## 📂 Project Structure

```
/
├── index.html       # Main HTML structure
├── styles.css       # Mobile-first styling
├── game.js          # Game logic and story content
├── README.md        # This file
└── assets/          # (Optional) Place your images here
    └── us.jpg       # Your photo for the rooftop scene
```

## 💡 Technical Details

- **No frameworks**: Built with vanilla HTML, CSS, and JavaScript
- **No backend**: Everything runs in the browser
- **localStorage**: Saves progress automatically
- **Mobile-first**: Optimized for phones with touch-friendly buttons (min 48px height)
- **Responsive**: Works beautifully on phones, tablets, and desktops
- **Accessible**: Semantic HTML and proper color contrast

## ❤️ Credits

Made with 💕 by CJ for Nycie

---

**Happy Valentine's Day! 💕**
