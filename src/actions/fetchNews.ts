"use server"

export async function fetchTopStories() {
    const apiUrl = `http://localhost:8000/top-stories`

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}