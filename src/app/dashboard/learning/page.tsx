import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import {
    Book,
    ChevronRight,
    Download
  } from "lucide-react"
  
  function Page() {
    return (
      <div className="p-4">
        <section className="w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Learning Materials</h2>
            <Button variant="ghost" className="text-sm text-blue-600 hover:bg-blue-50">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <Card className="w-full">
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                <div className="flex items-center gap-3 p-4">
                  
                  <div className="bg-green-100 p-2 rounded-md">
                    <Book className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Modern React with Hooks</h3>
                    <p className="text-xs text-gray-500">eBook • 4.2 hours</p>
                    
                  </div>
                  <Download className="text-sm ml-auto cursor-pointer"/>
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Book className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">API Design Patterns</h3>
                    <p className="text-xs text-gray-500">PDF • 2.5 hours</p>
                  </div>
                  <Download className="text-sm ml-auto cursor-pointer"/>
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="bg-purple-100 p-2 rounded-md">
                    <Book className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Frontend Testing Strategies</h3>
                    <p className="text-xs text-gray-500">Video Course • 3 hours</p>
                  </div>
                  <Download className="text-sm ml-auto cursor-pointer"/>
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="bg-yellow-100 p-2 rounded-md">
                    <Book className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Advanced CSS Techniques</h3>
                    <p className="text-xs text-gray-500">eBook • 3.8 hours</p>
                  </div>
                  <Download className="text-sm ml-auto cursor-pointer"/>
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="bg-red-100 p-2 rounded-md">
                    <Book className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Node.js Best Practices</h3>
                    <p className="text-xs text-gray-500">PDF • 2.7 hours</p>
                  </div>
                  <Download className="text-sm ml-auto cursor-pointer"/>
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="bg-indigo-100 p-2 rounded-md">
                    <Book className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">GraphQL Fundamentals</h3>
                    <p className="text-xs text-gray-500">Video Course • 4.5 hours</p>
                  </div>
                  <Download className="text-sm ml-auto cursor-pointer"/>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    )
  }
  
  export default Page