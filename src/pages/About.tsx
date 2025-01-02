import { Users } from 'lucide-react'
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
          <Users className="mx-auto h-12 w-12" />
          <h1 className="mt-4 text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Learn more about our company and mission
          </p>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            We are a forward-thinking technology company dedicated to delivering
            innovative solutions that empower businesses to thrive in the
            digital age.
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gray-50 dark:bg-gray-800">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              To provide cutting-edge technology solutions that drive business
              growth and innovation while maintaining the highest standards of
              quality and customer satisfaction.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              To become the global leader in digital transformation, recognized
              for our innovative solutions and commitment to excellence in every
              project we undertake.
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
        title="Our Team"
        subtitle="Meet the people behind our success"
        className="bg-gray-50 dark:bg-gray-800"
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
