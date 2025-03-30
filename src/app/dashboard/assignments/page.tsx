
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Book,
    ChevronRight,
    FileText,
  } from "lucide-react"
  import {Button} from "@/components/ui/button"
  import {Badge} from "@/components/ui/badge"
function page() {
  return (
    <div>

<section className=" ml-3">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Upcoming Assignments</h2>
            
                </div>
                <div className="grid gap-4">
                  <Card className="">
                    <CardContent className="p-0">
                      <div className="divide-y divide-gray-100">
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-2 rounded-md">
                              <FileText className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-medium">React Component Architecture</h3>
                              <p className="text-sm text-gray-500">Create a reusable component library</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                              Due Tomorrow
                            </Badge>
                            <span className="text-xs text-gray-500">Mar 20, 2025</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-2 rounded-md">
                              <FileText className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-medium">API Integration Project</h3>
                              <p className="text-sm text-gray-500">Connect frontend to backend services</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Due in 5 days
                            </Badge>
                            <span className="text-xs text-gray-500">Mar 24, 2025</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-start gap-4">
                            <div className="bg-red-100 p-2 rounded-md">
                              <FileText className="h-5 w-5 text-red-600" />
                            </div>
                            <div>
                              <h3 className="font-medium">Performance Optimization</h3>
                              <p className="text-sm text-gray-500">Improve application loading speed</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              Due in 7 days
                            </Badge>
                            <span className="text-xs text-gray-500">Mar 26, 2025</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
    </div>
  )
}

export default page