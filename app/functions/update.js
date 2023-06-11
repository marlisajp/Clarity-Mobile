import { ref, update, set, remove } from 'firebase/database';
import { getFirebaseDatabase } from '../../firebaseConfig';

const database = getFirebaseDatabase();

const updateTodo = (
  uid,
  todoId,
  newContent,
  newPriority,
  newStatus,
  newDueDate,
  newTags
) => {
  const todoData = {
    uid,
    content: newContent,
    priority: newPriority,
    status: newStatus,
    dueDate: newDueDate,
    tags: newTags,
  };

  const updates = {};
  updates[`/todos/${uid}/${todoId}`] = todoData;

  return update(ref(database), updates);
};

const updateTodoStatus = async (userId, todoId, statusLabel) => {
  const statusObject = {
    'In Progress': {
      icon: 'run',
      label: 'In Progress',
      value: 'in-progress',
    },
    Completed: {
      icon: 'check-circle',
      label: 'Completed',
      value: 'completed',
    },
  };

  const newStatus = statusObject[statusLabel];

  if (newStatus) {
    const database = getFirebaseDatabase();
    const todoRef = ref(database, `todos/${userId}/${todoId}/status`);
    await set(todoRef, newStatus);
  } else {
    console.log('Invalid status label provided');
  }
};

const updateNote = (uid, noteId, newTitle, newContent, newTags) => {
  const noteData = {
    uid,
    title: newTitle,
    content: newContent,
    tags: newTags,
  };

  const updates = {};
  updates[`/notes/${uid}/${noteId}`] = noteData;

  return update(ref(database), updates);
};

export { updateTodo, updateNote, updateTodoStatus };
