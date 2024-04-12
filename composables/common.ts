export const arrayShuffle = (array: any[]) => {
  let m = array.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[array[m], array[i]] = [array[i], array[m]]
  }
  return array
}

const locale: Intl.LocalesArgument = 'en-US'
const timeZone = 'Asia/Tokyo'
export const displayHour = (datetimeString: string) => {
  const d = new Date(datetimeString)
  return d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false, timeZone })
}

export const displayDateAndHour = (datetimeString: string) => {
  const d = new Date(datetimeString)
  const date = d.toLocaleDateString(locale, { month: '2-digit', day: '2-digit', timeZone })
  const time = d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false, timeZone })
  return `${date} ${time}`
}