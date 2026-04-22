import { useCallback, useState } from 'react';
import { HiArrowDownTray } from 'react-icons/hi2';
import Button from '../ui/Button';

const RICK_ROLL_URL = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
const RESUME_HREF = '/Gurvir Sasan Resume.pdf';
const RESUME_FILENAME = 'Gurvir Sasan Resume.pdf';

export default function ResumeDownloadButton({ className = '' }: { className?: string }) {
  const [ricked, setRicked] = useState(false);

  const onClick = useCallback(() => {
    if (!ricked) {
      setRicked(true);
      window.open(RICK_ROLL_URL, '_blank', 'noopener,noreferrer');
      return;
    }
    const link = document.createElement('a');
    link.href = RESUME_HREF;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [ricked]);

  return (
    <Button
      type="button"
      variant="secondary"
      fullWidth
      className={className}
      leftSlot={<HiArrowDownTray aria-hidden />}
      onClick={onClick}
    >
      {ricked ? 'but seriously, download resume' : 'Download Resume'}
    </Button>
  );
}
