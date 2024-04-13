import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Hoshikira | Articles',
    icons: {
        icon: '/favicon.png',
    }
}

const Article = () => {
    return (
        <div className="p-20 text-5xl text-gray-300">Comming soon!</div>
    )
}

export default Article;