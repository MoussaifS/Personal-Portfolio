"use client"

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { BadgeCheckIcon } from 'lucide-react'
import { data } from '../constants'
import { useEffect } from 'react'

export function Hero() {
  const { avatar, about, links } = data

  // Load TikTok embed script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <div className='flex flex-row'>
        <a
          href='https://github.com/emapeire'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full'
        >
          <Avatar className='size-28 shadow border'>
            <AvatarImage alt={avatar.name} src={'/assets/avatar.webp'} />
            <AvatarFallback className='font-mono font-bold'>
              {avatar.initials}
            </AvatarFallback>
          </Avatar>
        </a>
      </div>

      <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4'>
        <h1 className='flex dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance'>
          Moussaif Souhail
        </h1>
        <Button
          variant='outline'
          size={null}
          className='font-mono font-bold text-xs px-2 py-1 rounded-full hover:scale-105 transition-all ease-in-out duration-300 bg-white border-black text-green-800 dark:text-green-600 w-fit'
          asChild
        >
          <a
            href='https://www.linkedin.com/in/souhail-mousssaif/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Available
          </a>
        </Button>
      </div>

      <div className='flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty'>
        <h2>{about.title}</h2>
        <h3>{about.description1}</h3>
        <h3>{about.description2}</h3>
      </div>

      <nav className='flex gap-x-4 pt-4'>
        {links.map((link) => (
          <Tooltip key={link.title}>
            <TooltipTrigger asChild>
              <Button
                variant='outline'
                size={null}
                key={link.title}
                className='p-2 shadow rounded-lg'
                asChild
              >
                <a
  key={link.title}
  href={link.url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={link.title}
  className="flex justify-center items-center md:gap-2"
  download={link.download ? 'Souhail_Moussaif_Resume.pdf' : undefined}
>
  <link.icon className="size-6 stroke-[1.5]" />
  <p className="hidden md:block">{link.title}</p>
</a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side='bottom' className='md:hidden'>
              <p>{link.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>

      {/* TikTok Community Showcase */}
      <div className="mt-6">
        <div className="mb-3">
          <h3 className="font-medium text-base dark:text-neutral-200 text-neutral-800">Check out my TikTok Arabic tech community:</h3>
          <p className="text-sm dark:text-neutral-400 text-neutral-600">Growing a 1.5K-strong TikTok tech community to inspire others 🧑‍🤝‍🧑</p>
        </div>
        <a href="https://www.tiktok.com/@duckthedj" target="_blank" rel="noopener noreferrer">
          <blockquote 
            className="tiktok-embed" 
            cite="https://www.tiktok.com/@moussaifsouhail/video/7542583588919790866?lang=en" 
            data-video-id="7542583588919790866" 
            style={{ maxWidth: "325px", minWidth: "200px" }}
          >
            <section>Loading...</section>
          </blockquote>
        </a>
      </div>
      
    </>
  )
}
