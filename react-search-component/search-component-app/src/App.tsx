// FILE IMPORT'S
import { SearchableList } from './SearchableList';
import './App.css';

// const quotes = [
//   'Yer a wizard Harry.',
//   "I hope you're pleased with yourselves.",
//   'It does not do well to dwell on dreams and forget to live.',
//   'To the well-organized mind, death is but the next great adventure.',
//   "You're a little scary sometimes, you know that? Brilliant... but scary.",
//   'There will be no foolish wand-waving or silly incantations in this class.',
//   'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
//   'If there is one thing Voldemort cannot understand, it is love.',
//   'As much money and life as you could want!',
//   'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.',
//   'There are some things you can’t share without ending up liking each other.',
//   'Ah, music. A magic beyond all we do here!',
// ];

const quotes = [
  'The only way to do great work is to love what you do.',
  'Success is not final, failure is not fatal: It is the courage to continue that counts.',
  "Your time is limited, don't waste it living someone else's life.",
  'If you want to lift yourself up, lift up someone else.',
  "I have not failed. I've just found 10,000 ways that won't work.",
  'The future belongs to those who believe in the beauty of their dreams.',
  "Life is what happens when you're busy making other plans.",
  'In the end, we will remember not the words of our enemies, but the silence of our friends.',
  'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
  'It is during our darkest moments that we must focus to see the light.',
  "Believe you can and you're halfway there.",
  'Strive not to be a success, but rather to be of value.',
  'The only thing necessary for the triumph of evil is for good men to do nothing.',
  'I attribute my success to this: I never gave or took any excuse.',
  'The best revenge is massive success.',
  "You miss 100% of the shots you don't take.",
  'The only true wisdom is in knowing you know nothing.',
  "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  "Whether you think you can or you think you can't, you're right.",
  'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  'The way to get started is to quit talking and begin doing.',
  'If you can dream it, you can do it.',
  "Don't watch the clock; do what it does. Keep going.",
  'The secret of getting ahead is getting started.',
  'The best time to plant a tree was 20 years ago. The second best time is now.',
  'The two most important days in your life are the day you are born and the day you find out why.',
  'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
  "People often say that motivation doesn't last. Well, neither does bathing – that's why we recommend it daily.",
  'Life is 10% what happens to us and 90% how we react to it.',
  'The only limit to our realization of tomorrow is our doubts of today.',
  "Teach thy tongue to say, 'I do not know,' and thous shalt progress.",
  'Start where you are. Use what you have. Do what you can.',
  "Don't count the days, make the days count.",
  "It always seems impossible until it's done.",
  'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
  'The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.',
  "Don't be afraid to give up the good to go for the great.",
  'I find that the harder I work, the more luck I seem to have.',
  'Success usually comes to those who are too busy to be looking for it.',
  "Opportunities don't happen. You create them.",
  "Don't let yesterday take up too much of today.",
  "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
  'People who are crazy enough to think they can change the world, are the ones who do.',
  'Failure will never overtake me if my determination to succeed is strong enough.',
  "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That's the classic entrepreneur.",
  'We may encounter many defeats but we must not be defeated.',
  'Knowing is not enough; we must apply. Willing is not enough; we must do.',
  'Imagine your life is perfect in every respect; what would it look like?',
  'We generate fears while we sit. We overcome them by action.',
  "Whether you think you can or think you can't, you're right.",
  'Security is mostly a superstition. Life is either a daring adventure or nothing.',
  'The only limit to our realization of tomorrow is our doubts of today.',
  'Creativity is intelligence having fun.',
  'What you lack in talent can be made up with desire, hustle, and giving 110% all the time.',
  'Do what you can, with what you have, where you are.',
  'You have to learn the rules of the game. And then you have to play better than anyone else.',
  'The best revenge is massive success.',
  'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
  "Believe you can and you're halfway there.",
  'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
  'Do not wait to strike till the iron is hot; but make it hot by striking.',
  'Well done is better than well said.',
  'Success is walking from failure to failure with no loss of enthusiasm.',
  'The only place where success comes before work is in the dictionary.',
];

function App() {
  return (
    <>
      <SearchableList quotes={quotes} />
    </>
  );
}

export default App;
