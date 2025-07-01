"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MapPin, Phone, Clock, AlertTriangle, Mail } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactUs() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    console.log(values);
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Shalom Health Care Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help you with all your healthcare needs. Reach out to us
          today.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm h-fit">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              <Mail className="h-6 w-6 text-purple-800" />
              Send Us a Message
            </CardTitle>
            <CardDescription className="text-gray-600">
              Fill out the form below and we'll respond to your inquiry
              promptly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input
                          className="md:py-6 "
                          placeholder="Enter full name"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className="md:py-6 "
                          placeholder="Enter Email"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="your message here" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-5 px-4 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* Main Contact Info */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Visit Our Office
              </CardTitle>
              <CardDescription className="text-gray-600">
                Better yet, come see us in person at
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-purple-800 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    7826 Eastern Ave NW, Suite 201 Washington, DC 20012
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-purple-800 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Office Number
                  </h3>
                  <a
                    href="tel:+12026218792"
                    className="text-purple-800 hover:text-blue-800 font-medium transition-colors"
                  >
                    1(202) 621-8792
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Office Hours */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-800" />
                Office Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center  border-b border-gray-100">
                <span className="font-medium text-gray-900">
                  Monday - Friday
                </span>
                <span className="text-gray-600">8AM–8PM</span>
              </div>
              <div className="flex justify-between items-center  border-b border-gray-100">
                <span className="font-medium text-gray-900">
                  Saturday - Sunday
                </span>
                <span className="text-gray-600">8AM–6PM</span>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold ">Emergency Service</span>
                </div>
                <p className="font-medium">24/7 Available</p>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="shadow-xl border-0 bg-red-50 border-red-200">
            <CardContent className="p-2">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-red-900 mb-2">
                    Emergency Situations
                  </h3>
                  <p className="text-red-800 mb-3">
                    For life-threatening situations, please call:
                  </p>
                  <a
                    href="tel:911"
                    className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call 911
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
