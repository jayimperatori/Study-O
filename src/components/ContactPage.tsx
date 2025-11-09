import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Calendar, Dog, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentGrade: "",
    service: "",
    dogPreference: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! 🐾 We'll get back to you within 24 hours to schedule your free consultation. Edna, Vincent, and LONGston are excited to meet you!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      studentGrade: "",
      service: "",
      dogPreference: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(404) 731-4524",
      subdetails: "Call or text anytime!"
    },
    {
      icon: Mail,
      title: "Email",
      details: "leahhughes@aol.com",
      subdetails: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Atlanta, Georgia",
      subdetails: "Sandy Springs area"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Sun, Mon, Tue, Wed",
      subdetails: "Noon - 9:00 PM"
    }
  ];

  const faqs = [
    {
      question: "What are your rates and do you offer payment plans?",
      answer: "Our Fall 2024 pricing is $140/hour for all services (Academic Support, Standardized Testing, and College Admissions). We offer flexible payment plans and package discounts for students committing to multiple weekly sessions. Contact us to discuss options that work for your budget."
    },
    {
      question: "What are your hours and how do I schedule?",
      answer: "We're open Sundays, Mondays, Tuesdays, and Wednesdays from noon to 9:00 PM. Weekly sessions allow students to move smoothly through the academic year, and we practice great flexibility in meeting each student's specific needs. Contact us to find a time that works for your schedule!"
    },
    {
      question: "Tell me more about the dachshunds!",
      answer: "Edna, Vincent, and LONGston are actively involved in the tutoring process! Edna serves as the coach, Vincent acts as the TSA (Test Security Administrator), and LONGston provides emotional support. They help create a comfortable, stress-free learning environment that students love."
    },
    {
      question: "What's your approach to standardized testing?",
      answer: "We help students see that they're smart kids taking a standardized test—not the other way around! Our approach focuses on building confidence, reducing anxiety, and learning targeted strategies. Average scores for our first-time test takers: 27 on ACT and above 1350 on SAT (well above national averages). We also assist with registration, accommodations, and technical issues."
    },
    {
      question: "Do you help with college scholarship applications?",
      answer: "Absolutely! Our goal is for students to go to the college of their choice WITH scholarship money. We help identify scholarship opportunities, navigate financial aid (FAFSA, CSS Profile), and craft compelling scholarship application essays. This is a core part of our college admissions support."
    },
    {
      question: "How quickly can we get started?",
      answer: "Usually within a few days! After your free consultation, we'll create a customized plan and find a weekly time slot that works. During busy seasons (fall college app season, spring test prep), there may be a short wait, but we'll communicate timing clearly."
    },
    {
      question: "What makes The Study-O different from other tutoring centers?",
      answer: "Three main things: (1) Our cozy, home-like environment in Atlanta led by Professor Leah Hughes, (2) Our three dachshunds—Edna, Vincent, and LONGston—who create a comfortable, stress-free atmosphere, and (3) Our proven results: 100% college acceptance rate with every student progressing to their choice school with scholarship money. We don't just teach to the test, we develop long-term success!"
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
          <h1 className="text-orange-900 mb-6 heading-xl md:heading-xl leading-none">Get In Touch</h1>
          <p className="text-gray-700 text-lg">
            Ready to join our pack? We'd love to hear from you! Reach out to schedule your free consultation. 
            Edna, Vincent, and LONGston are excited to meet you! 🐾
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-orange-900 mb-6">Send Us a Message 📝</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Parent/Student Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(205) 555-1234"
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <Label htmlFor="studentGrade">Student Grade Level *</Label>
                  <Select
                    value={formData.studentGrade}
                    onValueChange={(value) => setFormData({ ...formData, studentGrade: value })}
                  >
                    <SelectTrigger className="border-orange-200">
                      <SelectValue placeholder="Select grade level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6-8">Middle School (6-8)</SelectItem>
                      <SelectItem value="9">9th Grade (Freshman)</SelectItem>
                      <SelectItem value="10">10th Grade (Sophomore)</SelectItem>
                      <SelectItem value="11">11th Grade (Junior)</SelectItem>
                      <SelectItem value="12">12th Grade (Senior)</SelectItem>
                      <SelectItem value="college">College</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="border-orange-200">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academic">Academic Support (GPA improvement)</SelectItem>
                      <SelectItem value="sat">SAT Prep</SelectItem>
                      <SelectItem value="act">ACT Prep</SelectItem>
                      <SelectItem value="ssat">SSAT Prep</SelectItem>
                      <SelectItem value="college">College Admissions Consulting</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                      <SelectItem value="other">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="dogPreference">How do you feel about dogs? 🐕</Label>
                  <Select
                    value={formData.dogPreference}
                    onValueChange={(value) => setFormData({ ...formData, dogPreference: value })}
                  >
                    <SelectTrigger className="border-orange-200">
                      <SelectValue placeholder="Select your preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="love-dogs">Love dogs! Can't wait to meet Edna, Vincent & LONGston!</SelectItem>
                      <SelectItem value="neutral">Neutral - dogs are fine</SelectItem>
                      <SelectItem value="not-comfortable">Not very comfortable around dogs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your goals, challenges, current test scores, or any specific questions. The more detail, the better we can help!"
                    rows={5}
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  Send Message 📤
                </Button>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div>
              <h2 className="text-orange-900 mb-6">Contact Information 📞</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-orange-900">{info.title}</h3>
                          <p className="text-gray-700">{info.details}</p>
                          <p className="text-gray-500 text-sm">{info.subdetails}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 bg-gradient-to-br from-orange-100 to-yellow-100 border-4 border-orange-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="w-8 h-8 text-orange-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="mb-2 text-orange-900">Schedule Your Free Consultation 🎉</h3>
                      <p className="text-gray-700 text-sm mb-3">
                        Not sure where to start? Book a free 30-minute consultation to discuss your academic goals. 
                        No pressure, just a friendly conversation about how we can help!
                      </p>
                      <p className="text-orange-700 text-sm mb-4">
                        <span className="">Pricing:</span> Package options available (see Services page)
                      </p>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-yellow-50 border-2 border-yellow-300">
                <CardContent className="pt-6 text-center">
                  <Heart className="w-8 h-8 text-orange-600 fill-orange-600 mx-auto mb-2" />
                  <p className="text-gray-700 text-sm">
                    <span className="text-orange-900">🐾 Dog-Friendly Learning!</span><br />
                    Edna, Vincent & LONGston are actively involved in the tutoring process, creating a comfortable and stress-free environment!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-orange-100 border-4 border-orange-300 rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center px-4">
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <p className="text-orange-900 mb-2">Atlanta, Georgia</p>
              <p className="text-gray-600 text-sm mb-2">Sandy Springs area • Convenient location</p>
              <p className="text-gray-500 text-sm">Contact us to learn more about our location</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-orange-900 text-center mb-4">Frequently Asked Questions ❓</h2>
          <p className="text-gray-600 text-center mb-12">Everything you need to know about The Study-O</p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-orange-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <Button 
              variant="outline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="border-orange-500 text-orange-700 hover:bg-orange-50"
            >
              Send Us a Message
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dog className="w-10 h-10" />
            <Dog className="w-12 h-12" />
            <Dog className="w-10 h-10" />
          </div>
          <h2 className="text-white mb-4">We Can't Wait to Meet You! 🎓</h2>
          <p className="text-orange-100 mb-6 text-lg">
            Join our pack of successful students. Edna, Vincent, and LONGston are ready to help you achieve your academic goals!
          </p>
          <p className="text-white text-xl mb-2">📞 (404) 731-4524</p>
          <p className="text-orange-100 text-sm">Sun-Wed • Noon-9pm</p>
        </div>
      </section>
    </div>
  );
}
