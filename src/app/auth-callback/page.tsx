import { useRouter, useSearchParams } from "next/navigation"

import { Loader2 } from "lucide-react"

const Page = () => {
  const router = useRouter()

  const searchParams = useSearchParams()
  return <div className="w-full mt-24 flex justify-center"></div>
}

export default Page
