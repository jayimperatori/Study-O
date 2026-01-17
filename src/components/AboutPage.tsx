import React, { useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dog, Heart, Award, Users, BookOpen } from "lucide-react";
const storyImage = new URL("../assets/Story.jpeg", import.meta.url).href;
const spaceImage2 = new URL("../assets/ef059911c1bd4739323d5a70da5ff1640e6224e2.png", import.meta.url).href;
const threeDogs = new URL("../assets/3Dogs.jpeg", import.meta.url).href;
const leahHeadshot = new URL("../assets/Leah.jpg", import.meta.url).href;
const julieHeadshot = new URL("../assets/Julie.jpg", import.meta.url).href;
const ednaImg = new URL("../assets/Edna.jpeg", import.meta.url).href;
const vincentImg = new URL("../assets/Vincent.jpeg", import.meta.url).href;
const longstonImg = new URL("../assets/LONGston.jpeg", import.meta.url).href;

export function AboutPage() {
  useEffect(() => {
    const id = (window.location.hash || "").replace("#", "");
    if (!id) return;
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const headerOffset = 96; // account for sticky navigation height
        const targetY = window.scrollY + rect.top - headerOffset;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }, 0);
  }, []);
  const team = [
    {
      name: "Professor Leah Miranda Hughes",
      role: "Founder & Director",
      bio: "Professor Hughes hails from Dalton, GA, and has resided in Sandy Springs for almost two decades. She opened The Study-O in the mid-2000s while teaching college English, composition, and literature with the goal of helping students get into the college of their choice with scholarship money.",
      longBio: "Professor holds a baccalaureate in English with a writing minor from Oglethorpe University, as well as degrees in American literature from Georgia State and Emory Universities. She earned her MFA from Queens University of Charlotte. Her personal experience in funding her academic endeavors prepares her to guide students in securing scholarships and other opportunities for their degree work. Her expertise in standardized testing has evolved over years of writing curriculum, including writing for the ACT and SAT. She enjoys gardening, writing poetry, and patronizing live music and art events.",
      image: leahHeadshot
    },
    {
      name: "Julie (JJ) Imperatori",
      role: "Certified OG Practitioner & Tutor",
      bio: "Julie (JJ) Imperatori is a certified associate of the Academy of Orton-Gillingham Practitioners with twelve years of tutoring experience in OG, reading and writing. She has also taught in grades 1-5 in both public and private schools. She holds Master’s degrees in English and Teaching. She works with your child at your location on your schedule in order to make tutoring as convenient as possible. She takes into account the unique personality of your child, using that information to help move forward academically. She has raised six children of her own, including one daughter who overcame dyslexia and is now attending college.",
      image: julieHeadshot
    },
    {
      name: "Colby Fernandez",
      role: "Team Member",
      bio: "Photo not yet available. Info coming soon.",
      image: ""
    },
    {
      name: "New Team Member",
      role: "Team Member",
      bio: "Photo not yet available. Info coming soon.",
      image: ""
    }
  ];

  const dachshunds = [
    {
      name: "Edna",
      role: "The Coach",
      personality: "Encouraging • Motivating • Inspiring",
      fact: "Edna is the motivational speaker of the group. She has an uncanny ability to sense when a student needs a boost of confidence. Whether you're tackling a difficult math problem or writing a college essay, she'll be right there, encouraging you every step of the way. Her presence reminds students that they can accomplish anything they set their minds to!",
      favoriteSpot: "Near the entrance, keeping watch",
      superpower: "Motivates students to push through challenges",
      quirk: "Does a little dance when students complete assignments"
    },
    {
      name: "Vincent",
      role: "The TSA (Test Security Administrator)",
      personality: "Alert • Organized • Reliable",
      fact: "Vincent takes his role very seriously. He ensures that study sessions stay on track and that the environment remains focused and productive. Like a coach keeping everyone organized, he makes sure students have what they need and helps maintain the structure necessary for successful learning. His calm, attentive presence helps students feel secure and ready to tackle any academic challenge.",
      favoriteSpot: "By the desk during study sessions",
      superpower: "Creates structure and routine in study sessions",
      quirk: "Always knows when it's time to start and end sessions"
    },
    {
      name: "LONGston",
      role: "Emotional Support",
      personality: "Comforting • Gentle • Empathetic",
      fact: "LONGston (note the capital letters in 'LONG'—he's quite proud of his name!) is the emotional heart of The Study-O. He has an extraordinary ability to sense when students are feeling stressed, anxious, or overwhelmed. Without being asked, he'll quietly approach and rest his head on a student's lap, providing instant comfort and calm. His gentle presence reduces test anxiety and helps students remember that it's okay to take breaks and be kind to themselves.",
      favoriteSpot: "On the cozy couch in the reading corner",
      superpower: "Reduces anxiety and creates a calm atmosphere",
      quirk: "Responds when students say 'I'm stressed'"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Dog className="w-10 h-10 text-plum-light" />
            <Dog className="w-12 h-12 text-plum" />
            <Dog className="w-10 h-10 text-plum-light" />
          </div>
          <h1 className="text-plum mb-6 text-6xl md:text-7xl leading-none">About The Study-O</h1>
          <p className="text-gray-700 text-lg">
            Founded on the belief that learning should feel comfortable, not stressful. We combine 
            academic excellence with a warm, supportive environment—led by Professor Leah Hughes 
            and her three dachshunds, Edna, Vincent, and LONGston!
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-plum mb-6 heading-md md:heading-md leading-none font-normal">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Professor Leah Miranda Hughes opened The Study-O in the mid-2000s while teaching college 
                English, composition, and literature. She had a clear mission: to help students get into 
                the college of their choice with scholarship money. She aimed to ease stress, encourage 
                communication, and provide guidance in assisting families during the significant process 
                of college application.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a vision to create a stress-free learning environment has grown into 
                a thriving tutoring practice. Professor Hughes has successfully mentored hundreds of 
                students through high school matriculation, college acceptance, and graduation from 
                institutions of higher learning.
              </p>
              <p className="text-gray-700 mb-4">
                The addition of Edna, Vincent, and LONGston to the team wasn't just about having cute 
                companions—these dachshunds are actively involved in the tutoring process, serving as 
                coach, TSA (Test Security Administrator), and emotional-support puppy. Their presence 
                creates a unique, comfortable atmosphere that helps students feel at home while studying.
              </p>
              <p className="text-gray-700">
                Today, The Study-O maintains a 100% college acceptance rate, with every student 
                progressing to the college of their choice with scholarship money. It's not just 
                about test scores—it's about building confidence, reducing stress, and helping 
                students realize their full potential.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl border-4 border-orange-200">
              <ImageWithFallback
                src={storyImage}
                alt="Our Story at The Study-O"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-plum mb-6 heading-md md:heading-md leading-none font-normal">Our Mission</h2>
          <p className="text-gray-700 text-lg mb-8">
            To help students go to the college of their choice with scholarship money through comprehensive 
            tutoring, standardized testing support, and college admissions guidance—all in a stress-free 
            environment that makes learning enjoyable.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-2 border-orange-200">
              <CardContent className="pt-6 text-center">
                <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h3 className="text-sm text-orange-900">Excellence</h3>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200">
              <CardContent className="pt-6 text-center">
                <Heart className="w-8 h-8 text-orange-600 fill-orange-600 mx-auto mb-2" />
                <h3 className="text-sm text-orange-900">Compassion</h3>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200">
              <CardContent className="pt-6 text-center">
                <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <h3 className="text-sm text-orange-900">Communication</h3>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200">
              <CardContent className="pt-6 text-center">
                <Dog className="w-8 h-8 text-plum mx-auto mb-2" />
                <h3 className="text-sm text-orange-900">Dog Love</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-plum mb-4 heading-md md:heading-md leading-none font-normal">Meet Our Team</h2>
            <p className="text-gray-600">Expert educators who genuinely care about your success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-colors">
                <div className="h-80 overflow-hidden bg-gray-200">
                  {member.image ? (
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={member.name.includes("Leah") ? { objectPosition: "center 30%" } : undefined}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                      <span>Photo not yet available</span>
                    </div>
                  )}
                </div>
                <CardContent className="pt-6">
                  <h3 className="mb-1 text-orange-900">{member.name}</h3>
                  <p className="text-orange-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                  {member.longBio && (
                    <p className="text-gray-600 text-sm">{member.longBio}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dachshunds Section - MAIN FOCUS */}
      <section id="dachshunds" className="py-20 px-4 bg-gradient-to-br from-orange-100 via-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-plum mb-4 heading-md md:heading-md leading-none font-normal">Meet Our Dachshund Team</h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Edna, Vincent, and LONGston are actively involved in the tutoring process, serving as 
              coach, TSA (Test Security Administrator), and emotional-support puppy. They're not just 
              pets—they're integral members of The Study-O team!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {dachshunds.map((dog, index) => (
              <Card key={index} className="border-4 border-orange-300 bg-white hover:border-orange-500 transition-all hover:shadow-2xl">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-orange-300 overflow-hidden bg-gray-200">
                      <ImageWithFallback
                        src={dog.name === "Edna" ? vincentImg : dog.name === "Vincent" ? ednaImg : longstonImg}
                        alt={dog.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-orange-900 mb-1 text-xl">{dog.name}</h3>
                    <p className="text-orange-700 mb-3">{dog.role}</p>
                    <div className="flex justify-center gap-2 mb-4 flex-wrap">
                      {dog.personality.split(' • ').map((trait, i) => (
                        <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700">{dog.fact}</p>
                    
                    <div className="bg-yellow-50 p-3 rounded-lg space-y-1">
                      <p className="text-gray-700"><span className="text-orange-900">Favorite Spot:</span> {dog.favoriteSpot}</p>
                      <p className="text-gray-700"><span className="text-orange-900">Superpower:</span> {dog.superpower}</p>
                      <p className="text-gray-700"><span className="text-orange-900">Fun Quirk:</span> {dog.quirk}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Space Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl border-4 border-orange-200">
              <ImageWithFallback
                src={threeDogs}
                alt="The Study-O learning space"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-plum mb-6 heading-md md:heading-md leading-none font-normal">Our Cozy Learning Space</h2>
              <p className="text-gray-700 mb-4">
                The Study-O is located in Atlanta, Georgia, in a comfortable, home-like setting. 
                The space feels nothing like a traditional tutoring center—it's warm, inviting, 
                and designed to help students feel relaxed and ready to learn.
              </p>
              <p className="text-gray-700 mb-4">
                <span className="text-orange-900">Quiet Study Areas:</span> Perfect for focused individual work and test prep
              </p>
              <p className="text-gray-700 mb-4">
                <span className="text-orange-900">Collaborative Spaces:</span> Great for group sessions and project work
              </p>
              <p className="text-gray-700">
                <span className="text-orange-900">Dog-Friendly Environment:</span> Where Edna, Vincent, and LONGston are always around to provide support and companionship
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
