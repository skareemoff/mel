# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `expo start` - Start the development server
- `expo run:ios` - Run the app on iOS simulator
- `expo run:android` - Run the app on Android

**Note**: This project uses React Native's New Architecture (Fabric/TurboModules). Ensure your development environment supports this.

## Project Architecture

This is a React Native app built with Expo that creates an interactive card-based experience called "MEL: More Exciting Life". The app presents users with thought-provoking questions and activities designed to inspire a more exciting life.

### Key Components Structure

**App.js** - Main entry point with navigation stack and splash screen logic. Uses React Navigation with screens for Onboarding, Home, Info, and Play.

**Context System**
- `MELContext.js` - Central state management using React Context
- Manages deck data (`deckDataInstance`), favorites state, and question-of-the-day state
- Provides shared state across all screens

**Core Screens**
- `HomeScreen.js` - Main screen displaying deck cards, question of the day, and navigation
- `PlayScreen.js` - Interactive card swiping experience with gesture handling
- `DeckInfoScreen.js` - Shows information about selected decks before playing
- `SplashScreen.js` - Loading screen shown on app startup

**Data Management**
- `DeckData.js` - Core data class managing card decks, favorites, and user preferences
- `storage.js` - Persistent storage wrapper using react-native-mmkv
- `src/data/cards.json` - Contains all card content and deck definitions
- `QuestionOfTheDayData.js` - Manages daily question functionality

**Card Components**
- `SwipableCard.js` - Interactive card with swipe gestures (built with react-native-reanimated)
- `Card.js` - Basic card component for display
- `QoDCard.js` - Specialized card for question of the day
- `ShareableCard.js` - Card formatted for sharing functionality

### Key Libraries & Features

- **react-native-reanimated** - Powers card swiping animations and gestures
- **react-native-gesture-handler** - Handles touch interactions
- **react-native-mmkv** - High-performance key-value storage
- **react-native-share** - Native sharing functionality
- **react-native-view-shot** - Screenshot capture for sharing
- **expo-blur** - Visual blur effects
- **react-native-svg** - SVG support for backgrounds and icons
- **react-native-extended-stylesheet** - Enhanced styling with global variables

### Storage & Data Flow

The app uses MMKV for persistent storage with keys prefixed by `FAV_` for favorites. The `DeckData` class acts as the main data controller, loading card content from JSON and managing user preferences. State flows through MELContext to keep UI synchronized.

### Font Assets

Custom DM Sans and DM Serif fonts are included in `src/assets/fonts/` and configured through react-native.config.js.

### iOS Configuration

The app is configured for iOS with bundle identifier `life.moreexciting.app` and includes Apple Sign In capability. Podfile and Xcode project files are managed through Expo's build process.