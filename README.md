# Smart College Assistant

Smart College Assistant is a React + Vite student help desk for new college students. The first module, Student Counselling, answers college questions through a local knowledge base, voice input, text input, text-to-speech, chat history, and a future map handoff.

## Features

- Voice-first student counselling with browser Speech Recognition
- Text fallback for unsupported browsers or quiet environments
- CSS-based assistant avatar with idle, listening, thinking, speaking, and error states
- Local keyword-based knowledge-base search with confidence and category metadata
- Configured location cards and `Show on Map` navigation using React Router state
- LocalStorage chat history
- Responsive dashboard with planned Career Recommendation and Smart College Map routes

## Technology

React, Vite, JavaScript/JSX, React Router, Tailwind CSS v4 Vite integration, Lucide React, Web Speech APIs, and LocalStorage.

## Structure

- `src/components`: layout, avatar, voice, chat, counselling, and common UI
- `src/pages`: dashboard, counselling, history, future modules, and not-found route
- `src/services`: counselling, speech, and history adapters
- `src/data`: knowledge base, configured locations, and quick questions
- `src/utils`: category/location detection and storage helpers
- `src/context`: shared counselling state and interaction flow

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Production validation is available with `npm run build`.

## Voice input requirements

Use a current browser that supports `SpeechRecognition` or `webkitSpeechRecognition`, such as supported Chrome-based browsers. The browser will request microphone permission. Voice recognition is configured for Indian English with `lang = "en-IN"`. If voice input is unsupported or permission is denied, type the question instead.

## Updating college answers

Edit `src/data/counsellingKnowledgeBase.js`. Each entry contains a category, question, keywords, and answer. The initial answers intentionally use `COLLEGE_SPECIFIC_INFORMATION_REQUIRED` rather than inventing college data. Replace those values with verified college information when available.

Add configured places to `src/data/locations.js`. A location only appears when it is configured and the question is detected as a location query.

## Connecting a real AI backend later

Replace the implementation inside `src/services/counsellingService.js` with a backend request or RAG adapter. Keep credentials on the server; do not place API keys in this frontend. Preserve the returned shape: `answer`, `category`, `confidence`, and `location`.

## Map integration

`ShowOnMapButton` navigates to `/smart-college-map` with the location object in React Router state. The current map page displays the received building, floor, and room. A future map module can consume the same state and render an actual campus map.
