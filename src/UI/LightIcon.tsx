import { SVGProps } from 'react';


type Props = {
  image: React.FC<SVGProps<SVGSVGElement>>;
} & React.ComponentPropsWithoutRef<React.FC<SVGProps<SVGSVGElement>>>


function LightIcon({image: Image, ...props}: Props) {
  return (
    <Image 
      {...props}
      color={"rgba(255, 255, 255, 0.8)"} 
      width={20} 
      height={20} 
    />
  )
}

export default LightIcon