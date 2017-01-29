import Dexie from 'dexie';

const db = new Dexie("shovel_database");

db.version(1).stores({
  novels: 'ncode, isRead'
});

export default db;
