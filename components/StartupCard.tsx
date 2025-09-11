import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const StartupCard = ({post}: {post: StartupTypeCard}) => {
  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>{formatDate( post._createdAt)}</p>
            <div className='flex gap-1.5'>
                <EyeIcon className="size-6 text-pink-600"/>
                <span className='text-16'>{post.views}</span>
            </div>
        </div>

        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${post.author?._id}`} ><p className='text-16 line-clamp-1'>{post.author?.name}</p></Link>
                <Link href={`/startup/${post._id}`}> <h3 className='text-2xl text-bold'>{post.title}</h3> </Link>
            </div>
            <Link href={`/user/${post.authorId}`}>
                <Image src="https://placehold.co/600x400" alt="placegolder" width={48} height={48} className='rounded-full'></Image>
            </Link>
        </div>
        <Link href={`/startup/${post._id}`}>
            <p className='startup-card_desc'>{post.description}</p>
            <img src="https://placehold.co/600x400" alt="palceholder" className='startup-card_img' />
        </Link>
        <div className='flex mt-5 gap-3'>
            <Link href={`/?query=${post.category.toLowerCase()}`}> <p className='text-xl'>{post.category}</p> </Link>
            <div className='flex-1'></div>
            <Button className="startup-card_btn" asChild>

                <Link href={`/startup/${post._id}`}>Details</Link>
            </Button>
        </div>
    </li>
  )
}

export default StartupCard