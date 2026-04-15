# Smart Utility Toolkit App 📱

## Overview
The Smart Utility Toolkit App is a mobile application built with React Native (Expo) that provides essential utility tools in one place. This app was developed as part of the HNG Internship Mobile Track Stage 1 Task, extending the Stage 0 application by adding a fully functional Task/Checklist Manager with offline persistence. The application is designed to work seamlessly offline, providing users with reliable tools anytime without requiring internet connectivity.

## Features 🚀
### 🔄 Unit Converter
- Convert units easily
- Supports multiple measurement types
- Fast and accurate conversion

### 📝 Task / Checklist Manager
Users can:
- Create tasks
- Mark tasks as completed
- Edit existing tasks
- Delete tasks
- Store tasks locally
- Access tasks offline
- Maintain persistent data after app restart

## Offline Persistence 💾
The Task Manager uses AsyncStorage to store tasks locally on the device. This ensures tasks remain saved after closing the app, the app works without internet connection, and provides fast and reliable data access.

## Tech Stack 🛠️
- React Native
- Expo
- Expo Router
- AsyncStorage
- JavaScript
- React Hooks

## App Structure 📂
app/
│
├── (tabs)/
│   ├── index.tsx        # Home Screen
│   ├── converter.tsx    # Unit Converter
│   ├── notes.tsx        # Task Manager
│   ├── _layout.tsx      # Tab Navigation
│
├── _layout.tsx          # Root Layout

## Installation & Setup ⚙️
To run this project locally:

1. Clone the repository:
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

2. Navigate into the project:
cd YOUR-REPO-NAME

3. Install dependencies:
npm install

4. Start the development server:
npx expo start

## How to Use the App 📱

### Unit Converter
1. Open the Converter tab
2. Enter a value
3. Select units
4. View converted result

### Task Manager
1. Open the Tasks tab
2. Enter a task
3. Tap Add
4. Tap a task to mark it complete
5. Tap Edit to modify
6. Tap Delete to remove

Tasks are automatically saved and restored when the app restarts.

## APK Preview 🌐
App preview available via Appetize:
PASTE YOUR APPETIZE LINK HERE

## GitHub Repository 🔗
PASTE YOUR GITHUB REPOSITORY LINK HERE

## Development Process 🧠
The development process followed these steps:
1. Built initial utility toolkit during Stage 0
2. Designed Task Manager interface
3. Implemented task CRUD functionality
4. Integrated AsyncStorage for persistence
5. Tested offline functionality
6. Ensured consistent UI across tabs
7. Built APK and deployed preview

## Challenges Encountered ⚠️
Some challenges faced during development included managing local storage synchronization, handling task editing logic, ensuring persistent storage reliability, maintaining consistent navigation structure, and fixing UI dark mode background issues. These challenges helped improve debugging and state management skills.

## Lessons Learned 📚
This project improved my understanding of React Native development, mobile state management, local storage with AsyncStorage, offline-first application design, UI consistency across screens, and debugging mobile applications.

## Future Improvements 🔮
Potential enhancements include task priority levels, task deadlines, search functionality, notification reminders, dark mode support, and improved animations.

## Author 👤
Name: Owoade Gratitude 
Track: HNG Internship Mobile Track  
Stage: Stage 1  

## Acknowledgment 🙌
This project was completed as part of the HNG Internship Program aimed at improving real-world software development skills.

## License 📄
This project is for educational purposes under the HNG Internship program.