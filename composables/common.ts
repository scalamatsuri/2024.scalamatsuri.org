export const arrayShuffle = (array: any[]) => {
  let m = array.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[array[m], array[i]] = [array[i], array[m]]
  }
  return array
}

const zeroPadding = (num: number) => {
  return num.toString().padStart(2, '0')
}

export const displayHour = (datetimeString: string) => {
  const d = new Date(datetimeString)
  return `${zeroPadding(d.getHours())}:${zeroPadding(d.getMinutes())}`
}

export const displayDateAndHour = (datetimeString: string) => {
  const d = new Date(datetimeString)
  return `${zeroPadding(d.getMonth() + 1)}/${zeroPadding(d.getDate())} ${displayHour(datetimeString)}`
}
