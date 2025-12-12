"use client";

import { siteConfig, socialLinks } from "@/data/portfolio";
import { SocialLinks, socialLinkConfigs } from "@/components/ui/SocialLinks";

// Configure footer social links with actual data
const footerSocialLinks = [
  socialLinkConfigs.github(socialLinks.github),
  socialLinkConfigs.linkedin(socialLinks.linkedin),
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright & Attribution */}
          <div className="text-sm text-muted-foreground text-center sm:text-left">
            <p>Designed & Built by {siteConfig.name}</p>
            <p className="text-xs mt-1 opacity-70">© {currentYear} All rights reserved.</p>
          </div>

          {/* Social links - Using new SocialLinks component */}
          <SocialLinks
            links={footerSocialLinks}
            layout="horizontal"
            size="compact"
            containerLabel="Footer social media links"
          />
        </div>
      </div>
    </footer>
  );
}
