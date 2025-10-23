import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "motion/react";

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
    <section className="relative py-20 bg-linear-to-b from-secondary/20 via-background to-background">
      {/* Subtle glow accents */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 blur-3xl rounded-full opacity-40" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 blur-3xl rounded-full opacity-30" />

      <div className="container mx-auto px-4 relative">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Trusted by Users
          </span>
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-primary">
            Trusted by Millions Worldwide
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-border/40 rounded-2xl bg-background/60 backdrop-blur-sm text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-8">
                  {/* Avatar */}
                  <div className="mb-4 flex justify-center">
                    <Avatar className="h-14 w-14">
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
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
                  <p className="mb-6 text-sm text-muted-foreground italic leading-relaxed">
                    “{testimonial.content}”
                  </p>

                  {/* Name & Role */}
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
