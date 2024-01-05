import './App.css';
import { AccordionParentComponent, type Topic } from './AccordionBuilder';

const topics: Topic[] = [
  {
    id: 1,
    title: 'The Exorcist',
    content:
      'The Exorcist is a 1973 horror film directed by William Friedkin, adapted from the novel of the same name by William Peter Blatty. The story follows the demonic possession of a young girl and the efforts of two priests to save her.',
  },
  {
    id: 2,
    title: 'Psycho',
    content:
      'Psycho is a 1960 psychological horror film directed by Alfred Hitchcock. It tells the story of a secretary who ends up at a secluded motel after embezzling money, where she encounters the disturbed proprietor, Norman Bates.',
  },
  {
    id: 3,
    title: 'The Shining',
    content:
      'The Shining is a 1980 psychological horror film directed by Stanley Kubrick, based on the novel by Stephen King. The film follows a family who becomes the winter caretakers of a haunted hotel, with terrifying consequences.',
  },
  {
    id: 4,
    title: 'A Nightmare on Elm Street',
    content:
      'A Nightmare on Elm Street is a 1984 slasher film directed by Wes Craven. The film introduces the character Freddy Krueger, a dream demon who haunts teenagers in their dreams, leading to their deaths in the real world.',
  },
  {
    id: 5,
    title: 'Halloween',
    content:
      'Halloween is a 1978 slasher film directed by John Carpenter. The film follows Michael Myers, who escapes from a psychiatric hospital and returns to his hometown to stalk and kill teenagers on Halloween night.',
  },
  {
    id: 6,
    title: 'The Texas Chain Saw Massacre',
    content:
      'The Texas Chain Saw Massacre is a 1974 horror film directed by Tobe Hooper. The story revolves around a group of friends who encounter a family of cannibals, including the chainsaw-wielding Leatherface.',
  },
  {
    id: 7,
    title: 'The Conjuring',
    content:
      'The Conjuring is a 2013 supernatural horror film directed by James Wan. It is based on real-life paranormal investigators Ed and Lorraine Warren, who help a family plagued by a dark presence in their farmhouse.',
  },
  {
    id: 8,
    title: 'Get Out',
    content:
      "Get Out is a 2017 psychological horror film directed by Jordan Peele. The film follows a young African-American man who uncovers a disturbing secret while visiting his white girlfriend's family estate.",
  },
  {
    id: 9,
    title: 'Hereditary',
    content:
      'Hereditary is a 2018 supernatural horror film directed by Ari Aster. The film follows a family dealing with the dark secrets and sinister forces that unravel after the death of their secretive grandmother.',
  },
  {
    id: 10,
    title: 'It Follows',
    content:
      'It Follows is a 2014 supernatural horror film directed by David Robert Mitchell. The film centers on a young woman who is pursued by a supernatural entity after a sexual encounter, leading her and her friends on a terrifying journey.',
  },
];

function App() {
  return (
    <div>
      <AccordionParentComponent topics={topics} />
    </div>
  );
}

export default App;
