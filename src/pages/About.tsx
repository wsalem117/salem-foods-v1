import Section from '@/components/common/Section'
import SEO from '@/components/common/SEO'
import TeamMemberCard from '@/components/sections/TeamMember'
import Timeline from '@/components/sections/Timeline'
import { teamMembers, companyTimeline } from '@/data/mockData'

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="About Us"
        description="Learn about our company, mission, and the team behind our success."
        keywords="about us, company, team, mission, vision"
      />
      {/* Company Overview */}
      <Section>
        <div className="mb-8 text-center">
          <div className="mx-auto h-12 w-12 text-primary-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
              />
            </svg>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold">
            About Salem Foods
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Leading Egyptian Agriculture Since 2022
          </p>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Salem Foods is a premier agricultural company specializing in
            premium fruit production and export. From our state-of-the-art farms
            in Egypt to European markets, we deliver excellence in every
            harvest.
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              To cultivate and deliver premium Egyptian fruits to global markets
              while maintaining sustainable farming practices and supporting
              local communities. We strive for excellence in agricultural
              innovation and customer satisfaction.
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-primary-dark">
              Our Vision
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              To become the leading exporter of premium Egyptian fruits,
              recognized globally for our quality, sustainability, and
              commitment to agricultural excellence. We aim to set new standards
              in modern farming and global trade.
            </p>
          </div>
        </div>
      </Section>

      {/* Company Timeline */}
      <Section
        title="Our Journey"
        subtitle="Key milestones in our company's history"
      >
        <Timeline events={companyTimeline} />
      </Section>

      {/* Team Section */}
      <Section
        title="Our Leadership Team"
        subtitle="Meet the agricultural experts leading Salem Foods"
        className="bg-primary-light/10 dark:bg-gray-800"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>
    </div>
  )
}

export default About
