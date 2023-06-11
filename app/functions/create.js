import { ref, push } from 'firebase/database';
import { getFirebaseDatabase } from '../../firebaseConfig';
import routes from '../navigation/routes';

const database = getFirebaseDatabase();

const createTodo = async (todo, resetForm, user, navigation) => {
  todo.tags = todo.tags.split(',').map((tag) => tag.trim());
  const todosRef = ref(database, 'todos');
  await push(todosRef, { ...todo, uid: user.uid });
  resetForm();
  navigation.navigate(routes.TODO);
};

const createNote = async (note, resetForm, user, navigation) => {
  note.tags = note.tags.split(',').map((tag) => tag.trim());
  const notesRef = ref(database, 'notes');
  await push(notesRef, { ...note, uid: user.uid });
  resetForm();
  navigation.navigate(routes.NOTE);
};

export { createTodo, createNote };
