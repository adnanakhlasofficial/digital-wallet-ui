import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content:
      "This app has transformed how I manage my business finances. The instant transfers and budgeting tools are game-changers.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Freelance Designer",
    content:
      "Finally, a banking app that understands what modern users need. Clean interface, powerful features, and zero hidden fees.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emma Williams",
    role: "Marketing Manager",
    content:
      "The security features give me peace of mind, and the virtual cards make online shopping so much safer. Highly recommend!",
    rating: 5,
    initials: "EW",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Millions Worldwide
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 transition-all hover:border-primary"
            >
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="mb-4 flex justify-center">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground rounded-full p-4 text-lg font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Rating */}
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 text-sm text-muted-foreground">
                  "{testimonial.content}"
                </p>

                {/* Name & Role */}
                <div className="text-center">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
