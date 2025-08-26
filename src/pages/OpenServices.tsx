import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Award, CheckCircle, Shield, FileText, Calendar } from "lucide-react";
import { useState } from "react";

const OpenServices = () => {
  const [certificateId, setCertificateId] = useState("");
  const [holderName, setHolderName] = useState("");

  const handleVerification = () => {
    // This would normally connect to a backend service
    console.log("Verifying certificate:", { certificateId, holderName });
  };

  const sampleCertificates = [
    {
      id: "AI-ML-2024-001",
      holderName: "John Doe",
      course: "Machine Learning Fundamentals",
      issueDate: "2024-01-15",
      status: "Valid"
    },
    {
      id: "AI-DL-2024-002",
      holderName: "Jane Smith",
      course: "Deep Learning Advanced",
      issueDate: "2024-02-20",
      status: "Valid"
    },
    {
      id: "AI-NLP-2024-003",
      holderName: "Mike Johnson",
      course: "Natural Language Processing",
      issueDate: "2024-03-10",
      status: "Valid"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent animate-fade-in">
              Open Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Verify certificates, access public resources, and explore our open educational services.
            </p>
          </div>
        </section>

        {/* Certificate Verification Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Shield className="text-white" size={40} />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-foreground">Certificate Verification</h2>
                <p className="text-xl text-muted-foreground">
                  Verify the authenticity of AI Labs certificates using our secure verification system.
                </p>
              </div>

              <div className="glass-card p-8 md:p-12 rounded-3xl mb-12">
                <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Verify a Certificate</h3>
                <div className="max-w-2xl mx-auto">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Certificate ID</label>
                      <Input 
                        placeholder="Enter certificate ID (e.g., AI-ML-2024-001)"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        className="glass-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Certificate Holder Name</label>
                      <Input 
                        placeholder="Enter full name as it appears on certificate"
                        value={holderName}
                        onChange={(e) => setHolderName(e.target.value)}
                        className="glass-input"
                      />
                    </div>
                    <Button 
                      onClick={handleVerification}
                      className="glow-button w-full"
                      disabled={!certificateId || !holderName}
                    >
                      <Search className="mr-2" size={20} />
                      Verify Certificate
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sample Certificates */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Recent Verified Certificates</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sampleCertificates.map((cert) => (
                    <Card key={cert.id} className="glass-card border-0">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Award className="text-primary" size={24} />
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                            <CheckCircle size={14} className="mr-1" />
                            {cert.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-foreground">{cert.course}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          Certificate ID: {cert.id}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-sm text-foreground">
                            <strong>Holder:</strong> {cert.holderName}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <Calendar size={14} className="mr-2" />
                            Issued: {cert.issueDate}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Additional Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
                <FileText size={60} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Course Materials</h3>
                <p className="text-muted-foreground mb-6">
                  Access free course materials, study guides, and practice exercises.
                </p>
                <Button variant="outline" className="glass-button">
                  Browse Materials
                </Button>
              </div>
              
              <div className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
                <Calendar size={60} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Event Calendar</h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with our upcoming workshops, webinars, and events.
                </p>
                <Button variant="outline" className="glass-button">
                  View Events
                </Button>
              </div>
              
              <div className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
                <Award size={60} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Alumni Network</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with fellow graduates and expand your professional network.
                </p>
                <Button variant="outline" className="glass-button">
                  Join Network
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OpenServices;
