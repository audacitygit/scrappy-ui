import React from "react"
import {
  Route,
  Routes,
  useNavigate,
  useParams
} from "react-router";
import { Accordion, AccordionItem, AvatarCard, Header, VerticalWidget } from "../lib/main"
import { CardContainer } from "../lib/main"
import { PageLayout } from "../lib/main"
import { BaseLayout } from "../lib/main"
import { SideNav } from "../lib/main"

interface AssetProps {
  id: string,
  name: string,
  type: string,
  value: string
}

interface PropertyOveriewProps {
  id: string,
  name: string,
  owner: string,
  squareFeet: string,
  bedrooms: number,
  yearBuilt: number
  assets: AssetProps[]
}

const properties = [
  {
    id: "prop-001",
    name: "Sunset Villas",
    address: "123 Ocean Drive, Miami, FL",
    owner: "John Doe",
    squareFeet: "3,200 sq ft",
    bedrooms: 4,
    bathrooms: 3,
    yearBuilt: 2015,
    assets: [
      { id: "asset-001", name: "Swimming Pool", type: "Amenity", value: "$20,000" },
      { id: "asset-002", name: "Solar Panels", type: "Energy System", value: "$15,000" },
      { id: "asset-003", name: "Security System", type: "Technology", value: "$5,000" },
    ],
  },
  {
    id: "prop-002",
    name: "Downtown Loft",
    address: "456 Metro Ave, New York, NY",
    owner: "Jane Smith",
    squareFeet: "1,500 sq ft",
    bedrooms: 2,
    bathrooms: 2,
    yearBuilt: 2018,
    assets: [
      { id: "asset-004", name: "Smart Thermostat", type: "Appliance", value: "$500" },
      { id: "asset-005", name: "Private Balcony", type: "Amenity", value: "$10,000" },
      { id: "asset-006", name: "Hardwood Flooring", type: "Interior Feature", value: "$7,500" },
      { id: "asset-007", name: "Built-in Sound System", type: "Technology", value: "$3,000" },
    ],
  },
  {
    id: "prop-003",
    name: "Green Acres Ranch",
    address: "789 Country Lane, Austin, TX",
    owner: "Robert Johnson",
    squareFeet: "8,500 sq ft",
    bedrooms: 6,
    bathrooms: 5,
    yearBuilt: 2002,
    assets: [
      { id: "asset-008", name: "Horse Stable", type: "Agricultural", value: "$50,000" },
      { id: "asset-009", name: "Tractor", type: "Equipment", value: "$25,000" },
      { id: "asset-010", name: "Private Lake", type: "Amenity", value: "$100,000" },
      { id: "asset-011", name: "Greenhouse", type: "Agricultural", value: "$30,000" },
      { id: "asset-012", name: "Security Gate", type: "Technology", value: "$8,000" },
    ],
  },
  {
    id: "prop-004",
    name: "Luxury Penthouse",
    address: "789 Sky Tower, Los Angeles, CA",
    owner: "Alice Brown",
    squareFeet: "2,800 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2020,
    assets: [
      { id: "asset-013", name: "Infinity Pool", type: "Amenity", value: "$40,000" },
      { id: "asset-014", name: "Smart Lighting", type: "Technology", value: "$4,000" },
      { id: "asset-015", name: "Wine Cellar", type: "Storage", value: "$15,000" },
      { id: "asset-016", name: "Rooftop Garden", type: "Outdoor Space", value: "$20,000" },
      { id: "asset-017", name: "Electric Car Charger", type: "Energy System", value: "$3,500" },
      { id: "asset-018", name: "Custom Built Kitchen", type: "Interior Feature", value: "$50,000" },
    ],
  },
  {
    id: "prop-005",
    name: "Coastal Retreat",
    address: "321 Beachside Blvd, San Diego, CA",
    owner: "David White",
    squareFeet: "4,200 sq ft",
    bedrooms: 5,
    bathrooms: 4,
    yearBuilt: 2010,
    assets: [
      { id: "asset-019", name: "Outdoor Barbecue", type: "Amenity", value: "$7,000" },
      { id: "asset-020", name: "Beachfront Access", type: "Feature", value: "Priceless" },
      { id: "asset-021", name: "Fire Pit", type: "Outdoor Feature", value: "$3,000" },
      { id: "asset-022", name: "Jacuzzi", type: "Amenity", value: "$8,000" },
    ],
  },
];


