import { openDB } from 'idb';
import { COLLECTION_NAME, DATABASE_NAME } from './utils';

const DB_NAME = DATABASE_NAME.JADOO_AUTH_DB;
const STORE_NAME = COLLECTION_NAME.USERS;
const DB_VERSION = 1;

export const initIDB = async () => {
    return openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const store = db.createObjectStore(STORE_NAME, {
                    keyPath: 'id',
                    autoIncrement: true,
                });
                store.createIndex('email', 'email', { unique: true });
            }
        },
    });
};

