import GradientButton from '../../GradientButton/GradientButton';
import SectionCard from '../../SectionCard/SectionCard';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <SectionCard id="contact" title="Contact Me" noBackground={true}>
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-8">
        <p className="text-center text-lg">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out to me through email.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <GradientButton href="mailto:gurvirsasan@gmail.com" className="min-w-[160px]">
            <FaEnvelope className="mr-2 text-lg" />
            Email Me
          </GradientButton>
          <GradientButton href="https://www.linkedin.com/in/gurvirsasan/" className="min-w-[160px]">
            <FaLinkedin className="mr-2 text-lg" />
            LinkedIn
          </GradientButton>
          <GradientButton href="https://www.github.com/gurvirsasan" className="min-w-[160px]">
            <FaGithub className="mr-2 text-lg" />
            GitHub
          </GradientButton>
        </div>
      </div>
    </SectionCard>
  );
}
