import GradientButton from '../../GradientButton/GradientButton';
import SectionCard from '../../SectionCard/SectionCard';

export default function ContactSection() {
  return (
    <SectionCard id="contact" title="Contact Me" noBackground={true}>
      I'm always interested in hearing about new projects and opportunities.
      Feel free to reach out to me through email.
      <div className="flex justify-center mt-80">
        <GradientButton href="mailto:gurvirsasan1@gmail.com">
          Email Me
        </GradientButton>
        <GradientButton
          href="https://www.linkedin.com/in/gurvirsasan"
        >
          LinkedIn
        </GradientButton>
        <GradientButton
          href="https://www.github.com/gurvirsasan"
        >
          GitHub
        </GradientButton>
      </div>
    </SectionCard>
  );
}
