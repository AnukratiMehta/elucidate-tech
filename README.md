# Frontend README (React Native with Expo)

Welcome to the GitHub User Explorer app! This repository houses the frontend code for a mobile application developed using React Native and Expo. Dive into a seamless exploration of GitHub profiles and repositories on Android, with the added flexibility of toggling between GitHub's API and a custom backend server.

## Overview

The GitHub User Explorer app empowers users to search for GitHub profiles using usernames, offering detailed insights into each user's profile. Additionally, users can effortlessly navigate to a comprehensive list of public repositories associated with the selected GitHub user. The app goes beyond by incorporating a toggle switch, allowing users to seamlessly switch between GitHub's API and a custom backend server.

### Setup Instructions

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/elucidate-tech.git
   cd elucidate-tech
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

### Running the App:

1. **Run the app using Expo:**

   ```
   npm run web
   ```

   Follow the terminal instructions to open the app on your Android or iOS device/emulator.

2. Please run the [Backend App](https://github.com/AnukratiMehta/elucidate-backend/tree/main) to access the Custom Backend data. 

### Additional Notes

Please update the localhost in `UserSearch.js` with the IP address of the machine running the server to view the data on Expo on your Android phone.

### Features

- **User Search**
  - Intuitive search field for locating GitHub users by username.

- **User Profile**
  - Displayed upon a successful search:
    - Username
    - Profile picture
    - Name
    - Public repository count
    - Followers
    - Following

- **Repository Access**
  - Clickable repository count leading to a list of public repositories for the searched user.

- **Repository List**
  The new screen displays the following details for each repository:
    - Repository name
    - Last active date
    - Star count
    - Repo owner name
    - Repository URL

- **Integrated backend with the app**
    - Toggle switch for seamless switching between GitHub and a custom backend.
    - UI enhancements for backend integration.

### Screenshots

[Github User Explorer](assets/Github%20User%20Explorer.mp4)

[Github Backend Server Explorer](assets/Github%20User%20Explorer%20-%20Backend.mp4)

### Remember
This app is optimized for Android, and the web version may not have all the supported features and styling. Please utilize Expo Android for the optimal experience.
