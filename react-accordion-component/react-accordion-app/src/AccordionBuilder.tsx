// FILE IMPORT'S
import { useState } from 'react';
import './App.css';

// PARENT COMPONENT MAIN

// PROP
export type Topic = {
  id: number;
  title: string;
  gicontent: string;
};

type Props = {
  topics: Topic[];
};

export function AccordionParentComponent({ topics }: Props) {
  const [currTopic, setCurrTopic] = useState<Topic>();

  function handleTopic(topic: Topic): void {
    if (currTopic === topic) {
      setCurrTopic(undefined);
    } else {
      setCurrTopic(topic);
    }
  }

  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          isOpened={topic === currTopic}
          key={topic.id}
          topic={topic}
          onClick={() => handleTopic(topic)}
        />
      ))}
    </div>
  );
}

type CardProps = {
  topic: Topic;
  onClick: () => void;
  isOpened: boolean;
};

function TopicCard({ topic, onClick, isOpened }: CardProps) {
  return (
    <div className="cpoint">
      <div onClick={onClick} className="accordion_animations">
        <h3 className="bg-dark text-info p-3 rounded">{topic.title}</h3>
      </div>
      {isOpened && <div>{topic.content}</div>}
    </div>
  );
}
