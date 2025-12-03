"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  CloseIcon,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";

export function BookProjectsModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const projectTypes = [
    "AI Chatbot",
    "Web Application", 
    "Mobile App",
    "E-commerce Site",
    "Business Website",
    "Custom Software",
    "API Development",
    "Database Design"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000", 
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project booking submitted:", formData);
    // Handle form submission here
  };

  return (
    <Modal>
      <ModalTrigger className="bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
        Book Our Projects
      </ModalTrigger>
      <ModalBody>
        <ModalContent className="max-w-none w-full">
          <CloseIcon />
          
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Book Your Next Project
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Transform your ideas into reality with AJ STUDIOZ. Let's build something amazing together.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Fast Development</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Quick turnaround times</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Quality Assured</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">100% satisfaction guarantee</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Expert Team</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Experienced developers</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">24/7 Support</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Round-the-clock assistance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company Ltd."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Project Timeline</Label>
                <Input
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  placeholder="e.g., 2-3 months"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Project Type</Label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <Badge
                    key={type}
                    variant={formData.projectType === type ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Budget Range</Label>
              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((range) => (
                  <Badge
                    key={range}
                    variant={formData.budget === range ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setFormData(prev => ({ ...prev, budget: range }))}
                  >
                    {range}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                rows={4}
                required
              />
            </div>
          </form>
        </ModalContent>

        <ModalFooter>
          <div className="flex gap-4 w-full">
            <Button variant="outline" className="flex-1">
              Save Draft
            </Button>
            <Button 
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Submit Project Request
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}