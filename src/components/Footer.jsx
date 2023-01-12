import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-8">
          <div>
            <div className="flex items-center text-gray-900">
              <Logo className="h-10 w-20 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="text-base font-semibold">CloudProud B.V.</p>
                <p className="mt-1 text-sm">KVK 86820125, Ceintuurbaan 15, 8022 AW Zwolle.</p>
              </div>
            </div>
          </div>
          <div>
            <Button href="https://github.com/cloudproud" target="_blank">
              Github
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0 w-full">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
