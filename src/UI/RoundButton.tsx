import { SVGProps } from 'react';

type Props = {
  Image: React.FC<SVGProps<SVGSVGElement>>;
  color?: string;
} & React.ComponentPropsWithoutRef<'div'>

function RoundButton({Image, color = "white", ...props}: Props) {
  return (
    <div 
      className="p-2 rounded-full bg-white/[0.08] h-10 w-10 flex justify-center items-center cursor-pointer"
      {...props}
    >
      <Image 
        color={color} 
        width={18} 
        height={18} 
      />
    </div>
  )
}

export default RoundButton