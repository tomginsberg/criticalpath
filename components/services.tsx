import { ArrowRight, Building2, ClipboardList, HardHat } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-200">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">
            Critical Path Projects provides a wide variety of project management, design and construction related
            services. Whether you engage us as full service project managers or simply choose one or more of the
            services listed below, you can be confident that Critical Path Projects will always look after your
            interests first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="pb-2">
              
              <CardTitle>Full Service Project<br/> Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/services/s1.jpg"
                alt="Placeholder image"
                width={400}
                height={400}
                className="object-cover rounded-sm mb-4"
              />
              <CardDescription className="text-gray-700 text-base">
                Includes full management of your project from inception to final close out and move - we'll work with
                you and be by your side every step of the way. It includes all of the services listed plus any other
                services your specific project requires.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
   
              <CardTitle>Scope, Budget, and Schedule Development</CardTitle>
            </CardHeader>
            <CardContent>
            <Image
                src="/services/s2.jpg"
                alt="Placeholder image"
                width={400}
                height={400}
                className="object-cover rounded-sm mb-4"
              />
              <CardDescription className="text-gray-700 text-base">
                Getting started on your project is tough. Knowing who can help you develop the scope, initial budgets
                and schedule is critical for you to make a decision to go forward with a project. We can help you in the
                initial stages by clarifying these steps and providing information.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">

              <CardTitle>Bidding, Execution and Control of Construction</CardTitle>
            </CardHeader>
            <CardContent>
            <Image
                src="/services/s3.jpg"
                alt="Placeholder image"
                width={400}
                height={400}
                className="object-cover rounded-sm mb-4 "
              />
              <CardDescription className="text-gray-700 text-base">
                Carefully managing the actual construction is critical to your project's success. Critical Path Projects
                closely oversees all aspects of tender and construction execution to ensure your project runs on budget
                and on schedule. We also work hard to solve the problems that inevitably come up on a construction project.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services">
          <Button variant="outline" className="group flex items-center gap-2">
            See More Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
