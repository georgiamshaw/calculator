# Make a Calculator

## __Founders and Coders__

[You can find a link to my calculator here.](https://georgiamshaw.github.io/calculator/)

### What my calculator can do:
* Addition, subtraction, multiplication and division
* Supports decimal numbers
* Uses **AC** (all clear) to show the user that the calculator is not in the middle of a calculation
* Uses **CE** (clear entry) to show the user that the calculator is in the middle of a calculation. Pressing the **CE** button will stop the calculation and the button will revert back to **AC**
* Can handle more complex calculations, such as **n1 + n2 - n3** by carrying out **n1 + n2 = r1, r1 - n3 = r2**
* Pressing the **=** (calculate button) after entering a number, operator, number, while give you the answer. Continuing to press the **=** will continue to perform the calculation. For example, **n1 - n2 = r1, r1 - n2 = r2, r2 - n2 = r3**
* Has a **+/-** button which adds a **-** to the number on display
 
### What I need to add/work on:
* The highlight around the operator to show it is pressed works, but I cannot get it to go away
* I can use keycodes to press numbers on my keyboard and have them enter in the display of the calculator, but I can do anything with that number once it appears - and pressing more than one number, for example, **34** is impossible, as the **4** wipes out the **3**
* Fixing the display so that numbers do not move outside of it
* Make the **%** (percentage button) work
* Make **+/-** toggle, so that it can display a **-** number and then change back to a **+** number
