HTML: Responsible for building the basic structure of the front-end pages, including input boxes, buttons, and prompts.

CSS: Used to style and beautify the layout of the pages. For example, it is used to beautify the input2.html page by adjusting the styles of input boxes, buttons, and question mark tooltips. CSS controls the layout and the appearance of interactive elements, such as positioning and styling the tooltip when it appears. It also beautifies the plan1.html page, including designing the sidebar, buttons, and stacked images, as well as the zoom effect on images and the styles of the image sliding buttons. The flex layout is used to make the page structure clearer. It also styles background images, option buttons, and changes the appearance of selected buttons (e.g., in food.html, room.html, place_pre.html, the button background turns blue when selected).

JavaScript: Implements the interactive functionality of the pages, such as:

Displaying and hiding the tooltip when clicking on the question mark in index.html, input2.html, and user_rank.html.

Redirecting to a related page when clicking on the input box in input2.html.

Saving the user's input (number of days) in input2.html to localStorage and then redirecting to the plan1.html page.

Dynamically loading the number of day buttons in plan1.html and displaying corresponding scenic images based on the user's selection, with functionality to switch images when clicking the "Next" button. It also switches between tabs (scenic spots and restaurants) and controls the visibility of different content areas.

On the room.html, place_pre.html, and food.html pages, it enables the toggle of active/inactive states when clicking option buttons.

When the user clicks the "Save" button, the selected dining preferences (active options) are saved to localStorage for later use. After clicking "Save," it redirects back to the input2.html page.

In 1.html, the form validation function is implemented: when the user clicks "Next," it checks whether the country and at least one city have been filled in. If not, a prompt asks the user to complete the fields. It also supports dynamic addition of input boxes: by clicking the "+" button, users can dynamically add new input fields for countries or cities. After the check is complete, the user can proceed to the next page, input2.html.
