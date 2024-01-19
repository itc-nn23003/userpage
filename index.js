import Link from 'next/link'

const UsersList = ({ users }) => {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps () {
  // JSONPlaceholderからユーザーのデータを取得
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default UsersList
