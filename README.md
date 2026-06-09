![hero-samosa](public/hero-samosa.png)
# Samosa Selector

**Samosa Selector** is an incremental game based on the concept of "Cookie Clicker," where users aim to produce as many samosas as possible by clicking on a central image. This project was developed as part of a web development lab to practice React state management and event handling.

### 📔 Table of Contents
* [About the Project](#-about-the-project)
    * [Tech Stack](#-tech-stack)
    * [Features](#-features)
* [Getting Started](#-getting-started)
    * [Prerequisites](#-prerequisites)
    * [Installation](#-installation)
    * [Run Locally](#-run-locally)
* [Usage](#-usage)
* [Roadmap](#-roadmap)
* [Contact](#-contact)
* [Acknowledgements](#-acknowledgements)

---

### 🌟 About the Project

The goal of Samosa Selector is to accumulate samosas through repetitive clicking and strategic purchasing of upgrades. As the player's "samosa count" grows, they can unlock various packs that increase the number of samosas earned per click.

#### 👾 Tech Stack
* **Framework:** React.js
* **Build Tool:** Vite
* **Styling:** CSS
* **Hooks:** `useState` for managing game state

#### 🎯 Features
* **Clicker Mechanics:** A large, interactive samosa image that increases the count when clicked.
* **Live Counter:** A dynamic display showing the current number of samosas harvested.
* **Tiered Upgrades:** Three distinct upgrade options that increase the effectiveness of each click:
    * **Double Stuffed:** Produces 2x per click (Costs 10 samosas).
    * **Party Pack:** Produces 5x per click (Costs 100 samosas).
    * **Full Feast:** Produces 10x per click (Costs 1000 samosas).
* **Visual Pulse Effect:** The samosa image grows when hovered and shrinks when clicked to provide tactile feedback.
* **Economy Management:** Purchasing an upgrade automatically deducts the cost from the total samosa count.

---

### 🧰 Getting Started

#### ‼ Prerequisites
To run this project locally, you will need to have **Node.js** and **npm** installed on your system.

#### ⚙ Installation
Install the project dependencies using npm:
```bash
npm install
```

#### 🏃 Run Locally
Go to the project directory and start the Vite development server:
```bash
npm run dev
```

---

### 👀 Usage
To play, click the central samosa to begin earning points. Once you have enough samosas, click on an upgrade button (Double Stuffed, Party Pack, or Full Feast) to increase your multiplier. The game continues indefinitely, allowing you to reach gigantic samosa totals.

---

### 🧭 Roadmap
- [x] Initialize React project with Vite
- [x] Create basic UI with Samosa image and counter
- [x] Implement `useState` for tracking count and multiplier
- [x] Add upgrade buttons with conditional purchasing logic
- [x] Implement deduction of points upon purchase
- [x] Add CSS animations for the pulse effect

---

### 🤝 Contact
**Project Link:** [https://github.com/DeveloperThierry/samosa-selector.git](https://github.com/DeveloperThierry/samosa-selector.git)

---

### 💎 Acknowledgements
* [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/) - Original game inspiration.
* [CodePath WEB102](https://www.codepath.org/) - Lab curriculum provider.
* [Awesome README Template](https://github.com/Louis3797/awesome-readme-template) - Documentation structure.