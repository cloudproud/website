import { Button } from '@/components/Button'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Let&apos;s get in touch and book a demo today!
            See how our solution could allow your organization to create a truly scalable data architecture.
          </p>
          <div className="mt-8 flex justify-center">
            <Button color="white" href="mailto:jeroen@cloudproud.nl">
              Get in touch!
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
