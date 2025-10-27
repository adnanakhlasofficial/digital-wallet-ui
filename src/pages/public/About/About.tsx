import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award } from "lucide-react";

export default function About() {
  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", initials: "SJ" },
    { name: "Michael Chen", role: "CTO", initials: "MC" },
    { name: "Emily Rodriguez", role: "Lead Designer", initials: "ER" },
    { name: "David Kim", role: "Head of Marketing", initials: "DK" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description:
        "We are committed to delivering exceptional value and solving real problems for our customers.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Constantly pushing boundaries and exploring new technologies to stay ahead of the curve.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Our customers are at the heart of everything we do, guiding our product decisions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Maintaining the highest standards in quality, reliability, and customer service.",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="space-y-4 text-center">
            <Badge variant="secondary" className="mb-2">
              About Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">Our Story</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Building innovative solutions that transform the way businesses
              operate and grow in the digital age.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Who We Are</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Founded in 2020, we are a team of passionate innovators
                dedicated to creating cutting-edge solutions that empower
                businesses to achieve their full potential. Our journey began
                with a simple idea: make technology accessible and impactful for
                everyone.
              </p>
              <p className="text-muted-foreground">
                Today, we serve thousands of customers worldwide, helping them
                streamline operations, boost productivity, and drive growth. Our
                commitment to excellence and customer satisfaction has made us a
                trusted partner in digital transformation.
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-primary-foreground rounded-lg p-2">
                        <value.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-12 text-center text-3xl font-bold">
              Meet Our Team
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <Avatar className="h-24 w-24">
                        <AvatarFallback className="text-2xl">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
