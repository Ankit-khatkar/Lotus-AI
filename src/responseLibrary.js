// responseLibrary.js
// An advanced library for generating accurate responses using intent classification

const intents = [
  {
    name: 'greetings',
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      "Hello! How can Lotus AI assist you today?",
      "Hi there! I'm Lotus AI, ready to help.",
      "Hey! What's on your mind?"
    ]
  },
  {
    name: 'farewells',
    keywords: ['bye', 'goodbye', 'see you', 'farewell', 'take care', 'later'],
    responses: [
      "Goodbye! Have a wonderful day!",
      "See you later! Take care.",
      "Farewell! Come back anytime."
    ]
  },
  {
    name: 'selfIntro',
    keywords: ['who are you', 'what are you', 'introduce yourself', 'your name'],
    responses: [
      "I'm Lotus AI, your intelligent assistant. I can help with questions, provide information, and chat about various topics.",
      "My name is Lotus AI. I'm here to assist you with knowledge, conversation, and more."
    ]
  },
  {
    name: 'capabilities',
    keywords: ['what can you do', 'capabilities', 'features', 'help me', 'assist'],
    responses: [
      "I can answer questions, tell jokes, provide current time, and engage in conversation. What would you like to know?",
      "As Lotus AI, I help with information, entertainment, and general queries. Ask me anything!"
    ]
  },
  {
    name: 'jokes',
    keywords: ['joke', 'tell me a joke', 'funny', 'laugh', 'humor'],
    responses: [
      "Why don't scientists trust atoms? Because they make up everything!",
      "What do you call fake spaghetti? An impasta!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!"
    ]
  },
  {
    name: 'facts',
    keywords: ['fact', 'interesting fact', 'tell me a fact', 'knowledge', 'learn'],
    responses: [
      "Did you know? The human brain uses about 20% of the body's total energy.",
      "Fun fact: Octopuses have three hearts and blue blood.",
      "Interesting: A group of flamingos is called a 'flamboyance'."
    ]
  },
  {
    name: 'weather',
    keywords: ['weather', 'forecast', 'rain', 'sunny', 'temperature', 'climate'],
    responses: [
      "I don't have real-time weather access, but you can check a weather app or website for current conditions.",
      "For accurate weather, I recommend using a dedicated weather service."
    ]
  },
  {
    name: 'time',
    keywords: ['time', 'what time', 'current time', 'clock', 'now'],
    responses: [
      `The current time is ${new Date().toLocaleTimeString()}.`,
      `It's ${new Date().toLocaleString()}.`
    ]
  },
  {
    name: 'help',
    keywords: ['help', 'support', 'guide', 'how to', 'problem'],
    responses: [
      "I'm here to help! Ask me questions, request jokes, or just chat.",
      "What can I assist you with today?"
    ]
  },
  {
    name: 'thanks',
    keywords: ['thank', 'thanks', 'appreciate', 'grateful'],
    responses: [
      "You're welcome! Happy to help.",
      "No problem at all!",
      "Glad I could assist!"
    ]
  },
  {
    name: 'aiTopics',
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'neural network', 'robot', 'automation'],
    responses: [
      "AI is fascinating! As Lotus AI, I'm built to assist with various tasks. What aspect of AI interests you?",
      "Artificial Intelligence is transforming the world. I can tell you more about it or answer specific questions."
    ]
  },
  {
    name: 'tech',
    keywords: ['technology', 'computer', 'software', 'programming', 'code', 'internet'],
    responses: [
      "Technology is evolving rapidly! I can help with tech-related questions or discussions.",
      "From coding to gadgets, tech is my jam. What would you like to know?"
    ]
  },
  {
    name: 'questions',
    keywords: ['what', 'how', 'why', 'when', 'where', 'who'],
    responses: [
      "That's a great question! While I don't know everything, I can try to provide helpful information.",
      "Good question! Let's explore that together."
    ]
  }
];

const defaults = [
  "That's interesting! Tell me more.",
  "I'm not entirely sure, but I'd love to learn. Can you elaborate?",
  "Thanks for sharing! What's your take on that?",
  "Interesting point. What else is on your mind?",
  "I'm here to chat. What's up?"
];

function tokenize(input) {
  return input.toLowerCase().split(/\s+/).filter(word => word.length > 0);
}

function getIntentScore(intent, tokens) {
  let score = 0;
  intent.keywords.forEach(keyword => {
    if (tokens.some(token => token.includes(keyword) || keyword.includes(token))) {
      score++;
    }
  });
  return score;
}

function getRandomResponse(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getResponse(input) {
  const tokens = tokenize(input);
  let bestIntent = null;
  let bestScore = 0;

  intents.forEach(intent => {
    const score = getIntentScore(intent, tokens);
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    } else if (score === bestScore && score > 0) {
      // If tie, randomly choose
      if (Math.random() > 0.5) {
        bestIntent = intent;
      }
    }
  });

  if (bestIntent) {
    return getRandomResponse(bestIntent.responses);
  } else {
    return getRandomResponse(defaults);
  }
}