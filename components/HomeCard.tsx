'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <section
      className={cn(
        'flex h-[220px] w-full flex-col justify-between rounded-[14px] px-6 py-6 cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src={img}
          alt={title}
          width={27}
          height={27}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">
          {title}
        </h1>

        <p className="text-base font-normal">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HomeCard;