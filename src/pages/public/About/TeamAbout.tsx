import SectionHeader from "@/components/shared/SectionHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  { name: "Sarah Johnson", role: "CEO", initials: "SJ" },
  { name: "Michael Chen", role: "CTO", initials: "MC" },
  { name: "Emma Williams", role: "CFO", initials: "EW" },
];

export default function TeamAbout() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Meet Our Team"
          subtitle="Passionate professionals dedicated to delivering the best
            experience."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all text-center"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground rounded-full p-4 text-lg font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
