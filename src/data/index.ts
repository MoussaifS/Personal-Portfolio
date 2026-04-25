import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { XIcon } from '@/components/icons/x'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'
import { title } from 'process'

export const AVATAR = {
  name: 'Moussaif Souhail',
  initials: 'MS'
}

export const ABOUT = {
  title: `Product Development Engineer with full-stack expertise. Based in Riyadh, Saudi Arabia 🇸🇦`,
  description1: `Bridging engineering and business strategy to create products that scale. Experience launching solutions across fintech, PropTech, and e-commerce ecosystems in Saudi Arabia 🇸🇦 and Southeast Asia 🇲🇾.`,
  description2: `🎯 My main goal is to build innovative products that drive business growth while delivering exceptional user experiences.`
}

export const LINKS = [
  // {
  //   title: 'GitHub',
  //   url: 'https://github.com/MoussaifS',
  //   icon: GitHubIcon
  // },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/souhail-mousssaif/',
    icon: LinkedInIcon
  },
  // {
  //   title: 'TikTok',
  //   url: 'https://www.tiktok.com/@duckthedj',
  //   icon: XIcon
  // },
  {
    title: 'Resume',
    url: '/assets/Moussaif_Resume.pdf', // Change this to the path of your PDF file
    icon: FileTextIcon,
    download: true // Add this property to enable download
  },
  {
    title: 'Email',
    url: 'mailto:souhailmoussaif1@gmail.com',
    icon: MailIcon
  },
  {
    title: 'WhatsApp',
    // WhatsApp button - sends a message to +966537665619
    url: `https://api.whatsapp.com/send?phone=966537665619&text=${encodeURIComponent(
      'Hi Souhail, I found your portfolio'
    )}`,
    icon: LinkIcon
    },
  // {
  //   title: 'Other Links',
  //   url: 'https://link.emapeire.xyz',
  //   icon: LinkIcon
  // }
]
export const CAREER = [
  {
    company: '🇸🇦 OneCard',
    link: 'https://www.onecard.com/sa-ar/', // Update if different
    badges: ['On-site'],
    Region: '🇸🇦',
    jobs: [
      {
        title: 'Business Development and Product Specialist',
        start: 'Oct, 2025', // Add your actual start date
        end: 'Present',
        description: [
          'Managing strategic partnerships and business relationships in the fintech sector.',
          'Driving business growth through stakeholder engagement and market development initiatives.',
          'Collaborating with cross-functional teams to optimize user experience and business growth.'
        ]
      }
    ]
  },
  {
    company: '🇸🇦 Nuzul [Proptech]',
    link: 'https://nuzul.co/', // Add link if available
    badges: ['On-site'],
    Region: '🇸🇦',
    jobs: [
      {
        title: 'Software Engineer & Product Manager',
        start: 'Apr, 2025',
        end: 'Oct, 2025',
        description: [
          'Leading technical architecture and product strategy for proptech solutions in Saudi Arabia.',
          'Managing cross-functional teams to deliver innovative real estate technology platforms.',
          'Driving product development from concept to market launch with focus on user experience and scalability.'
        ]
      }
    ]
  },
  {
    company: '🇸🇦 Tripex [Tourism Experiences – Mvplab]',
    link: 'https://trip-ex.com/', // Add link if available
    badges: ['Remote'],
    Region: '🇸🇦',
    jobs: [
      {
        title: 'Lead Software Engineer',
        start: 'Apr, 2024',
        end: 'Apr, 2025',
        description: [
          'Led the technical development and successful graduation from NTDP.gov program while coordinating 2 offshore teams.',
          'Built full-stack MVP with Node.js, MySQL REST API, cloud infrastructure, and frontend services within 3 months.',
          'Implemented SaaS integrations and UX improvements based on vendor/customer feedback, increasing adoption and satisfaction.'
        ]
      }
    ]
  },
  {
    company: '🇲🇾 iPrice Group',
    link: 'https://iprice.my',
    badges: ['Hybrid'],
    Region: '🇲🇾',
    jobs: [
      {
        title: 'Software Engineer Intern',
        start: 'Jul, 2023',
        end: 'Nov, 2023',
        description: [
          'Built and maintained platform features with PHP, Laravel, and GraphQL.',
          'Optimized CTAs and ran A/B tests, boosting email sign-ups by 1.5%.',
          'Used TeamCity CI/CD pipelines to improve deployment and delivery in Agile environment.'
        ]
      }
    ]
  },
  {
    company: '🇲🇾 MulahRewards',
    link: 'https://www.mulahrewards.com/',
    badges: ['On-site'],
    Region: '🇲🇾',
    jobs: [
      {
        title: 'Software Engineer Intern',
        start: 'Aug, 2022',
        end: 'Oct, 2022',
        description: [
          'Developed features for a CRM platform using Ruby on Rails and Vue 3.',
          'Helped migrate from Vue 2 to Vue 3, improving performance by 15%.',
          'Handled daily production traffic and supported thousands of loyalty transactions.'
        ]
      }
    ]
  },
  {
    company: '🇸🇦 Anfal Economic Consulting',
    link: '', // Add link if available
    Region: '🇸🇦',
    badges: ['On-site'],
    jobs: [
      {
        title: 'Information Technology Assistant',
        start: 'Jan, 2018',
        end: 'Jan, 2020',
        description: [
          'Provided technical support during events, including the Riyadh International Franchise Expo 2019.',
          'Handled software and hardware upgrades, installations, and maintenance tasks.',
          'Demonstrated strong problem-solving and communication skills in high-pressure environments.'
        ]
      }
    ]
  }
]


