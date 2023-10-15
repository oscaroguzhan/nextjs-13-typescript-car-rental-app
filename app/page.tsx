import {SearchBar, CustomFilter, Hero} from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-10 py-2 px-6 max-width'>
        <div>
          <h1 className='text-3xl font-bold'>OUR CARS</h1>
          <p>We have cars for everyone! Let's explore!</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Model" />
            <CustomFilter title="Year" />
          </div>
        </div>
      </div>
    </main>
  )
}
