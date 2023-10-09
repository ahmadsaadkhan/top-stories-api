import { fetchTopStories } from '@/actions/fetchNews'
import styles from './page.module.css'
import TopStoryCard from '@/components/TopStoryCard';

export default async function Home() {
  const topStories = await fetchTopStories();
  if (!topStories) {
    return (<h4>There is some problem while fetching the records. Please try again.</h4>)
  }
  return (
    <main className={styles.main}>
      {topStories.results.map((story: any) => (
        <TopStoryCard
          title={story.title}
          imageUrl={story.multimedia[2]}
          url={story.url}
          styles={styles}
        />
      ))}
    </main>
  )
}
