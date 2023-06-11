import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { getFirebaseDatabase } from '../../firebaseConfig';

export default useTodos = (uid) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uid) {
      return;
    }
    setLoading(true);
    const database = getFirebaseDatabase();
    const todosRef = ref(database, 'todos/' + uid);

    const unsubscribe = onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      const todosArray = Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }));

      const userTodos = todosArray.filter((todo) => todo.uid === uid);
      setTodos(userTodos);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [uid]);

  return { todos, loading };
};
