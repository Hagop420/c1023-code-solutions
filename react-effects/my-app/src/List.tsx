/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { readItems, type Item } from './read';

export function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function effecting() {
      try {
        const settlingLisMapThrough = await readItems();
        setIsLoading(!isLoading);
        setItems(settlingLisMapThrough);
      } catch (err) {
        console.log('Error message:', err);
        // Calling the setError message
        setError(error);
        // Calling the isLoading/setting to false
        setIsLoading(!isLoading);
      }
    }

    effecting();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.id}: {item.name}
        </li>
      ))}
    </ul>
  );
}
