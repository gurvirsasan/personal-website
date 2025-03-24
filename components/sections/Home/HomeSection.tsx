import SectionCard from '../../SectionCard';
import Image from 'next/image';

export default function HomeSection() {
  return (
    <SectionCard id="home" title="Welcome to My Website" isFirstSection={true}>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-lg">
          This is a personal website built with Next.js and TypeScript.
        </p>
        {/* <Image
          src="/face-pic.jpg"
          alt="Profile Picture"
          fill
          className="object-cover"
          priority
        /> */}
      </div>
    </SectionCard>
  );
}
