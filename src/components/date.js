import dayjs from 'dayjs'

export default function FormattedDate({ dateString }) {
  const obj = dayjs(dateString)
  const str = obj.format('MMMM D, YYYY')
  return <time dateTime={dateString}>{str}</time>
}