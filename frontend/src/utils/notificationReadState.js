const KEY_PREFIX = 'organiza:read-notifications'

const storageKey = (userId) => `${KEY_PREFIX}:${userId}`
const fingerprint = ({ type, message }) => JSON.stringify([type, message])

const getReadFingerprints = (userId, storage) => {
  try {
    const stored = JSON.parse(storage.getItem(storageKey(userId)))
    return new Set(Array.isArray(stored) ? stored : [])
  } catch {
    return new Set()
  }
}

export const applyNotificationReadState = (
  notifications,
  userId,
  storage = globalThis.localStorage,
) => {
  if (!userId || !storage) return notifications

  const readFingerprints = getReadFingerprints(userId, storage)
  return notifications.map((notification) => ({
    ...notification,
    read: notification.read || readFingerprints.has(fingerprint(notification)),
  }))
}

export const persistNotificationReadState = (
  notifications,
  userId,
  storage = globalThis.localStorage,
) => {
  if (!userId || !storage) return

  const readFingerprints = notifications
    .filter(({ read }) => read)
    .map(fingerprint)

  try {
    storage.setItem(storageKey(userId), JSON.stringify(readFingerprints))
  } catch {
    // The visual state still updates when browser storage is unavailable.
  }
}
