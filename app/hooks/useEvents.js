import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { getFirebaseDatabase } from '../../firebaseConfig';

export default useEvents = (uid) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!uid) {
      return;
    }
    setLoading(true);
    const database = getFirebaseDatabase();
    const eventsRef = ref(database, 'events/' + uid);

    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      const eventsArray = Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }));

      const userEvents = eventsArray.filter((event) => event.uid === uid);
      setEvents(userEvents);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [uid]);

  return { events, loading };
};
