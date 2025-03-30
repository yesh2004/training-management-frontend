import {
    Book,
    ChevronRight,
    FileText,
  } from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Progress } from "@/components/ui/progress"
  import {Button} from "@/components/ui/button"
  import {Badge} from "@/components/ui/badge"
 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
function page() {
  return (
    <div className="ml-9">

    <h1 className="text-xl font-sans font-extrabold"> Your Progress</h1>
    <div className="max-w-full flex">
    <Card className="mt-5 flex-1/3 w-[400px] " >
        <CardHeader>
            <CardTitle className="text-3xl font-bold" >Frontend Development</CardTitle>
            <CardDescription>Current Module</CardDescription>
        </CardHeader>
        <CardContent>
            <Progress value={50} />
            <CardDescription>50% Completed</CardDescription>
        </CardContent>
        
    </Card>
    <Card className="mt-5 flex-1/3 w-[400px] ml-4" >
    <CardHeader>
            <CardTitle className="text-3xl font-bold" >8/12</CardTitle>
            <CardDescription>Assignments</CardDescription>
        </CardHeader>
        <CardContent>
            <Progress value={66} />
            <CardDescription>66.6% Completed</CardDescription>
        </CardContent>
        
    </Card>
    <Card className="mt-5 flex-1/3 w-[400px] ml-4" >
        <CardHeader>
            <CardTitle className="text-3xl font-bold" >74%</CardTitle>
            <CardDescription>Overall Progress</CardDescription>
        </CardHeader>
        <CardContent>
        <Progress value={74} />
        <CardDescription>74% Completed</CardDescription>
        </CardContent>
        
    </Card>

    </div>
    <section className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Upcoming Assignments</h2>
                  <Link href="/dashboard/assignments"> 
                  <Button variant="ghost" size="sm" className="gap-1 text-gray-500">
                   View All <ChevronRight className="h-4 w-4" /> 
                  </Button>
                  </Link>
                </div>
                <div className="grid gap-4">
                  <Card>
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
                            <span className="text-xs text-gray-500">Mar 27, 2025</span>
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
                            <span className="text-xs text-gray-500">April 1, 2025</span>
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
                            <span className="text-xs text-gray-500">April 2, 2025</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Learning Materials</h2>
                    <Link href="/dashboard/learning"> 
                    <Button variant="ghost" size="sm" className="gap-1 text-gray-500">
                     View All <span> <ChevronRight className="h-4 w-4" /> </span>
                    </Button>
                    </Link>
                  </div>
                  <Card>
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
                        </div>
                        <div className="flex items-center gap-3 p-4">
                          <div className="bg-blue-100 p-2 rounded-md">
                            <Book className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">API Design Patterns</h3>
                            <p className="text-xs text-gray-500">PDF • 2.5 hours</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4">
                          <div className="bg-purple-100 p-2 rounded-md">
                            <Book className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Frontend Testing Strategies</h3>
                            <p className="text-xs text-gray-500">Video Course • 3 hours</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Mentor Feedback</h2>
                  </div>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>SM</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">Sarah Miller</h3>
                              <span className="text-xs text-gray-500">2 days ago</span>
                            </div>
                            <p className="text-sm mt-1">
                              Great progress on your React components! I'd recommend focusing on state management next.
                              Let's discuss this in our next 1:1 meeting.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>RJ</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">Robert Johnson</h3>
                              <span className="text-xs text-gray-500">5 days ago</span>
                            </div>
                            <p className="text-sm mt-1">
                              Your API integration assignment shows good understanding of async concepts. Consider
                              adding error handling for a more robust solution.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t px-4 py-3">
                      <Button variant="outline" size="sm" className="w-full">
                        Schedule Mentor Meeting
                      </Button>
                    </CardFooter>
                  </Card>
                </section>
              </div>
            

         
    </div>
  )
}

export default page