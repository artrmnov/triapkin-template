import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { type Post as PostType } from "../types/post"

export const Post = () => {
    const { id } = useParams<{id: string}>()
    const { isPending, isFetching, error, data } = useQuery<PostType>({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
            res.json(),
          ),
    })

    if (isPending) return 'Loading...'

    if (isFetching) return 'Fetching...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}