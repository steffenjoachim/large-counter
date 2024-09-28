# Large Counter Application

## Description

This application features a large counter that increases its value every time a user interacts with the main area of the website by clicking or pressing the Enter or Space key. 

### Features

- **Counter Functionality**: The counter increments by 1 each time the user clicks anywhere in the main area or presses the Enter or Space key on their keyboard.
  
- **Reset Button**: A reset button is provided to reset the counter back to **0**. When this button is clicked, the counter value displays **0**, and the background color is reset to **0%**.

- **Dynamic Background Color**: The background color of the main area changes gradually with each count. Specifically:
  - For every counting step, the background will fill up with a color, achieving a maximum of **100%** when the counter reaches a multiple of **100**.
  - When the counter exceeds **100**, the background resets to **1%** filled after each multiple of **100** (e.g., at **200**, the background is full again, and then resets to **1%** at **201**, and so forth).

### How to Use

1. Click anywhere in the main area or press the **Enter** or **Space** key to increase the counter.
2. Observe the counter value increase and the background color fill up.
3. Click the **Reset** button to reset the counter and the background.

### Technologies Used

- HTML
- CSS
- JavaScript
