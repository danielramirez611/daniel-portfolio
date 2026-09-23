import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { AchievementsSection } from "@/features/achievements/presentation/components/achievements-section";

import { CertificationsSection } from "@/features/certifications/presentation/components/certifications-section";

import { ContactSection } from "@/features/contact/presentation/components/contact-section";

import { ExperienceSection } from "@/features/experience/presentation/components/experience-section";

import { HeroSection } from "@/features/profile/presentation/components/hero-section";
import { AboutSection } from "@/features/profile/presentation/components/about-section";

import { GetFeaturedProjects } from "@/features/projects/application/use-cases/get-featured-projects";

import { LocalProjectRepository } from "@/features/projects/infrastructure/repositories/local-project.repository";

import { ProjectsSection } from "@/features/projects/presentation/components/projects-section";

import { SkillsSection } from "@/features/skills/presentation/components/skills-section";

export default async function Home() {
  const repository = new LocalProjectRepository();

  const getFeaturedProjects = new GetFeaturedProjects(repository);

  const projects = await getFeaturedProjects.execute();

  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-5 pt-16">
        <HeroSection />

        <AboutSection />

        <SkillsSection />

        <ExperienceSection />

        <ProjectsSection projects={projects} />

        <AchievementsSection />

        <CertificationsSection />

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
