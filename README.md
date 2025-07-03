# 🌍 PharmaQuest — A Medicine-Based Geography Quiz Game

PharmaQuest is an educational web-based adventure game built with **Next.js** and **TypeScript**. Players explore a world map, visit various countries, and solve medicine-related quizzes to unlock new regions and earn XP. Designed to promote global health awareness and geography knowledge, the game offers a fun and interactive way to learn about medicines and diseases around the world.

---

## 🚀 Features

- 🌐 Interactive world map with six countries: Bangladesh, Japan, Australia, Sweden, Spain, and England.
- 🔒 Locked countries that require completing previous challenges to unlock.
- 🧠 3–5 multiple-choice medicine-related questions per country.
- 🏆 Players must score **80% or higher** to unlock the next country.
- 💾 Progress and scores are saved using **Local Storage**.
- 🎮 Intuitive and clean game flow: Home → Quiz Adventure → Game Over.

---

## 🧩 Game Flow

### ✅ Home Page
- Welcomes player with a "Start" button.
- Asks for the player's name.

### 🌍 Game Page
- Displays the world map with country pins.
- Shows player’s name and score.
- Locked countries show a modal when clicked.
- Unlocked countries open a quiz modal.
- On quiz completion:
  - If score ≥ 80%, the user unlocks one new country.
  - If score < 80%, the player can retry later.

### ❌ Game Over Page
- Shown when all countries are completed.
- Displays final score.
- Option to restart from Home.

---

## 🛠️ Technologies Used

| Tech              | Description                                |
|------------------|--------------------------------------------|
| [Next.js](https://nextjs.org/) | React framework for server/client rendering |
| [TypeScript](https://www.typescriptlang.org/) | Typed superset of JavaScript         |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework           |
| LocalStorage      | For saving player progress and score       |

---

## 🧰 Tools & Libraries

| Library | Purpose |
|--------|---------|
| [`mapbox-gl`](https://github.com/mapbox/mapbox-gl-js) | Interactive globe and map rendering |
| [`lottie-web`](https://github.com/airbnb/lottie-web) | Lightweight animations using JSON |
| [`classnames`](https://github.com/JedWatson/classnames) | Conditional class name management |
| [`react-simple-typewriter`](https://github.com/alan2207/react-simple-typewriter) | Typewriter effect in React components |
| [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) | Utility to intelligently merge Tailwind CSS class strings |

---

## 📂 Folder Structure (Simplified)
```js
pharmaquest/
|-src/
|  |- app
|  ├── components/
|  ├── data/
├── public/
|--next.config.ts
|-- package.json
|-- pnpm-lock.yaml
|-- postcss.config.mjs
|── README.md
|-- tsconfig.json
```


## 🧪 How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/Sajal13/pharma_quest.git
cd pharmaquest
```
### 2. Install dependencies
```bash
  pnpm i
```
### 3. Run the development server

```bash
  pnpm run dev

```
### 4. .env variables update
update the env variables in map.
### 5. Open in browser
Visit http://localhost:3000 to play the game.




