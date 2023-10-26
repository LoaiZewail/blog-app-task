"use client"

import store from '@/redux/store'
import { Provider } from 'react-redux'
import BlogList from './partials/BlogList'

export default function Home() {

    return (
        <Provider store={store}>
            <main className="flex justify-center px-4 md:px-8">
                <BlogList />
            </main>
        </Provider>
    )
}