const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJSIcon
  },
  REACT: {
    name: 'React',
    icon: ReactIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon
  },
  HTML: {
    name: 'HTML',
    icon: HTMLIcon
  },
  CSS: {
    name: 'CSS',
    icon: CSSIcon
  },
  VITE: {
    name: 'Vite',
    icon: ViteIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon
  },
  SHADCN: {
    name: 'Shadcn/ui',
    icon: ShadcnIcon
  },
  SWC: {
    name: 'SWC',
    icon: SWCIcon
  },
  OPENAI: {
    name: 'OpenAI',
    icon: OpenAIIcon
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroIcon
  },
  SVELTE: {
    name: 'Svelte',
    icon: SvelteIcon
  },
  NODE: {
    name: 'Node.js',
    icon: NodeJSIcon
  },
  VITEST: {
    name: 'Vitest',
    icon: VitestIcon
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    icon: BootstrapIcon
  },
  SUPABASE: {
    name: 'Supabase',
    icon: SupabaseIcon
  },
  REDUX: {
    name: 'Redux',
    icon: ReduxIcon
  },
  PNPM: {
    name: 'PNPM',
    icon: PNPMIcon
  },
  VERCEL: {
    name: 'Vercel',
    icon: VercelIcon
  },
  BASEHUB: {
    name: 'BaseHub',
    icon: BasehubIcon
  },
  GRAPHQL: {
    name: 'GraphQL',
    icon: GraphQLIcon
  }
}

export const PROJECTS = [
  {
    title: 'loc8.club - Urban Explorers Journey Platform',
    tags: [
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
      TAGS.NEXT,
      TAGS.NODE,
      TAGS.VERCEL
    ],
    description:
      'Top 10 Finalist, Misk Super Hackathon | Launchpad 2025 Qualifier. Built a curated city exploration platform with organic user growth. Focused on enhancing local discovery and supporting Vision 2030 tourism goals.',
    link: {
      preview: 'https://loc8.club'
    },
    image: '/images/loc8-club.png'
  },
  {
    title: 'TikTok Tech Community - Knowledge Sharing Platform',
    tags: [

    ],
    description:
      'Growing a 2K-strong TikTok tech community focused onCreating educational content about, Business, market research, and tech entrepreneurship in Saudi Arabia and beyond.',
    link: {
      preview: 'https://www.tiktok.com/@MoussaifSouhail'
    },
    image: '/images/tiktok-community.png' // Make sure to add an appropriate image
  },
  {
    title: "Venue Booking App – Office Space Scheduling Platform",
    description:
    'Building a real-time venue booking platform with smart availability and pricing. Focused on scalability for small to mid-sized operators.',
    tags: [
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.VERCEL,
      TAGS.NEXT,
    ],
    link: {
      preview: 'https://bookingvenues-5pdr.vercel.app/',
      github: 'https://github.com/MoussaifS/bookingvenues',
    },
  },

  {
    title: 'myUniEvent – Decentralized University Events Platform',
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.CSS,
      TAGS.HTML,
      TAGS.SUPABASE,
      // TAGS.Vite,

    ],
    description:
      'Built a event management platform connecting students, clubs, and universities. Led end-to-end development and user adoption efforts. Gained practical insights into product-market fit, business alignment, and execution.',
    link: {
      github: 'https://github.com/MoussaifS/myUniEvent',
      preview: 'https://fyp-unievent.web.app'
    },
    image: '/images/myunievent.png' // Update this to your actual image path
  },
  {
    title: 'Laptop Recommendation System',
    tags: [
      TAGS.BASEHUB,
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.PNPM,
      TAGS.VERCEL
    ],
    description:
      'A Laravel MVC project that recommends laptops based on user-specific requirements. The system Processes user input through a data transformation pipeline to generate tailored hardware matches from a database of nearly 1,000 laptops.',
    link: {
      github: 'https://github.com/MoussaifS/iprice-presentation-code',
      // preview: 'https://nextjs-blog-basehub.vercel.app'
    },
    image: '/images/basehub-nextjs-blog.png'
  },
  {
    title: 'Distraction-Free YouTube Chrome Extension',
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.CSS,
    ],
    description:
      'A Chrome extension designed to reduce digital distractions on YouTube by hiding thumbnails, suggestions, and other visual clutter.',
    link: {
      github: 'https://github.com/MoussaifS/the-minimalist-tube-', // Add your GitHub repo link
      preview: '' // Optional: if available on Chrome Web Store or demo
    },
    image: '/images/minimalist-tube.png' // Optional: Add if you have a screenshot
  },
  {
    title: 'Bob the Chatbot -Chatbot – Rule-Based Conversational UI',
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.HTML,
      TAGS.CSS,
    ],
    description:
      'A minimalist, responsive web chatbot completed in under 2 hours for a job interview.Demonstrating real-time DOM manipulation, responsive layouts, and modular architecture for clean UI behavior and message handling.',
    link: {
      github: 'https://github.com/MoussaifS/chatbot'
    },
    image: '/images/chat-with-vader.png'
  },
]
