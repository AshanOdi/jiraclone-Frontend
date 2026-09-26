import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Mail, Phone } from "lucide-react";
import PageHeader from "../components/pageHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input, Label, Textarea } from "../components/ui/form";

const emptyForm = { name: "", email: "", message: "" };

const faqs = [
  ["How do I create an issue?", "Click “New Issue” in the top bar."],
  ["How do I update a status?", "Use the “Move” menu on a card in the board."],
  [
    "Can I delete an issue?",
    "Yes, from the issue page or from a resolved card.",
  ],
];

// Contact page with a form to send messages, About us and FAQ sections
export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const formEndpoint = "https://formspree.io/f/xnnbevro";

  // sent form data to the formspree endpoint
  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(formEndpoint, formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      toast.success("Successfully Sent!");
      setFormData(emptyForm);
    } catch {
      toast.error("Could not send message");
    } finally {
      setSending(false);
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <PageHeader
        title="Contact"
        description="Questions or feedback? Get in touch."
      />

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>We usually reply within a day.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reach us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-muted-foreground" /> +94 11 234
                5678
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" />{" "}
                forge@gmail.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                forge. is a lightweight issue tracker built with React, Spring
                Boot and Tailwind CSS, focused on simplicity and speed.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            {faqs.map(([q, a]) => (
              <div key={q}>
                <p className="text-sm font-medium">{q}</p>
                <p className="text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