const cardData = [
  {
    title: "Property 1 craaaaaazy long title that is super long",
    imageSrc: "/scrappy_logo.png",
    description: "description 1 some crazy long descriptions that wont fit anywhere even if i try to extend it out sooooo many more lines"
  },
  {
    title: "Property 2",
    imageSrc: "/scrappy_logo.png",
    description: "description 2"
  },
  {
    title: "Property 3",
    imageSrc: "/scrappy_logo.png",
    description: "description 3"
  },
  {
    title: "Property 5",
    imageSrc: "/scrappy_logo.png",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageSrc: "/scrappy_logo.png",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageSrc: "/scrappy_logo.png",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageSrc: "/scrappy_logo.png",
    description: "description 5"
  },
  {
    title: "Property 5",
    imageSrc: "/scrappy_logo.png",
    description: "description 5"
  },
]

const assetData = [
  {
    title: "Painting",
    imageSrc: "/scrappy_logo.png",
    description: "description 1 some crazy long descriptions that wont fit anywhere even if i try to extend it out sooooo many more lines"
  },
  {
    title: "Car",
    imageSrc: "/scrappy_logo.png",
    description: "description 2"
  },
  {
    title: "Car 2",
    imageSrc: "/scrappy_logo.png",
    description: "description 3"
  },
  {
    title: "Safe",
    imageSrc: "/scrappy_logo.png",
    description: "description 5"
  },
  {
    title: "Asset 4",
    imageSrc: "/scrappy_logo.png",
    description: "description 5"
  },
  {
    title: "Asset 5",
    imageSrc: "/scrappy_logo.png",
    description: "description 5"
  },
  {
    title: "Asset 6",
    imageSrc: "/scrappy_logo.png",
    description: "description 5"
  },
  {
    title: "Asset 7",
    imageSrc: "/scrappy_logo.png",
    description: "description 5"
  },
]

const sideNavItems = [
  { label: "Dashboard", icon: "🏠", href: "#" },
  { label: "Properties", icon: "📋", href: "#" },
  { label: "Reports", icon: "📊", href: "#" },
  { label: "Settings", icon: "⚙️", href: "#" },
]


const Homepage = () => {
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/properties/${id}`)
  }
  return (
    <PageLayout pageTitle="Properties">
      <CardContainer>
        {
          properties.map((property) => <AvatarCard onClick={(e) => handleClick(property.id)} title={property.name} text={property.address} imageUrl={"/scrappy_logo.png"} key={property.id} label="Address" />)
        }
      </CardContainer>
    </PageLayout>
  )
}

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>()

  const propertyDetails = properties.find((property) => property.id === id)
  const data = Object.entries(propertyDetails ?? {})
    .filter(([key]) => key !== "assets")
    .map(([key, value]) => ({
      key,
      value: String(value), // ✅ Converts numbers to strings
    }));

  return (
    <PageLayout pageTitle="Accordion Demo">
      <Accordion>
        <AccordionItem title="Property Details" open>
          <VerticalWidget items={data} />
        </AccordionItem>
        <AccordionItem title="Assets">
          <CardContainer>
            {
              propertyDetails?.assets.map((item, index) => <AvatarCard title={item.name} text={item.value} imageUrl={"/scrappy_logo.png"} key={index} label="Value" />)
            }
          </CardContainer>
        </AccordionItem>
        <AccordionItem title="Section 3">
          <p>This is the content for Section 3.</p>
        </AccordionItem>
      </Accordion>
    </PageLayout>
  )
}

function App() {
  const count = "description 1 some crazy long descriptions that wont fit anywhere..."
  console.log(count.length)

  return (

    <BaseLayout header={<Header title="Property App" subtitle="Property Management" logoSrc="/scrappy_logo.png" userAvatarSrc="/scrappy_logo.png" />} sideNav={<SideNav items={sideNavItems} />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/properties/:id" element={<PropertyDetailsPage />} />
      </Routes>
    </BaseLayout>
  )
}

export default App
