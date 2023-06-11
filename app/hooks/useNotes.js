import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { getFirebaseDatabase } from '../../firebaseConfig';

export default useNotes = (uid) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uid) {
      return;
    }
    setLoading(true);
    const database = getFirebaseDatabase();
    const notesRef = ref(database, 'notes');

    const unsubscribe = onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      const notesArray = Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }));

      const userNotes = notesArray.filter((note) => note.uid === uid);
      setNotes(userNotes);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [uid]);

  return { notes, loading };
};
