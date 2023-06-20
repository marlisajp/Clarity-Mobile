import { useEffect, useState } from 'react';
import useTodos from './useTodos';
import useNotes from './useNotes';
import useEvents from './useEvents';

const useLatestContent = (uid) => {
  const { todos } = useTodos(uid);
  const { notes } = useNotes(uid);
  const { events } = useEvents(uid);
  const [latestTodo, setLatestTodo] = useState(null);
  const [latestNote, setLatestNote] = useState(null);
  const [latestEvent, setLatestEvent] = useState(null);

  useEffect(() => {
    if (todos && todos.length > 0) {
      setLatestTodo(todos[todos.length - 1].content);
    }
  }, [todos]);

  useEffect(() => {
    if (notes && notes.length > 0) {
      setLatestNote(notes[notes.length - 1].title);
    }
  }, [notes]);

  useEffect(() => {
    if (events && events.length > 0) {
      setLatestEvent(events[events.length - 1].event.name);
    }
  }, []);

  return { latestTodo, latestNote, latestEvent };
};

export default useLatestContent;
