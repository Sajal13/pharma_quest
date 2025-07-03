import LottieBackground from '@/components/lottie/LottieBackground';
import Card from '@/components/common/Card';
import Link from 'next/link';
import Button from '@/components/common/Button';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Page() {
  return (
    <>
      <main className="min-h-screen min-w-screen bg-white z-0 relative flex justify-center items-center">
        <LottieBackground />
        <Card
          title="Game Over"
          description='Congratulation 🎉! You have completed the game.'
        >
          <Link href='/' className="flex justify-center">
            <Button
              title='Go Home'
              className="group hover:scale-105 uppercase font-press-start"
              endIcon={
                <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-linear duration-200" />
              }
            />
          </Link>
        </Card>
      </main>
    </>
  );
}
