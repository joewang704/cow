export const strToMinutes = (timeStr) => {
  // TODO: throw actual errors
  if (!timeStr) {
    return -1
  }

  const ending = timeStr.slice(-2)
  if (ending !== 'am' && ending !== 'pm') {
    return -1
  }

  const timeArr = timeStr.slice(0, -2).split(':')
  let hours = Number(timeArr[0])
  const minutes = Number(timeArr[1]) || 0
  if (hours === 12) {
    hours = 0
  }
  return hours * 60 + minutes + (ending === 'am' ? 0 : 12 * 60)
}

export const minutesToStr = (minutes) => {
  const minutesStr = `${minutes % 60 || '00'}`
  const hours = Math.floor(minutes / 60)
  return hours >= 12 ? `${hours % 12 || '12'}:${minutesStr}pm` : `${hours || '12'}:${minutesStr}am`
}

export const addMinutesToStr = (str, minutes) => {
  return minutesToStr(strToMinutes(str) + minutes)
}

export const timeStrToPosition = (str) => {
  return 40 * strToMinutes(str) / 60
}

export const timeStrToDialogPosition = (str) => {
  return 40 * (strToMinutes(str) / 60 + 1)
}

export const doesIntersect = (startFirst, endFirst, startSecond, endSecond) => {
  return strToMinutes(endFirst) > strToMinutes(startSecond) && strToMinutes(startFirst) < strToMinutes(endSecond)
}
