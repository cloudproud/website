import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>CloudProud - A decentralized data platform.</title>
        <meta
          name="description"
          content="Empowering organizations by creating a decentralized data platform."
        />
      </Head>
      <Header />
      <main>
        <SecondaryFeatures />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
