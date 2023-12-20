import React from 'react'
import { TimelineItemIcon, TimelineItemIconProps } from './components/Icon'
import ExternalIcon from './assets/external.svg?react'

const ITEMS = [
  {
    date: 2023,
    title: 'Owl Protocol',
    content: `Web3 for Every Business
One Simple API  | Owl Protocol is a multichain NFT marketplace and launchpad for Dynamic NFTs. Our protocol allows for engaging crafting, breeding, and other mechanics, which can target and attract users from other NFT communities to any other blockchain.

Building Blockchain explorer and various of UI components.
`,
    link: 'https://owlprotocol.xyz/',
    icon: 'blockchain',
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/hapyspace-assets.appspot.com/o/Owl%20Protocol%20Examples.png?alt=media&token=6e9509fa-2bc0-44a0-9550-8b2609cece8c'
  },
  {
    date: 2022,
    title: 'Scale Navigator',
    icon: 'Music',
    content:
      'Build the web-app for this project which is a MIDI to VST controller for musicians.',
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/hapyspace-assets.appspot.com/o/scale-navigator.gif?alt=media&token=ee45fbda-6c73-4798-b588-ac53a95f625e',
    link: 'https://www.scalenavigator.com/'
  },
  {
    date: 2022,
    title: 'Vulcan Link',
    icon: 'blockchain',
    content: `Landing page for Vulcan Link.
      Create smart contracts using Ethereum. Connect smart contracts with off-chain data with Chainlink. Scale smart contracts with Matic and BSC.`,
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/hapyspace-assets.appspot.com/o/vulcan-link-lp.gif?alt=media&token=c9eb6474-5636-4e83-a4aa-67dde7d88d74',
    link: 'https://vulcanlink.web.app/'
  },
  {
    date: 2021,
    title: 'Energy Solutions',
    content: `Building Management System Powered by Vantage.
Been working with the IoT department developing app to control and monitor versatile sensors such as water, power, heat and movement using AWS IoT as a backend and React for both desktop and mobile apps.`,
    icon: 'iot',
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/hapyspace-assets.appspot.com/o/vantage-enrg-project.gif?alt=media&token=1a3f35c7-2be1-4c3c-8f71-a4352517fcc7'
  },
  {
    date: 2021,
    title: 'Homevana',
    icon: 'housing',
    content:
      'Homevana is a web-app for listing house for sale or rent with mortgage calculations',
    imageSrc:
      'https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/7d46b4f6084d97cc89f18da0aea47596-1601634424046/ezgif-2-b3e80b54e698.gif'
  },
  {
    date: 2021,
    title: 'Vendly',
    icon: 'ecommerce',
    content:
      'Payments made social with Vendly, receive, request and share value easily over social media.',
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/hapyspace-assets.appspot.com/o/vendly.gif?alt=media&token=fd8387c1-d8d0-4dad-b33d-b017c2e7cdcb'
  },
  {
    date: 2020,
    title: 'Most Recommended Books',
    icon: 'community',
    content: `"Most Recommended Books - Find The Best Book Recommendations" was an exciting collaboration with the project owner, Richard. In this freelance endeavor, I had the privilege of developing a dynamic website that seamlessly integrated with various APIs to curate a collection of the most recommended books. This project showcased my skills in web development, API integration, and collaboration, resulting in a platform that empowers readers to discover the finest literary recommendations.`,
    imageSrc:
      'https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/project_item/attachment/30ec8dc659d49437073ec0bfd059d0b3-1609676145462/Untitled.png',
    link: 'https://www.mostrecommendedbooks.com/'
  },
  {
    date: 2020,
    title: 'Cointandem',
    icon: 'blockchain',
    content:
      'Digital Blockchain Service Cointandem is a fintech company providing a payment system purely for cryptocurrency. The payment system can be integrated with any functional retailing business allowing digital payments alongside any usual credit card or bank transfer exchange. Cointandem’s cutting-edge technology was developed for merchants and businesses online in order to conduct fraud free transactions. The technology has been integrated with exchanges, wallets and various e-commerce industries.',
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/hapyspace-assets.appspot.com/o/%E2%96%B6%20Page%201%20-%20Cointandem%202.1.gif?alt=media&token=0637b903-0ac8-4f24-8f44-6cd9f30dc4a7'
  },
  {
    date: 2019,
    title: 'IL Makiage Mini App',
    icon: 'ecommerce',
    content:
      'IL Makiage was born in New York in 1972, believing that makeup lovers and makeup artists deserve a real variety of professional make-up to express themselves. | This is a marketing mini-app for social media influencers.',
    imageSrc:
      'https://fiverr-res.cloudinary.com/image/upload/t_portfolio_project_large,q_auto,f_auto/v1/attachments/portfolio_project/item/7970b285a43c09ebd464da40ceb22a54/Screen%20Shot%202018-08-19%20at%2016.28.32.png'
  },
  {
    date: 2015,
    title: 'Midburn (Regional burning-man)',
    content: `I have actively volunteered my expertise to enhance various open-source applications, utilizing a tech stack that encompasses RoR (Ruby on Rails), NodeJS, MySQL, and prominent client-side frameworks such as AngularJS and React. My contributions have helped improve the functionality and usability of these projects while collaborating with a local community of developers. https://www.midburn.org/`,
    link: 'https://github.com/Midburn/spark',
    icon: 'community'
  }
] satisfies TimelineItemProps[]

type TimelineItemProps = {
  date: number
  title: string
  icon?: TimelineItemIconProps
  content: string
  imageSrc?: string
  link?: string
}

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  return (
    <div className="p-4 rounded-md bg-[#CBEC48] text-black w-[100%] min-h-[250px] flex flex-col gap-6 relative timeline-item">
      <div className="bg-[#CBEC48] rounded-md left-0 -ml-[88px] py-1 px-2 text-xs font-bold absolute top-0 text-black">
        {props.date}
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="flex items-center gap-2">
          <span className="text-4xl font-heading">{props.title}</span>
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              className="flex items-center gap-2"
            >
              <span className="w-3 h-3">
                <ExternalIcon />
              </span>
            </a>
          )}
        </span>
        {props.icon && <TimelineItemIcon name={props.icon} />}
      </div>
      <p className="font-typography text-md ">{props.content}</p>
      {props.imageSrc && (
        <img src={props.imageSrc} alt={props.title} className="w-full h-full" />
      )}
    </div>
  )
}

function App() {
  const sortedItems = ITEMS.sort((a, b) => b.date - a.date)

  return (
    <div className="min-h-screen w-full p-4 lg:grid gap-4 flex flex-col grid-cols-12">
      <h1 className="intro-text font-bold">
        Hello 👋🏽
        <br />
        My name is Nate and I code with React
        <br />
        👾
      </h1>
      {sortedItems.map((item, key) => (
        <TimelineItem key={key} {...item} />
      ))}
    </div>
  )
}

export default App
