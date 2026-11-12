import ModalsProvider from './modals/ModalsProvider'
import Header from '@/features/header/Header'
import Hero from '@/features/hero/Hero'
import HowItWorks from '@/features/how-it-works/HowItWorks'
import Roles from '@/features/roles/Roles'

export default function App() {
  return (
    <ModalsProvider>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Roles />
      </main>
    </ModalsProvider>
  )
}
