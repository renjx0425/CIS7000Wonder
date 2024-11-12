# Wonder Perspective Tool

An interactive tool designed to allow students to explore character perspectives in *Wonder* by R.J. Palacio. This web application helps students switch between different characters' viewpoints, fostering empathy and a deeper understanding of the story's emotional dynamics.

## Features

- **Perspective Switching**: Users can switch between multiple characters to view each scene from different perspectives.
- **Scene Navigation**: A timeline allows easy navigation through key scenes in the story.
- **Reflection Prompts**: Reflection questions encourage students to think about each character’s emotions and motivations.
- **Responsive Design**: Optimized for both desktop and tablet use, with accessible design considerations.

## Project Structure

```plaintext
CIS7000Wonder/
├── public/
│   ├── assets/
│   │   ├── auggie_icon.png
│   │   ├── jack_icon.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CharacterToggle.js
│   │   ├── SceneDisplay.js
│   │   ├── ReflectionModal.js
│   │   ├── Timeline.js
│   │   └── PerspectiveSwitcher.js
│   ├── data/
│   │   └── scenes.json
│   ├── utils/
│   │   └── transitionUtils.js
│   ├── styles/
│   │   ├── CharacterToggle.css
│   │   ├── PerspectiveSwitcher.css
│   │   ├── ReflectionModal.css
│   │   └── Timeline.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```


### Key Files

- **`scenes.json`**: Contains the scene and perspective data.
- **`CharacterToggle.js`**: A component to switch between character perspectives.
- **`SceneDisplay.js`**: Displays the current scene and perspective.
- **`Timeline.js`**: Provides a navigable timeline for scene selection.
- **`PerspectiveSwitcher.js`**: Manages the smooth transition between perspectives.
- **`ReflectionModal.js`**: Displays reflection prompts for deeper engagement.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/renjx0425/CIS7000Wonder.git
   cd CIS7000Wonder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```
   This will start the application locally at `http://localhost:3000`.

## Usage

1. **Character Selection**: Use the character icons to switch between perspectives.
2. **Navigate Scenes**: Use the timeline at the bottom to navigate between key scenes in the story.
3. **Reflection Prompts**: After viewing each perspective, reflection questions appear to prompt thoughts on the character's experiences and feelings.

## Customization

- **Adding New Scenes**: Update `scenes.json` with additional scenes or perspectives.
- **Styling**: Customize the CSS files in `src/styles/` for a different visual theme.
- **Backend Integration**: Integrate a backend to save students' responses to reflection prompts by replacing `localStorage` in `ReflectionModal`.

## Deployment

The project can be deployed on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

1. Push your repository to GitHub or a similar platform.
2. Link the repository to your chosen deployment platform.
3. Follow the platform’s instructions to deploy and share the tool with students.

## Contributing

Contributions are welcome! If you'd like to enhance the tool or fix bugs, please:
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## Acknowledgements

Inspired by *Wonder* by R.J. Palacio, with a focus on empathy-building and understanding multiple perspectives.

---

By using this interactive tool, students can gain deeper insights into the characters’ experiences, which lie at the heart of *Wonder*'s message. This project aims to provide an engaging and educational experience through perspective-taking and empathy-building.
```
