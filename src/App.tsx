import React from "react"
import { Card } from "../lib/main"
import { CardContainer } from "../lib/main"
import { PageLayout } from "../lib/main"
import { RootLayout } from "../lib/main"
import { TopNav } from "../lib/main"
import { SideNav } from "../lib/main"

const cardData = [
  {
    title: "Property 1 craaaaaazy long title that is super long",
    imageUrl: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 1 some crazy long descriptions that wont fit anywhere even if i try to extend it out sooooo many more lines"
  },
  {
    title: "Property 2",
    imageUrl: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 2"
  },
  {
    title: "Property 3",
    imageUrl: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 3"
  },
  {
    title: "Property 5",
    imageUrl: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageUrl: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageUrl: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageUrl: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageUrl: "https://images.dog.ceo/breeds/bluetick/n02088632_175.jpg",
    description: "description 5"
  },
]

const sideNavItems = [
  {
    text: "Dashboard",
    isLink: true,
    href: "/dashboard"
  },
  {
    text: "Properties",
    isLink: true,
    href: "/properties"
  },
  {
    text: "Help",
  },
]

function App() {
  const count = "description 1 some crazy long descriptions that wont fit anywhere..."
  console.log(count.length)

  return (
    <RootLayout header={<TopNav title="APM" />} sideNav={<SideNav items={sideNavItems} />}>
      <PageLayout>
        <CardContainer>
          {
            cardData.map((item, index) => <Card title={item.title} description={item.description} imageUrl={item.imageUrl} key={index} />)
          }
        </CardContainer>
      </PageLayout>
    </RootLayout>
  )
}

export default App
