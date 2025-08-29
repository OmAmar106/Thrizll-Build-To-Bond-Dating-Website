import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Eye, Smartphone, ArrowRight, Users, Shield, Zap, Brain } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SoulSync() {
  const [activeFeature, setActiveFeature] = useState("home");

  const features = [
    { 
      key: "whisper", 
      icon: <MessageCircle className="w-6 h-6" />, 
      title: "Whisper Walls",
      shortTitle: "Whisper"
    },
    { 
      key: "loveos", 
      icon: <Brain className="w-6 h-6" />, 
      title: "LoveOS",
      shortTitle: "LoveOS"
    },
    { 
      key: "mystery", 
      icon: <Shield className="w-6 h-6" />, 
      title: "Mystery Mode",
      shortTitle: "Mystery"
    },
    { 
      key: "bodylang", 
      icon: <Zap className="w-6 h-6" />, 
      title: "Body Language",
      shortTitle: "Analytics"
    },
  ];

  const stats = [
    { number: "2.3M+", label: "Active Users" },
    { number: "89%", label: "Match Success" },
    { number: "4.8/5", label: "User Rating" },
    { number: "150+", label: "Countries" },
  ];

  const Navigation = () => (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">SoulSync</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-1 bg-muted rounded-full p-1">
            <Button
              variant={activeFeature === "home" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveFeature("home")}
              className="rounded-full"
            >
              Overview
            </Button>
            {features.map((feature) => (
              <Button
                key={feature.key}
                variant={activeFeature === feature.key ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFeature(feature.key)}
                className="rounded-full"
              >
                {feature.shortTitle}
              </Button>
            ))}
          </div>

          <Button className="bg-gradient-primary text-white border-0 hover:opacity-90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Decoding Digital
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Connections</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            The world's most sophisticated dating platform that analyzes digital behavior, 
            psychology, and authentic connections to help you find meaningful relationships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-primary text-white border-0 hover:opacity-90 px-8 py-4 text-lg">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-violet mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

  const FeatureGrid = () => {
    const featureDetails = [
      {
        key: "whisper",
        icon: <MessageCircle className="w-12 h-12 text-violet" />,
        title: "Whisper Walls",
        subtitle: "Location-Based Anonymous Messages",
        description: "Drop heartfelt notes tied to real-world locations. Create meaningful connections through shared spaces and experiences.",
        gradient: "bg-gradient-to-br from-violet-light to-background",
        benefits: ["Anonymous messaging", "Location-based discovery", "Emotional authenticity"]
      },
      {
        key: "loveos",
        icon: <Brain className="w-12 h-12 text-emerald" />,
        title: "LoveOS Compatibility Engine",
        subtitle: "AI-Powered Psychology Matching",
        description: "Advanced algorithms analyze personality traits, values, and behavioral patterns for deeper compatibility beyond surface preferences.",
        gradient: "bg-gradient-to-br from-emerald-light to-background",
        benefits: ["Psychological profiling", "Deep compatibility", "Behavioral analysis"]
      },
      {
        key: "mystery",
        icon: <Shield className="w-12 h-12 text-slate-deep" />,
        title: "Mystery Mode",
        subtitle: "Personality-First Connections",
        description: "Connect through conversations and values before revealing profiles. Remove visual bias and focus on genuine compatibility.",
        gradient: "bg-gradient-to-br from-slate-light to-background",
        benefits: ["Bias-free matching", "Personality focus", "Gradual revelation"]
      },
      {
        key: "bodylang",
        icon: <Zap className="w-12 h-12 text-navy" />,
        title: "Digital Body Language",
        subtitle: "Micro-Interaction Analysis",
        description: "Decode emotions from typing patterns, response times, and conversation dynamics to understand genuine interest levels.",
        gradient: "bg-gradient-to-br from-navy-light to-background",
        benefits: ["Emotion detection", "Interest analysis", "Communication insights"]
      }
    ];

    return (
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets human psychology to create the future of digital dating.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featureDetails.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setActiveFeature(feature.key)}
              >
                <Card className={`${feature.gradient} border-0 shadow-elegant hover:shadow-glow transition-all duration-500 h-full overflow-hidden`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 bg-background/60 rounded-xl shadow-card"
                      >
                        {feature.icon}
                      </motion.div>
                      <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-violet group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {feature.title}
                    </CardTitle>
                    <p className="text-violet font-semibold text-sm">{feature.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 bg-violet rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const DetailView = () => {
    const getDetailContent = () => {
      switch (activeFeature) {
        case "whisper":
          return (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <MessageCircle className="w-16 h-16 text-violet mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Whisper Walls</h3>
                <p className="text-lg text-muted-foreground">
                  Transform public spaces into canvases for anonymous romantic expression
                </p>
              </div>
              
              <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant mb-8">
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-muted-foreground">Interactive Location Map</p>
                  </div>
                </div>
                <p className="text-center text-muted-foreground italic">
                  Discover glowing pins across your city containing heartfelt anonymous messages
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Someone left their heart here, hoping you'd find it ❤️",
                  "This café holds the memory of our first laugh together ☕",
                  "Every sunset from this bench reminds me of possibility 🌅"
                ].map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow transition-all"
                  >
                    <p className="text-foreground">{message}</p>
                    <p className="text-sm text-muted-foreground mt-2">📍 Left nearby • 2 hours ago</p>
                  </motion.div>
                ))}
              </div>
            </div>
          );

        case "loveos":
          return (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Brain className="w-16 h-16 text-emerald mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-4">LoveOS Compatibility Engine</h3>
                <p className="text-lg text-muted-foreground">
                  Advanced psychological profiling for deeper connections
                </p>
              </div>

              <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Your Compatibility Profile</h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">Overall Compatibility</span>
                      <span className="text-emerald font-bold">87%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <motion.div
                        className="h-3 bg-gradient-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "87%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { label: "Values Alignment", score: "92%" },
                      { label: "Communication Style", score: "84%" },
                      { label: "Lifestyle Match", score: "78%" }
                    ].map((metric) => (
                      <div key={metric.label} className="text-center p-4 bg-background/50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald mb-1">{metric.score}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <h5 className="font-semibold text-foreground mb-3">Compatibility Insights</h5>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald rounded-full"></div>
                    Shared values in personal growth and authenticity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald rounded-full"></div>
                    Compatible communication preferences and emotional intelligence
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald rounded-full"></div>
                    Complementary personality traits for balanced relationship
                  </li>
                </ul>
              </div>
            </div>
          );

        case "mystery":
          return (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="w-16 h-16 text-slate-deep mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Mystery Mode</h3>
                <p className="text-lg text-muted-foreground">
                  Connect through personality before appearance
                </p>
              </div>

              <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Anonymous Conversation</h4>
                
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {[
                    { sender: "Mystery Match", message: "What's a belief you hold that most people would disagree with?", time: "2:14 PM" },
                    { sender: "You", message: "I think vulnerability is actually a strength, not a weakness. People often see it as risky, but I believe it's how we create real connections.", time: "2:16 PM" },
                    { sender: "Mystery Match", message: "I completely agree. It takes courage to be vulnerable. What made you realize this?", time: "2:18 PM" },
                    { sender: "You", message: "A few years ago, I went through a difficult time and found that the people who stayed were those I'd been most open with.", time: "2:20 PM" },
                    { sender: "Mystery Match", message: "That's profound. I've had similar experiences. There's something beautiful about authentic human connection.", time: "2:22 PM" }
                  ].map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        msg.sender === "You" 
                          ? "bg-gradient-primary text-white" 
                          : "bg-muted text-foreground"
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${
                          msg.sender === "You" ? "text-white/70" : "text-muted-foreground"
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-emerald rounded-full animate-pulse"></div>
                  <span className="text-foreground font-medium">High compatibility detected</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Based on your conversation patterns and shared values, you're ready to reveal profiles when both parties agree.
                </p>
              </div>
            </div>
          );

        case "bodylang":
          return (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Zap className="w-16 h-16 text-navy mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Digital Body Language</h3>
                <p className="text-lg text-muted-foreground">
                  AI-powered analysis of micro-interactions and communication patterns
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-card rounded-2xl p-6 shadow-elegant">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Interest Analysis</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground">Engagement Level</span>
                        <span className="text-navy font-bold">94%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="h-2 bg-navy rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "94%" }}
                          transition={{ duration: 1.5 }}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-3 bg-background/50 rounded-lg">
                        <div className="text-lg font-bold text-emerald">Fast</div>
                        <div className="text-xs text-muted-foreground">Response Time</div>
                      </div>
                      <div className="text-center p-3 bg-background/50 rounded-lg">
                        <div className="text-lg font-bold text-emerald">High</div>
                        <div className="text-xs text-muted-foreground">Message Quality</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-card rounded-2xl p-6 shadow-elegant">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Communication Insights</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full"></div>
                      <span className="text-sm text-foreground">Thoughtful response patterns detected</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full"></div>
                      <span className="text-sm text-foreground">High emotional intelligence indicators</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full"></div>
                      <span className="text-sm text-foreground">Consistent engagement timing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald rounded-full"></div>
                      <span className="text-sm text-foreground">Authentic conversation flow</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-semibold text-foreground">Mutual Interest Score</h5>
                  <div className="text-2xl font-bold text-navy">96%</div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Both parties showing strong engagement and compatibility signals. Perfect time to take the next step.
                </p>
                <Button className="w-full bg-gradient-primary text-white border-0 hover:opacity-90">
                  Suggest Video Call
                </Button>
              </div>
            </div>
          );

        default:
          return <FeatureGrid />;
      }
    };

    if (activeFeature === "home") {
      return <FeatureGrid />;
    }

    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {getDetailContent()}
          </motion.div>
        </div>
      </section>
    );
  };

  const Footer = () => (
    <footer className="bg-navy-deep text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold">SoulSync</span>
          </div>
          <p className="text-slate-light mb-8 max-w-2xl mx-auto">
            Revolutionizing digital dating through advanced psychology, AI analysis, and authentic human connection.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-slate-light">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="border-t border-slate-deep mt-12 pt-8">
            <p className="text-slate-light">© 2024 SoulSync. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AnimatePresence mode="wait">
        <DetailView />
      </AnimatePresence>
      <Footer />
    </div>
  );
}