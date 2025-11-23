// database.js

import { db } from "./firebase-config.js";
import {
  ref,
  set,
  push,
  onValue,
  update
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

/** ✔ Write (Overwrite) */
export function writeData(path, data) {
  return set(ref(db, path), data);
}

/** ✔ Push (Auto ID) */
export function pushData(path, data) {
  return push(ref(db, path), data);
}

/** ✔ Update */
export function updateData(path, data) {
  return update(ref(db, path), data);
}

/** ✔ Realtime Listener */
export function onData(path, callback) {
  onValue(ref(db, path), (snapshot) => {
    callback(snapshot.val());
  });
}
