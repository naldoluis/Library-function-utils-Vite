import { useParams } from 'react-router-dom'
import Book from './Book'

export default function BookParams() {
  const params = useParams()
  return <Book bookId={`${params.bookId}`}/>
}