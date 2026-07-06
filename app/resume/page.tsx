import type { Metadata } from "next";
import { Resume } from "@/components/Resume";

export const metadata: Metadata = {
  title: "Resume — Fatma Ezzahra Hadhri",
  description:
    "CV — Fatma Ezzahra Hadhri, Business Computing student & Full-Stack Developer.",
};

export default function ResumePage() {
  return <Resume />;
}
