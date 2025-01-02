import { TeamMember } from '@/types/components'
import Card from '../common/Card'
import { Github, Linkedin, Twitter } from 'lucide-react'

interface TeamMemberCardProps {
  member: TeamMember
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Card className="text-center">
      <img
        src={member.image}
        alt={member.name}
        className="mx-auto h-32 w-32 rounded-full object-cover"
        loading="lazy"
      />
      <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.role}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{member.bio}</p>

      {member.socialLinks && (
        <div className="mt-4 flex justify-center space-x-4">
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      )}
    </Card>
  )
}

export default TeamMemberCard
