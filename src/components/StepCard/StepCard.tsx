interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

const StepCard = ({ stepNumber, title, description }: StepCardProps) => {
  const formattedStep = String(stepNumber).padStart(2, '0');
  
  return (
    <div className="w-[415px] h-[300px] bg-gray-100 flex flex-col gap-4 p-6 rounded-[15px]">
      <span className="text-black text-[48px] font-bold">
        {formattedStep}
      </span>
      <p className="text-black text-[24px] font-medium leading-tight pt-[80px]">
        {title}
      </p>
      <p className="text-[#7A7A7A] text-[16px] font-medium leading-tight">
        {description}
      </p>
    </div>
  );
};

export default StepCard;

