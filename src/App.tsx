import React from "react"
import { Card, Header } from "../lib/main"
import { CardContainer } from "../lib/main"
import { PageLayout } from "../lib/main"
import { BaseLayout } from "../lib/main"
import { TopNav } from "../lib/main"
import { SideNav } from "../lib/main"

const cardData = [
  {
    title: "Property 1 craaaaaazy long title that is super long",
    imageSrc: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 1 some crazy long descriptions that wont fit anywhere even if i try to extend it out sooooo many more lines"
  },
  {
    title: "Property 2",
    imageSrc: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 2"
  },
  {
    title: "Property 3",
    imageSrc: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 3"
  },
  {
    title: "Property 5",
    imageSrc: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageSrc: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageSrc: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 5"
  },
  {
    title: "Property 5",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageSrc: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 5"
  },
]

const sideNavItems = [
  { label: "Dashboard", icon: "🏠", href: "#" },
  { label: "Properties", icon: "📋", href: "#" },
  { label: "Reports", icon: "📊", href: "#" },
  { label: "Settings", icon: "⚙️", href: "#" },
]

function App() {
  const count = "description 1 some crazy long descriptions that wont fit anywhere..."
  console.log(count.length)

  return (
    <BaseLayout header={<Header title="Property App" subtitle="Property Management" logoSrc="/scrappy_logo.png" userAvatarSrc="/scrappy_logo.png" />} sideNav={<SideNav items={sideNavItems} />}>
      <PageLayout pageTitle="Properties">
        <CardContainer>
          {
            cardData.map((item, index) => <Card title={item.title} description={item.description} imageSrc={item.imageSrc as string} key={index} />)
          }
        </CardContainer>
      </PageLayout>
    </BaseLayout>
  )
}

export default App
