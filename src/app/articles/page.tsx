import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Hoshikira | Articles',
    icons: {
        icon: '/favicon.png',
    }
}

const Article = () => {
    return (
        <div className="p-20">Article page</div>
    )
}

export default Article;