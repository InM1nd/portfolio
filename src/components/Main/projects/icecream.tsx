import Image from 'next/image'
import { Button } from '@/components/ui/button'
import LargeImage from '@/img/other/IceCream_Lg.png'
import SmallImage from '@/img/other/IceCream_Sm.png'

const IceCream = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="font-normal text-[48px] md:text-[28px] text-white ml-5 md:ml-0">
        IceCream
      </h2>
      <h3 className="font-normal text-2xl md:text-lg text-white ml-5 pb-5 md:ml-0">
        Landing page
      </h3>
      <div className="relative transition-all duration-300 hover:filter-none">
        <picture>
          <source media="(min-width: 901px)" srcSet={LargeImage.src} />
          <source media="(min-width: 701px) and (max-width: 900px)" srcSet={SmallImage.src} />
          <Image
            src={LargeImage}
            alt="IceCream project"
            className="h-[570px] xl:h-[500px] lg:h-[450px] md:h-[350px] sm:h-auto sm:max-w-full rounded-[20px] transition-all duration-300 grayscale hover:grayscale-0"
            width={800}
            height={570}
          />
        </picture>
        <Button
          asChild
          className="absolute font-normal text-[32px] md:text-2xl text-[#D9D9D9] bg-[#9C0312] rounded-[50px] px-[47px] py-[14px] m-5 bottom-0 right-0 transition-all duration-300 hover:text-[#D9D9D9] hover:bg-[#9C0312]"
        >
          <a href="https://hordiienkoolha.github.io/ice-cream/" target="_blank" rel="noopener noreferrer">
            Learn
          </a>
        </Button>
      </div>
    </div>
  )
}

export default IceCream



