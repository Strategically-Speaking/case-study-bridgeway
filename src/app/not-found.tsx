import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section bg-surface min-h-[60vh] flex items-center">
      <div className="container-narrow text-center">
        <p className="text-8xl font-bold text-brand-blue/10 mb-4" aria-hidden="true">
          404
        </p>
        <h1 className="text-brand-blue mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button href="/" size="lg">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
