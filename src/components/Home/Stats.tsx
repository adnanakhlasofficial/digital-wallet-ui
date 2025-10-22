import CountUp from "react-countup";
import { Card, CardContent } from "../ui/card";

const stats = [
  { value: 500, label: "Active Users", suffix: "M+" },
  { value: 5000, label: "Transactions Processed", suffix: "B+" },
  { value: 150, label: "Countries Supported", suffix: "+" },
  { value: 99.9, label: "Uptime Guarantee", suffix: "%" },
];

export default function Stats() {
  return (
    <section className="bg-secondary py-10 border-y-2 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-2 text-4xl font-bold md:text-5xl text-primary ">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                  {stat.suffix}
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
