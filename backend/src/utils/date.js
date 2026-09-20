const DAY_IN_MS = 24 * 60 * 60 * 1000

export const todayDate = () => new Date().toISOString().slice(0, 10)

export const calculateDaysRemaining = (date, today = todayDate()) => {
  const targetTime = Date.parse(`${date}T00:00:00Z`)
  const todayTime = Date.parse(`${today}T00:00:00Z`)
  return Math.ceil((targetTime - todayTime) / DAY_IN_MS)
}

export const addDays = (date, days) => {
  const value = new Date(`${date}T00:00:00Z`)
  value.setUTCDate(value.getUTCDate() + days)
  return value.toISOString().slice(0, 10)
}
