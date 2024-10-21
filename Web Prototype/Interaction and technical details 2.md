
Family Chat Webpage

Overview

This section is the family chat interface built into the family travel, which mainly has voting functions, chat functions, and the ability to view the distance between family members. In addition to the vote and map interfaces, other webpages include a title with a back button, a page for viewing the chat list of recent conversations, and a bottom navigation bar for accessing various functions. The vote can create multiple voting options and also record the number of votes for each option at any time. The map interface shows the distance and approximate location of other family members.

Function

Title container: Contains the back button, family avatars, and chat information.

Chat list section: Displays a list of family chat items with the latest messages, avatars, and timestamps.

Bottom navigation bar: Provides shortcuts to other parts of the application (such as homepage, search, chat, and settings).

Interactive JavaScript functions: The webpage contains JavaScript functions for navigation, such as returning to the previous page or entering a specific chat, as well as counting functions of the vote interface.

File Structure

HTML Elements: The HTML code is divided into multiple sections to create a consistent layout:

Header: Contains a back button for navigating to the previous page and displays the family avatar and status.

Chat List: Lists the family chat items. Each item is clickable and redirects the user to a specific family chat page.

Bottom Navigation: Contains clickable icons for navigating different parts of the application.

CSS Styles: Styles are handled within the <style> tag and provide:

Header Styles: Creates a gradient background for the title with avatars and family names.

Bottom Navigation: A simple design with icons for easy navigation.

Instructions

Back Button: Click the back button (left arrow image) in the header to navigate to the previous page.

Input Box: In the chat box of the chat interface, click the + button to open the drop-down function menu.

Bottom Function: The function menu can jump to four different web pages, such as vote can jump to the voting interface, location can jump to the map interface.

Voting creation: Click the + button to create a new option, and click create vote to create a voting option.

Voting record: After clicking any of the created voting options, there will be a real-time count of each option in the chat interface, showing how many family members voted for each option.

Pictures

The pictures are used for the back button, family avatars, and bottom navigation icons.

Make sure the picture folder contains the following pictures:

Back button: left.jpg

Family avatar and chat list icon: chat4.png

Bottom navigation icons: 1.png, 2.png, 3.png, 4.png

Compatibility

The webpage is designed to be responsive and compatible with various screen sizes, making it easy to use on mobile and desktop devices.

Future improvements

Chat function: Use WebSocket to implement real-time chat for seamless communication.

Dynamic chat update: Connect to the backend to dynamically update chat messages and status.
