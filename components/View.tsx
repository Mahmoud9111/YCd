import Ping from '@/components/ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'

const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client.withConfig(
        { useCdn: false }
    ).fetch(STARTUP_VIEWS_QUERY, { id })

  return (
    <div className='view-container bg-pink-100'>
        <div className='absolute -top-2 -right-2 bg-pink-100'>
            <Ping/>
        </div>
        <p className='view-text'>
            <span className=''>views: {totalViews}</span>
        </p>
    </div>
  )
}

export default View