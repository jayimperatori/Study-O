import React from "react";
import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  Award,
  Dog,
  Heart,
  Calendar,
  Clock,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
const leahHero = new URL("../assets/LeahWithDogs.jpeg", import.meta.url).href;
const ednaImg = new URL("../assets/Edna.jpeg", import.meta.url).href;
const vincentImg = new URL("../assets/Vincent.jpeg", import.meta.url).href;
const longstonImg = new URL("../assets/LONGston.jpeg", import.meta.url).href;
const leahOffice = new URL("../assets/LeahOffice.jpeg", import.meta.url).href;
const space2 = new URL("../assets/Space2.jpeg", import.meta.url).href;
const space3 = new URL("../assets/Space3.jpeg", import.meta.url).href;
const space4 = new URL("../assets/Space4.jpeg", import.meta.url).href;

// Prevent a single orphaned last word by binding the final two words together
function preventWidow(text: string): string {
  return typeof text === "string" ? text.replace(/\s+([^\s]+)$/, "\u00A0$1") : text;
}

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Support",
      description:
        "GPA improvement and grade tracking with comprehensive study skills development",
    },
    {
      icon: TrendingUp,
      title: "Standardized Testing",
      description:
        "ACT, SAT, and SSAT prep with proven strategies to reduce anxiety and boost confidence",
    },
    {
      icon: GraduationCap,
      title: "College Admissions",
      description:
        "100% college acceptance rate with students progressing to their choice school with scholarship money",
    },
    {
      icon: Dog,
      title: "Dog-Friendly Learning",
      description:
        "Study with Edna, Vincent & LONGston—our lovable dachshunds who make learning relaxed and fun!",
    },
  ];

  const testimonials = [
    "You are a life-saver!",
    "You are such a big part of her life and what an amazing mentor you are — there are no words to adequately thank you. We are so grateful!",
    "In all his years of having various tutors, he’s never come home or finished with one as happy and as excited as from his session with you… and if that wasn’t enough, he loved your cookies 😭. Thanks again!",
    "There is truly nobody better he enjoyed working with than you, so THANK YOU!",
    "Just had to tell you — J just shared his essay and autobiography — thank you for helping him put into words exactly what makes him special. 🥲",
    "You have made tutoring something I look forward to. I can’t tell you how much I’ve learned from you academically and personally. I have learned to trust and believe in myself. I cannot thank you enough for teaching me that.",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dog className="w-8 h-8 text-orange-600" />
                <Dog className="w-8 h-8 text-orange-500" />
                <Dog className="w-8 h-8 text-orange-600" />
              </div>
              <h1 className="text-orange-900 mb-6 text-5xl md:text-6xl leading-none">
                Welcome to The Study-O
              </h1>
              <p className="text-gray-700 mb-4 text-lg">
                The Study-O excels in supporting students. Our goal is for students to go to the college of
                their choice with scholarship money. We realize that goal by providing comprehensive academic
                support, tutoring in standardized testing, and assistance in navigating the college
                admissions/acceptance process. Weekly sessions allow students to move more smoothly through
                the academic year, while we practice great flexibility in meeting each student's specific
                needs.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                Led by Professor Leah Hughes—and her three dachshunds,
                <span className="text-orange-600"> Edna, Vincent, and LONGston</span>—our cozy, home-like
                setting makes learning relaxed, focused, and fun.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate("contact")}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("services")}
                  className="border-orange-500 text-orange-700 hover:bg-orange-50"
                >
                  Our Services
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl border-4 border-orange-200">
              <ImageWithFallback
                src={leahHero}
                alt="Leah with Edna, Vincent, and LONGston"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 60%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Pricing Banner */}
      <section className="py-8 px-4 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              <div>
                <p className="text-sm text-orange-100">
                  Open Days
                </p>
                <p>Sun, Mon, Tue, Wed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <div>
                <p className="text-sm text-orange-100">Hours</p>
                <p>Noon - 9:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6" />
              <div>
                <p className="text-sm text-orange-100">
                  Package Pricing
                </p>
                <p>See Services for plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-orange-900 mb-4 heading-md md:heading-md leading-none font-normal">
              What Makes Us Special
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-orange-100 hover:border-orange-400 transition-colors hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="mb-2 text-orange-900 text-lg md:text-xl font-medium">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Dogs Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-orange-600 fill-orange-600" />
              <h2 className="text-orange-900 heading-md md:heading-md leading-none font-normal">
                Meet Our Dachshunds
              </h2>
              <Heart className="w-6 h-6 text-orange-600 fill-orange-600" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Edna",
                role: "The TSA",
                personality:
                  "Alert, attentive, ensures everything runs smoothly",
                specialty: "Provides structure and routine to study time",
              },
              {
                name: "Vincent",
                role: "The Coach",
                personality:
                  "Encouraging, motivating, always ready to cheer you on",
                specialty: "Keeps students motivated during long study sessions",
              },
              {
                name: "LONGston",
                role: "Emotional Support",
                personality: "Comforting, gentle, always there when you need a friend",
                specialty:
                  "Reduces anxiety and creates a calm atmosphere",
              },
            ].map((dog, index) => (
              <Card
                key={index}
                className="border-4 border-orange-200 bg-white hover:border-orange-400 transition-colors"
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-orange-300 bg-gray-200">
                    <ImageWithFallback
                      src={dog.name === "Edna" ? vincentImg : dog.name === "Vincent" ? ednaImg : longstonImg}
                      alt={dog.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-orange-900 mb-1">
                    {dog.name}
                  </h3>
                  <p className="text-orange-700 text-lg md:text-xl font-medium mb-3">
                    {dog.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {preventWidow(dog.personality)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Space Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-900 mb-6 heading-lg md:heading-lg leading-none font-normal">
                A Cozy, Home-Like Learning Space
              </h2>
              <p className="text-gray-700 mb-4">
                Forget sterile classrooms! The Study-O is
                designed to feel like studying in a comfortable
                home. With cozy furniture, natural light, warm
                colors, and of course, three friendly
                dachshunds, students actually look forward to
                coming here.
              </p>
              <p className="text-gray-700 mb-4">
                We have multiple spaces: quiet individual study
                rooms, collaborative areas for group work, and
                dedicated test prep spaces. Each room is
                thoughtfully designed to minimize distractions
                and maximize learning.
              </p>
              <p className="text-gray-700 mb-4">
                Our weekly sessions allow students to move
                smoothly through the academic year with
                flexibility to meet each student's specific
                needs. Students receive support between sessions at no extra charge!
              </p>
              <Button
                onClick={() => onNavigate("about")}
                className="bg-orange-500 hover:bg-orange-600"
              >
                Learn More About Professor Hughes
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-orange-200">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent className="h-96" style={{ marginLeft: 0 }}>
                  {[leahOffice, space2, space3, space4].map((src, i) => (
                    <CarouselItem
                      key={i}
                      className="h-96"
                      style={{ paddingLeft: 0, flex: "0 0 100%", minWidth: "100%" }}
                    >
                      <ImageWithFallback
                        src={src}
                        alt={`Study-O space ${i + 1}`}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center" }}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="z-10 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-orange-700 border border-white/70 shadow"
                  style={{ left: "0.5rem" }}
                />
                <CarouselNext
                  className="z-10 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-orange-700 border border-white/70 shadow"
                  style={{ right: "0.5rem" }}
                />
              </Carousel>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/40 text-white text-xs md:text-sm px-3 py-1 rounded-full pointer-events-none">
                Swipe to see more →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-2 heading-md md:heading-md leading-none font-normal">
              Proven Results
            </h2>
            <p className="text-orange-100 text-xl">
              Real numbers from real students
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">27</div>
              <p className="text-orange-100">
                Avg. First-Time ACT Score
              </p>
            </div>
            <div>
              <div className="text-5xl mb-2">1350+</div>
              <p className="text-orange-100">
                First-Time SAT Scores
              </p>
            </div>
            <div>
              <div className="text-5xl mb-2">100%</div>
              <p className="text-orange-100">
                College Acceptance Rate
              </p>
            </div>
            <div>
              <div className="text-5xl mb-2">68</div>
              <p className="text-orange-100">
                Students Helped Spring 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-orange-900 mb-4 heading-md md:heading-md leading-none font-normal">
              What Families Are Saying
            </h2>
            <p className="text-gray-600 text-xl">
              Real testimonials from students and parents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((quote, index) => (
              <Card
                key={index}
                className="border-2 border-orange-100 hover:border-orange-300 transition-colors"
              >
                <CardContent className="pt-6">
                  <p className="text-gray-700 text-sm italic">“{quote}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Removed comprehensive support section per request */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dog className="w-10 h-10" />
            <Dog className="w-12 h-12" />
            <Dog className="w-10 h-10" />
          </div>
          <h2 className="text-white mb-4 heading-md md:heading-md leading-none font-normal">
            Ready to Study with the Pack?
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Join hundreds of students who have achieved their
            academic goals with The Study-O. Edna, Vincent, and LONGston can't wait to meet you!
          </p>
          <Button
            size="lg"
            onClick={() => {
              onNavigate("about");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white text-orange-600 hover:bg-orange-50"
          >
            Schedule Your First Session
          </Button>
          <p className="text-orange-100 text-sm mt-4">Open Sun-Wed • Noon-9pm • Atlanta, Georgia</p>
        </div>
      </section>
    </div>
  );
}
