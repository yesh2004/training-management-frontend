
import { Card, CardDescription, CardTitle,CardContent,CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar,AvatarImage,AvatarFallback } from '@radix-ui/react-avatar'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
function page() {
  return (
    <div>
        <Card className='w-[95%] p-9 mx-auto flex'>
        
            <CardContent>

            
            <CardTitle className='text-xl'>Name: Jack</CardTitle>
            <CardDescription>
                <p><span>Mentor ID:</span> RXD4X43</p>
                <p><span>Description:</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras da</p>
            </CardDescription>
            </CardContent>
        </Card>
        <main className="p-6">
            <div className="grid gap-6">
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Trainees (8)</CardTitle>
                  <CardDescription>Manage and track progress of your trainees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-gray-500 bg-gray-50 border-b">
                      <div className="col-span-3">Trainee</div>
                      <div className="col-span-2">Current Module</div>
                      <div className="col-span-2">Progress</div>
                      <div className="col-span-2">Last Activity</div>
                      <div className="col-span-2">Status</div>
                      <div className="col-span-1"></div>
                    </div>
                    <div className="divide-y">
                      {[
                        {
                          id: "1",
                          name: "John Doe",
                          avatar: "JD",
                          role: "Frontend Developer",
                          module: "React Fundamentals",
                          progress: 65,
                          lastActivity: "Today",
                          status: "On Track",
                        },
                        {
                          id: "2",
                          name: "Alice Smith",
                          avatar: "AS",
                          role: "Backend Developer",
                          module: "API Design",
                          progress: 78,
                          lastActivity: "Yesterday",
                          status: "On Track",
                        },
                        {
                          id: "3",
                          name: "Robert Johnson",
                          avatar: "RJ",
                          role: "Full Stack Developer",
                          module: "Database Design",
                          progress: 42,
                          lastActivity: "2 days ago",
                          status: "Needs Help",
                        },
                        {
                          id: "4",
                          name: "Emily Davis",
                          avatar: "ED",
                          role: "UI/UX Designer",
                          module: "User Research",
                          progress: 91,
                          lastActivity: "Today",
                          status: "Excelling",
                        },
                        {
                          id: "5",
                          name: "Michael Wilson",
                          avatar: "MW",
                          role: "Mobile Developer",
                          module: "React Native",
                          progress: 58,
                          lastActivity: "Today",
                          status: "On Track",
                        },
                        {
                          id: "6",
                          name: "Sarah Lee",
                          avatar: "SL",
                          role: "Frontend Developer",
                          module: "State Management",
                          progress: 45,
                          lastActivity: "Yesterday",
                          status: "Needs Help",
                        },
                        {
                          id: "7",
                          name: "David Brown",
                          avatar: "DB",
                          role: "Backend Developer",
                          module: "Authentication",
                          progress: 10,
                          lastActivity: "5 days ago",
                          status: "At Risk",
                        },
                      ].map((trainee) => (
                        <div key={trainee.id} className="grid grid-cols-12 gap-4 p-4 items-center">
                          <div className="col-span-3 flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${trainee.avatar}`} />
                              <AvatarFallback>{trainee.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{trainee.name}</div>
                              <div className="text-xs text-gray-500">{trainee.role}</div>
                            </div>
                          </div>
                          <div className="col-span-2">{trainee.module}</div>
                          <div className="col-span-2">
                            <div className="flex items-center gap-2">
                              <Progress value={trainee.progress} className="h-2 w-full max-w-24" />
                              <span className="text-xs">{trainee.progress}%</span>
                            </div>
                          </div>
                          <div className="col-span-2">{trainee.lastActivity}</div>
                          <div className="col-span-2">
                            <Badge
                              variant="outline"
                              className={
                                trainee.status === "Excelling"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : trainee.status === "On Track"
                                    ? "bg-blue-50 text-blue-700 border-blue-200"
                                    : trainee.status === "Needs Help"
                                      ? "bg-amber-50 text-amber-700 border-amber-200"
                                      : "bg-red-50 text-red-700 border-red-200"
                              }
                            >
                              {trainee.status}
                            </Badge>
                          </div>
                          <div className="col-span-1 text-right">
                            <Link href={`/mentor-dashboard/trainee/${trainee.id}`}>
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              
              <Card>
                <CardHeader>
                  <CardTitle>Pending Tasks</CardTitle>
                  <CardDescription>Tasks that require your attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-gray-500 bg-gray-50 border-b">
                      <div className="col-span-3">Task</div>
                      <div className="col-span-3">Trainee</div>
                      <div className="col-span-2">Due Date</div>
                      <div className="col-span-2">Priority</div>
                      <div className="col-span-2"></div>
                    </div>
                    <div className="divide-y">
                      {[
                        {
                          task: "Review React Component Architecture",
                          trainee: "John Doe",
                          traineeAvatar: "JD",
                          dueDate: "Today",
                          priority: "High",
                        },
                        {
                          task: "Grade API Integration Project",
                          trainee: "Alice Smith",
                          traineeAvatar: "AS",
                          dueDate: "Tomorrow",
                          priority: "Medium",
                        },
                        {
                          task: "Provide feedback on Database Schema",
                          trainee: "Robert Johnson",
                          traineeAvatar: "RJ",
                          dueDate: "Mar 22, 2025",
                          priority: "Medium",
                        },
                        {
                          task: "Review User Research Report",
                          trainee: "Emily Davis",
                          traineeAvatar: "ED",
                          dueDate: "Mar 23, 2025",
                          priority: "Low",
                        },
                      ].map((task, i) => (
                        <div key={i} className="grid grid-cols-12 gap-4 p-4 items-center">
                          <div className="col-span-3">{task.task}</div>
                          <div className="col-span-3 flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={`/placeholder.svg?height=24&width=24&text=${task.traineeAvatar}`} />
                              <AvatarFallback>{task.traineeAvatar}</AvatarFallback>
                            </Avatar>
                            <span>{task.trainee}</span>
                          </div>
                          <div className="col-span-2">{task.dueDate}</div>
                          <div className="col-span-2">
                            <Badge
                              variant="outline"
                              className={
                                task.priority === "High"
                                  ? "bg-red-50 text-red-700 border-red-200"
                                  : task.priority === "Medium"
                                    ? "bg-amber-50 text-amber-700 border-amber-200"
                                    : "bg-green-50 text-green-700 border-green-200"
                              }
                            >
                              {task.priority}
                            </Badge>
                          </div>
                          <div className="col-span-2 text-right">
                            <Button size="sm">Review</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
    </div>
  )
}

export default page