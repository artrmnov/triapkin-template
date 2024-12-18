import { useQuery } from "@tanstack/react-query"
import { Post } from "../types/post"
import { Link } from "react-router"

export const Posts = () => {
    const { isPending, isFetching, error, data } = useQuery<Post[]>({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
            res.json(),
          ),
    })

    if (isPending) return 'Loading...'

    if (isFetching) return 'Fetching...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}