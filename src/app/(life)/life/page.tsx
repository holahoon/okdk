import { Icons } from "@/components/icons"

export default function Life() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Icons.construction width={100} height={100} />
        <p className="mt-8 text-center text-primary/80">
          Life still in progress
        </p>
      </div>
    </div>
  )
}
