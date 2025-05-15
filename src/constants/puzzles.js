import Puzzle1 from '../components/Puzzle1';
import Puzzle2 from '../components/Puzzle2';
import Puzzle3 from '../components/Puzzle3';
import Puzzle4 from '../components/Puzzle4';
import Puzzle5 from '../components/Puzzle5';

export const puzzles = [
    { 
        title: "1 - Simple Counter App", 
        description: "Create a React application that displays a simple counter. The counter should initially display 0 and have two buttons to increment or decrement the count. The count should update accordingly when a button is clicked.",
        component: Puzzle1
    },
    { 
        title: "2 - Dynamic List of Items with Strikethrough", 
        description: "Create a React application that displays a dynamic list of items. Each item in the list should have a checkbox that, when clicked, adds a strikethrough to the item's text, indicating it as completed.",
        component: Puzzle2
    },
    { 
        title: "3 - Color Picker with Hex Code Display", 
        description: "Create a React application that displays a color picker. The color picker should allow users to select a color and display the corresponding hex code.",
        component: Puzzle3
    },
    { 
        title: "4 - Password Strength Checker", 
        description: "Create a React application that checks the strength of a password entered by the user. The application should display a visual indicator of the password's strength, with the following criteria: Weak (less than 8 characters) Medium (8-12 characters) Strong (more than 12 characters)",
        component: Puzzle4
    },
    { 
        title: "5 - Countdown Timer with Audio", 
        description: "Create a React application that displays a countdown timer with an audio cue when the timer reaches zero.",
        component: Puzzle5
    },
]