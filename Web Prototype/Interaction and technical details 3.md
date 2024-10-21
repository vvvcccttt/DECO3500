HTML Section:
1. **place.html**  
   Responsible for building the "Place Recommendations" page, displaying recommended locations' images, names, descriptions, and navigation buttons.
   - **Header image and buttons**: Displays a clickable image that redirects to the map page and a like button.
   - **Location list**: Displays three recommended locations in a card format, each containing an image, name, description, and a location icon.
   - **Bottom navigation bar**: Provides four buttons for navigation to different pages (Home, Map, Chat, and Profile).

2. **map.html**  
   Responsible for building the "Family Trip App - Map Feature" page, displaying Google Maps with filtering options.
   - **Back button**: A back button at the top left, returning to the place.html page when clicked.
   - **Search bar and filter buttons**: Provides a search box and two buttons for filtering restaurants and attractions.
   - **Map area**: The map is embedded via Google Maps API and occupies the main content area.

3. **recommend.html**  
   Responsible for building the "Restaurant Review" page, displaying images, ratings, distance, and user reviews for a specific restaurant.
   - **Back button**: A back button at the top left of the page that returns to the map page when clicked.
   - **Restaurant info**: Displays restaurant images, ratings, distance, and price.
   - **Review list**: Lists user reviews, with the last review supporting like and comment functionalities.

CSS Section:
1. **place.css**  
   Beautifies the "Place Recommendations" page, ensuring clear layout, attractive styles, and added interactive effects.
   - **Global styles**: Uses box-sizing to manage the global layout and ensure proper spacing and border calculations for all elements.
   - **Image module**: Sets the image size, background color, and aspect ratio using header-image to ensure images display correctly across different screens.
   - **Like button style**: Defines the layout and color changes for the .heart-btn button in its active state.
   - **Location list and bottom navigation bar**: Uses a flex layout to neatly arrange the location list, with the bottom navigation bar styling the navigation buttons.

2. **map.css**  
   Beautifies the "Family Trip App - Map Feature" page, ensuring the map, search bar, and filter buttons are well laid out and responsive across devices.
   - **Map styling**: Sets the width and height of #map to make it fit the window size, showing a gray background before the map loads.
   - **Back button and search bar**: Positions, shadows, and rounds the back button, search bar, and filter buttons to float neatly above the map.
   - **Responsive design**: Uses media queries to ensure the layout is not disrupted on smaller screens.

3. **recommend.css**  
   Beautifies the "Restaurant Review" page, ensuring consistency in the layout and style of images, ratings, review lists, and interactive buttons.
   - **Back button**: A simple, easy-to-click back button is set at the top left.
   - **Restaurant info and image**: The restaurant image is set to 100% width for adaptability, and the rating is displayed with rounded corners and a shadow at the top left of the image.
   - **Review list**: User avatars are displayed in circles, and review content is aligned for a clean layout and good user experience.
   - **Action buttons and comment input box**: The like and comment buttons float at the bottom right of the page, with the comment input box hidden by default, revealed upon clicking to enhance interactivity.

JavaScript Section:
1. **place_script.js**  
   Implements the like feature on the page, allowing users to activate or deactivate the like effect upon clicking the button.
   - **Retrieve like button**: Retrieves the like button on the page via document.getElementById.
   - **Toggle active state**: Listens for a click event on the like button to toggle the button's active class, changing its style to reflect the like.

2. **map.js**  
   Implements the interactive map functionality, loads Google Maps, displays restaurant and attraction markers, and provides filtering features.
   - **Restaurant and attraction marker arrays: restaurantMarkers and attractionMarkers**  
     - These arrays store the created markers for restaurants and attractions on the map.
     - Users can control the display and hiding of markers through these arrays.
   - **Boolean values isShowingRestaurants and isShowingAttractions**  
     - These booleans track the display state of restaurant and attraction markers.
     - By toggling their values, users can click buttons to show or hide the respective markers.
   - **initMap() function**  
     - This function initializes the Google Map.
     - It creates a Google Places service and sends two requests:
       - **restaurantRequest** to search for nearby restaurants.
       - **attractionRequest** to search for nearby attractions.
     - The nearbySearch method finds matching restaurants and attractions, generating markers for them and storing them in the restaurantMarkers and attractionMarkers arrays.
   - **createMarker() function**  
     - Creates markers for restaurants or attractions and sets their icon colors:
       - Restaurants use red markers (red-dot.png).
       - Attractions use blue markers (blue-dot.png).
     - Markers are initially set to invisible (visible: false), only showing when the user clicks a filter button.
     - Clicking a marker:
       - For restaurant markers, users are redirected to the recommend.html page.
       - For attraction markers, an info window pops up displaying the attraction's name and location information.
   - **Filter feature**  
     - By clicking the filter buttons, users can control the visibility of restaurants and attractions:
       - The restaurant button shows or hides restaurant markers based on isShowingRestaurants.
       - The attraction button shows or hides attraction markers based on isShowingAttractions.

3. **recommend_script.js**  
   Implements the interactivity on the restaurant review page, providing like and comment input toggling functionalities.
   - **Like feature**: Retrieves the like button, listens for click events, and toggles the button's active class to implement the like functionality.
   - **Comment feature**: Hides the comment input box on page load, showing or hiding the input box dynamically when the user clicks the comment button.
