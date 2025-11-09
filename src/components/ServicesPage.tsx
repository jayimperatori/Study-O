import React, { useEffect } from "react";
import { Check, BookOpen, GraduationCap, TrendingUp, Dog, Calendar, DollarSign, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const spaceImage2 = new URL("../assets/ef059911c1bd4739323d5a70da5ff1640e6224e2.png", import.meta.url).href;

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  useEffect(() => {
    const id = (window.location.hash || "").replace("#", "");
    if (!id) return;
    // Scroll after paint to ensure elements exist
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
  }, []);
  const services = [
    {
      icon: BookOpen,
      title: "Academic Support",
      tagline: "Maintain & Improve Your GPA",
      description: "Weekly sessions to help students excel in all subjects with comprehensive study skills",
      features: [
        "Assignment completion support and homework help",
        "Study skills development and time management strategies",
        "Assessment and test preparation for all subjects",
        "Composition and writing skill development",
        "Weekly grade and assignment tracking",
        "Contextual understanding and practical application for mastery",
        "Preparing students for academic success in higher grades and college courses"
      ],
      details: "The Study-O works to assist students in maintaining an excellent GPA or improving their grades overall for the academic term. Academic support sessions usually meet weekly to retain not just a solid and respectable GPA but also an understanding of how to prepare for and demonstrate mastery in a variety of assessment situations across the curriculum."
    },
    {
      icon: TrendingUp,
      title: "Standardized Testing",
      tagline: "ACT, SAT, SSAT Prep",
      description: "Simplify and destress test prep with proven strategies and personalized support",
      features: [
        "Assessment of past test-taking patterns and habits",
        "Additional and targeted testing strategies for each section",
        "Examination of persistently missed questions with guided practice",
        "Manageable and targeted practice schedules",
        "Stress and time management techniques",
        "Confidence building through proven methods",
        "Registration assistance and interaction with testing agencies",
        "Support for TTRs, accommodations, and technical glitches"
      ],
      details: "The Study-O aims to simplify and destress the methodical process of banking as many correct answers on a test like the ACT or SAT or SSAT as possible. Students work with a perspective that stresses that they are smart kids taking a stupid, standardized test. The goal includes higher scores, improved times, lower anxiety, and higher confidence. Average scores hover around 28 for first-time ACT test takers and around 1350 for first-time SAT test takers. Placement has always been achieved in the case of our SSAT students."
    },
    {
      icon: GraduationCap,
      title: "College Admissions",
      tagline: "Get Into Your Dream School",
      description: "Complete guidance through the entire college application and acceptance process",
      features: [
        "Making comprehensive college lists based on student interests and qualifications",
        "Communicating with potential colleges and coordinating visits",
        "Taking virtual and in-person campus tours",
        "Writing college applications and essays (Common App, Coalition, etc.)",
        "Coordinating transcripts, fees, and recommendations",
        "Managing deadlines and tracking application documents",
        "Scholarship and academic funding assistance",
        "Financial aid navigation (FAFSA, CSS Profile)"
      ],
      details: "A crucial step in academics before high school graduation, the college admissions process often intimidates, confuses, and stresses families. As families work with The Study-O, they find assistance in the application process – from making a college list to communicating with potential colleges, taking virtual and in-person tours, writing applications and essays, coordinating transcripts, fees, and recommendations to managing deadlines and documents. The Study-O not only helps keep track of the hectic nature of college applications but also seeks opportunities for scholarship and academic funding as I aim for students to go to the college of their choice with scholarship money."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Dog className="w-10 h-10 text-orange-600" />
            <Dog className="w-12 h-12 text-orange-500" />
            <Dog className="w-10 h-10 text-orange-600" />
          </div>
          <h1 className="text-orange-900 mb-6 text-5xl md:text-6xl leading-none">Our Services & Schedules</h1>
          <p className="text-gray-700 text-lg mb-8">
            The Study-O excels in supporting students to go to the college of their choice with scholarship money. 
            We realize that goal by offering comprehensive tutoring in standardized testing and assistance in 
            navigating the college admissions/acceptance process.
          </p>
          
          {/* Key Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="border-2 border-orange-200 bg-white">
              <CardContent className="pt-4 text-center">
                <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Open Days</p>
                <p className="text-orange-900">Sun, Mon, Tue, Wed</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200 bg-white">
              <CardContent className="pt-4 text-center">
                <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Hours</p>
                <p className="text-orange-900">Noon - 9:00 PM</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200 bg-white">
              <CardContent className="pt-4 text-center">
                <DollarSign className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Package Pricing</p>
                <p className="text-orange-900">See plans below</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-orange-900 mb-4">Packages & Pricing</h2>
            <p className="text-gray-600">Choose the plan that fits your goals and timeline.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-4 border-orange-200 bg-white">
              <CardHeader>
                <CardTitle className="text-orange-900">Academic Package</CardTitle>
                <p className="text-gray-700">$960/month</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 4 one-on-one sessions (60 minutes each)</li>
                  <li>• In-person or virtual options</li>
                  <li>• Custom academic study plans</li>
                  <li>• Executive function coaching</li>
                  <li>• Monthly progress tracking & parent updates</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">Best for GPA support and academic success throughout the term.</p>
              </CardContent>
            </Card>
            <Card className="border-4 border-orange-200 bg-white">
              <CardHeader>
                <CardTitle className="text-orange-900">College Admissions Package</CardTitle>
                <p className="text-gray-700">$960/month</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 4 one-on-one sessions (60 minutes each)</li>
                  <li>• College list curation</li>
                  <li>• Essay development and revisions</li>
                  <li>• Application planning and deadline tracking</li>
                  <li>• Monthly updates and application pacing</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">Best from August through final college deadlines.</p>
              </CardContent>
            </Card>
            <Card className="border-4 border-orange-200 bg-white">
              <CardHeader>
                <CardTitle className="text-orange-900">Testing Package</CardTitle>
                <p className="text-gray-700">$1,920/month</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 8 one-on-one sessions (60 minutes each)</li>
                  <li>• ACT/SAT/AP/SSAT prep with diagnostics</li>
                  <li>• Timed practice tests & performance feedback</li>
                  <li>• Priority scheduling</li>
                  <li>• Weekly communication and accountability</li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">Ideal for 6–8 weeks leading up to a major test.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flexibility Note */}
      <section className="py-8 px-4 bg-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700">
            <span className="text-orange-900">📅 Flexible Scheduling:</span> Weekly sessions allow students to move 
            more smoothly through the academic year, yet The Study-O practices great flexibility in meeting a 
            student's specific needs.
          </p>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {services.map((service, index) => {
              const id =
                service.title === "Academic Support"
                  ? "academic"
                  : service.title === "Standardized Testing"
                  ? "testing"
                  : service.title === "College Admissions"
                  ? "admissions"
                  : undefined;
              return (
              <Card id={id} key={index} className="border-4 border-orange-200 hover:border-orange-400 transition-colors overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-orange-200 rounded-lg flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-orange-700" />
                      </div>
                      <div>
                        <CardTitle className="text-orange-900 text-2xl">{service.title}</CardTitle>
                        <p className="text-orange-600">{service.tagline}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                    <p className="text-gray-700 text-sm italic">{service.details}</p>
                  </div>
                  
                  <h4 className="text-orange-900 mb-4">What's Included:</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* Test Score Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-2">Our Students' Average Test Scores</h2>
            <p className="text-orange-100">Well above national averages</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="bg-white/10 border-2 border-white/20 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-6xl mb-2 text-white">27</div>
                <p className="text-orange-100 mb-2">First-Time ACT Average</p>
                <p className="text-orange-200 text-sm">(National avg: 19.5)</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-2 border-white/20 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-6xl mb-2 text-white">1350+</div>
                <p className="text-orange-100 mb-2">First-Time SAT Scores</p>
                <p className="text-orange-200 text-sm">All above 1350 (National avg: 1050)</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-2 border-white/20 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-6xl mb-2 text-white">100%</div>
                <p className="text-orange-100 mb-2">SSAT Placement Rate</p>
                <p className="text-orange-200 text-sm">All students placed successfully</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dog Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl border-4 border-orange-200">
              <ImageWithFallback
                src={spaceImage2}
                alt="The Study-O learning environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dog className="w-8 h-8 text-orange-600" />
                <h2 className="text-orange-900">The Dog Difference 🐾</h2>
              </div>
              <p className="text-gray-700 mb-6">
                What makes The Study-O truly special? Our three dachshunds—Edna, Vincent, and LONGston—
                who are actively involved in the tutoring process and help create a comfortable learning environment.
              </p>
              <ul className="space-y-4">
                {[
                  "Reduces test anxiety and study stress naturally",
                  "Creates a comfortable, home-like atmosphere that students actually enjoy",
                  "Provides emotional support during challenging academic periods",
                  "Encourages regular breaks and healthy study habits",
                  "Helps students feel relaxed and focused",
                  "Makes learning fun—students look forward to sessions!",
                  "100% college acceptance rate with students progressing to their choice school with scholarship money"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-orange-900 mb-4">What to Expect 🎯</h2>
            <p className="text-gray-600">Your journey at The Study-O</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Free 30-minute meeting to discuss goals, challenges, and determine the best service fit"
              },
              {
                step: "02",
                title: "Assessment & Planning",
                description: "Diagnostic testing, grade review, or application audit to create your customized plan"
              },
              {
                step: "03",
                title: "Weekly Sessions",
                description: "Regular meetings in our cozy space (with dogs!) to work toward your goals"
              },
              {
                step: "04",
                title: "Progress & Success",
                description: "Ongoing tracking, adjustments, and celebration of your achievements!"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  {item.step}
                </div>
                <h3 className="text-orange-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dog className="w-10 h-10" />
            <Dog className="w-12 h-12" />
            <Dog className="w-10 h-10" />
          </div>
          <h2 className="text-white mb-4">Ready to Get Started? 🚀</h2>
          <p className="text-orange-100 mb-8 text-lg">
            Join our pack of successful students! Schedule your free consultation today.
          </p>
          <Button 
            size="lg"
            onClick={() => onNavigate('contact')}
            className="bg-white text-orange-600 hover:bg-orange-50"
          >
            Schedule Free Consultation
          </Button>
          <div className="mt-6 space-y-2">
            <p className="text-orange-100">Package pricing available • Sun-Wed, Noon-9pm</p>
            <p className="text-orange-200 text-sm">Edna, Vincent & LONGston can't wait to meet you! 🐾</p>
          </div>
        </div>
      </section>
    </div>
  );
}
