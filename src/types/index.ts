export type Post = {
    slug?: string,
    title: string,
    date: string,
    coverImage: {
        url: string
    },
    content: {
        html: string
    },
    excerpt?: string
}