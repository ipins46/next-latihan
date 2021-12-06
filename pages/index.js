// import Head from "next/head"
import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"

export default function HomePage({events}) {
  return (
    <div>
      {/* <Head>
        <title>DJ Events</title>
        <meta name='description' content='Welcome to DJ Events' />
      </Head> */}

      <Layout>
        <h1>Upcoming Events</h1>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: {events},
    revalidate: 1
  }
}