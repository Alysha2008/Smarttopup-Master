import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import {
  Smartphone,
  Wifi,
  Tv,
  Zap,
  MessageCircle,
  Shield,
  Clock,
  Users,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  User,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import "./App.css";

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Refund Policy", path: "/refund" },
    { name: "Copyright", path: "/copyright" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-blue rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">SmartTopUp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="gradient-blue">
              <a
                href="https://wa.me/2349069309828"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="gradient-blue w-full mt-4">
              <a
                href="https://wa.me/2349069309828"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Now
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

// Home Page Component
function HomePage() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Data Bundles",
      description: "Get affordable data plans for all networks instantly",
    },
    {
      icon: Phone,
      title: "Airtime Top-Up",
      description: "Recharge your phone with airtime in seconds",
    },
    {
      icon: Tv,
      title: "Cable TV Subscriptions",
      description: "Pay for DSTV, GOTV, and Startimes subscriptions",
    },
    {
      icon: Zap,
      title: "Electricity Bill Payments",
      description: "Pay your electricity bills quickly and securely",
    },
    {
      icon: Users,
      title: "Wallet Funding & Referral Bonus",
      description: "Fund your wallet and earn from referrals",
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "98% of Nigerians already use WhatsApp daily",
      description: "No learning curve - use what you already know",
    },
    {
      icon: Smartphone,
      title: "No need to download new apps",
      description: "Everything happens in WhatsApp",
    },
    {
      icon: Shield,
      title: "Fast, secure, and easy-to-use automation",
      description: "Advanced security with simple interface",
    },
    {
      icon: Clock,
      title: "Real-time support",
      description: "Get help whenever you need it",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-6 bg-primary/10 text-primary border-primary/20"
          >
            VTU WhatsApp Bot Service
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-gradient">SmartTopUp</span> —
            <br />
            Recharge Made Easy!
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Buy Data, Airtime, Pay Bills & Fund Wallets Instantly via WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="gradient-blue text-lg px-8 py-3"
            >
              <a
                href="https://wa.me/2349069309828"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-3"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for mobile top-ups and bill payments, all in
              one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-colors"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why use SmartTopUp?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've designed the simplest way to handle all your mobile and bill
              payment needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">
                        {reason.title}
                      </CardTitle>
                      <CardDescription>{reason.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of Nigerians who trust SmartTopUp for their daily
            recharge needs
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-8 py-3"
          >
            <a
              href="https://wa.me/2349069309828"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start on WhatsApp Now
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

// About Us Page Component
function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About SmartTopUp
          </h1>
          <p className="text-xl text-muted-foreground">
            Making mobile top-ups and bill payments as easy as chatting on
            WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              SmartTopUp is a Nigerian tech innovation designed to make mobile
              top-ups and bill payments as easy as chatting on WhatsApp. Our
              platform eliminates the hassle of multiple apps. No downloads.
              Just send a message and you're done.
            </p>
            <p className="text-muted-foreground mb-6">
              We are fully verified and committed to offering 24/7 services to
              ensure you never run out of airtime, data, or miss important bill
              payments.
            </p>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Fully verified and licensed</span>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="text-center">
              <div className="w-24 h-24 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
              <p className="text-muted-foreground">
                Always available when you need us most
              </p>
            </div>
          </div>
        </div>

        <Card className="border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Meet the CEO</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Aliyu Ibrahim Aliyu</h3>
            <p className="text-muted-foreground mb-4">
              Chief Executive Officer
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading SmartTopUp with a vision to revolutionize how Nigerians
              handle their mobile and utility payments through innovative
              WhatsApp automation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Contact Us Page Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team for support or inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone (Admin)</h3>
                  <p className="text-muted-foreground">09137444233</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    smarttopupofficial@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    No 8, Muazu Aliyu Street, Gaskiya Layout, Zaria, Kaduna,
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">CEO</h3>
                  <p className="text-muted-foreground">Aliyu Ibrahim Aliyu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full gradient-blue">
                  Submit Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Terms of Service Page Component
function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using our services
          </p>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Terms of Use</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              By using SmartTopUp, you agree to follow all applicable Nigerian
              telecom and payment laws. Any misuse of the platform may lead to
              permanent account suspension. SmartTopUp reserves the right to
              update terms without notice.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              1. Acceptance of Terms
            </h3>
            <p className="text-muted-foreground mb-4">
              By accessing and using SmartTopUp services, you accept and agree
              to be bound by the terms and provision of this agreement.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              2. Service Description
            </h3>
            <p className="text-muted-foreground mb-4">
              SmartTopUp provides VTU (Virtual Top-Up) services through
              WhatsApp, including but not limited to airtime recharge, data
              bundle purchases, cable TV subscriptions, and electricity bill
              payments.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              3. User Responsibilities
            </h3>
            <p className="text-muted-foreground mb-4">
              Users are responsible for providing accurate information and
              ensuring sufficient funds in their wallet before making
              transactions. Users must not attempt to defraud or misuse the
              system.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              4. Service Availability
            </h3>
            <p className="text-muted-foreground mb-4">
              While we strive for 24/7 availability, SmartTopUp does not
              guarantee uninterrupted service and may perform maintenance that
              temporarily affects service availability.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              5. Limitation of Liability
            </h3>
            <p className="text-muted-foreground">
              SmartTopUp shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of our services.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Privacy Policy Page Component
function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            How we collect, use, and protect your information
          </p>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Data Collection & Use</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              We do not share your information with third parties. Your WhatsApp
              number, transaction history, and wallet data are securely stored
              and only used to process your requests. All data is encrypted.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              1. Information We Collect
            </h3>
            <p className="text-muted-foreground mb-4">
              We collect your WhatsApp number, transaction details, and payment
              information necessary to provide our services. We may also collect
              device information for security purposes.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              2. How We Use Your Information
            </h3>
            <p className="text-muted-foreground mb-4">
              Your information is used solely to process transactions, provide
              customer support, prevent fraud, and improve our services. We do
              not use your data for marketing without your explicit consent.
            </p>

            <h3 className="text-lg font-semibold mb-3">3. Data Security</h3>
            <p className="text-muted-foreground mb-4">
              We implement industry-standard security measures to protect your
              data, including encryption, secure servers, and regular security
              audits. Your payment information is processed through secure,
              PCI-compliant systems.
            </p>

            <h3 className="text-lg font-semibold mb-3">4. Data Retention</h3>
            <p className="text-muted-foreground mb-4">
              We retain your transaction data for accounting and legal
              compliance purposes. Personal data is kept only as long as
              necessary to provide our services.
            </p>

            <h3 className="text-lg font-semibold mb-3">5. Your Rights</h3>
            <p className="text-muted-foreground">
              You have the right to access, update, or delete your personal
              information. Contact us at smarttopupofficial@gmail.com for any
              privacy-related requests.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Copyright Page Component
function CopyrightPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Copyright</h1>
          <p className="text-xl text-muted-foreground">
            Intellectual property rights and usage terms
          </p>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              All content, logos, and technology associated with SmartTopUp are
              protected under Nigerian copyright law. No part of the platform
              may be duplicated without written permission.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              1. Copyright Ownership
            </h3>
            <p className="text-muted-foreground mb-4">
              SmartTopUp and all related trademarks, service marks, logos, and
              trade names are owned by SmartTopUp and are protected by Nigerian
              and international copyright laws.
            </p>

            <h3 className="text-lg font-semibold mb-3">2. Permitted Use</h3>
            <p className="text-muted-foreground mb-4">
              You may use our services for personal, non-commercial purposes
              only. You may not reproduce, distribute, modify, or create
              derivative works from our content without explicit written
              permission.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              3. Prohibited Activities
            </h3>
            <p className="text-muted-foreground mb-4">
              You may not reverse engineer, decompile, or attempt to extract
              source code from our platform. Unauthorized copying, distribution,
              or modification of our services is strictly prohibited.
            </p>

            <h3 className="text-lg font-semibold mb-3">4. DMCA Compliance</h3>
            <p className="text-muted-foreground mb-4">
              We respect intellectual property rights and comply with the
              Digital Millennium Copyright Act. If you believe your copyright
              has been infringed, please contact us immediately.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              5. Contact for Permissions
            </h3>
            <p className="text-muted-foreground">
              For licensing inquiries or permission requests, contact us at
              smarttopupofficial@gmail.com with detailed information about your
              intended use.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Refund Policy Page Component
function RefundPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund Policy</h1>
          <p className="text-xl text-muted-foreground">
            Understanding our refund and dispute resolution process
          </p>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-2xl">Refunds & Disputes</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              All transactions are final. Refunds are only granted in the event
              of technical failure (e.g., failed delivery of airtime/data after
              deduction). Users must report such issues within 24 hours to
              support.
            </p>

            <h3 className="text-lg font-semibold mb-3">1. General Policy</h3>
            <p className="text-muted-foreground mb-4">
              Due to the nature of digital services (airtime, data, bill
              payments), all transactions are considered final once successfully
              processed and delivered to the intended recipient.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              2. Eligible Refund Scenarios
            </h3>
            <p className="text-muted-foreground mb-4">
              Refunds may be considered only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>
                Technical failure resulting in payment deduction without service
                delivery
              </li>
              <li>Duplicate transactions due to system error</li>
              <li>
                Service delivery to wrong recipient due to our system error
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">3. Refund Process</h3>
            <p className="text-muted-foreground mb-4">
              To request a refund, you must:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>Report the issue within 24 hours of the transaction</li>
              <li>Provide transaction details and evidence of the problem</li>
              <li>Contact our support team via WhatsApp or email</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">4. Processing Time</h3>
            <p className="text-muted-foreground mb-4">
              Approved refunds will be processed within 3-5 business days.
              Refunds will be credited to your SmartTopUp wallet or original
              payment method, depending on the circumstances.
            </p>

            <h3 className="text-lg font-semibold mb-3">
              5. Non-Refundable Situations
            </h3>
            <p className="text-muted-foreground">
              Refunds will not be granted for user errors such as wrong
              recipient numbers, change of mind after successful delivery, or
              services used after successful delivery.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-blue rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">
                SmartTopUp
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Making recharge and bill payments as easy as chatting on WhatsApp.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="hover:text-primary transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/copyright"
                  className="hover:text-primary transition-colors"
                >
                  Copyright
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phone: 09137444233</li>
              <li>Email: smarttopupofficial@gmail.com</li>
              <li>CEO: Aliyu Ibrahim Aliyu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 SmartTopUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/copyright" element={<CopyrightPage />} />
          <Route path="/refund" element={<RefundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
