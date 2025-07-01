import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { User, Target, Brain } from "lucide-react";
import Banner from "@/components/common/Banner";

export default function Home() {
  const aboutus = [
    {
      title: "Our Philosophy",
      description:
        "We believe that health is not just in a single state but a complete complex system including physical, mental, and social well-being. We strive to promote this holistic approach to healthy living by offering services that addresses all integration within the community.",
      icon: <Brain className="text-green-500 w-8 h-8" />,
    },
    {
      title: "Our Expertise",
      description:
        "Our team of healthcare professionals has extensive knowledge and experience in the field of health care and wellness for persons with (IDD) are dedicated with up-to-date research and developments in the industry to provide our persons with the best possible care to help persons engage in the community.",
      icon: <User className="text-blue-500 w-8 h-8" />,
    },
    {
      title: "Our Goals",
      description:
        "We will fully support your integration to the community in relationships, career exploration and employment, retirement, community contribution, having self-determination, navigation with-in the community, and wellness / fitness by using your Individual Support Plan (ISP).",
      icon: <Target className="text-yellow-500 w-8 h-8" />,
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
          {aboutus.map((item) => (
            <Card
              key={item.title}
              className="hover:scale-105 hover:shadow-xl transition-transform duration-300 border-2 border-blue-100 bg-white/90 backdrop-blur-sm"
            >
              <CardHeader className="flex flex-col items-center gap-2">
                <div>{item.icon}</div>
                <CardTitle className="text-center text-xl text-[#99c25c] font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-justify text-base text-gray-700 leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Banner />
    </>
  );
}
