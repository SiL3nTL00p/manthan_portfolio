import { CommitsGrid } from "@/components/ui/github.tsx"
import { MenuBarUse } from "@/components/ui/menu_use";

const CommitsGridDemo = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">

      <header className="fixed top-0 left-0 right-10 bottom-0 flex-row-reverse h-10 pr-20 pt-10 pl-10 bg-black z-50 bg-opacity-0">
          <MenuBarUse />
      </header>

      <CommitsGrid text="Welcome" />
    </div>
  )
}

export { CommitsGridDemo }

