# react-rive-animation

This project is a React application that displays a Rive animation with interactive controls. Users can toggle four boolean inputs using checkboxes to modify the animation's behavior.

## Project Structure

- `src/components/Animation.tsx`: Component for loading and displaying the Rive animation.
- `src/components/Controls.tsx`: Component for rendering checkboxes to control boolean inputs.
- `src/App.tsx`: Main application component that integrates the animation and controls.
- `src/index.tsx`: Entry point of the React application.
- `src/types.ts`: TypeScript types and interfaces used in the application.
- `src/assets/animation.riv`: The Rive animation file.
- `public/index.html`: Main HTML file for the React application.
- `package.json`: Configuration file for npm dependencies.
- `tsconfig.json`: TypeScript configuration file.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-rive-animation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Use the checkboxes below the animation to toggle the boolean inputs:
  - **Outer?**
  - **OnlySuggestions?**
  - **Success?**
  - **Warning?**

The animation will update based on the selected options.