import { Checkbox } from '@/components/ui/checkbox';
interface CheckboxDemoProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function CheckboxDemo({ checked, onCheckedChange }: CheckboxDemoProps) {
  return (
    <div className="flex items-center space-x-1">
      <Checkbox
        className="w-3 h-3"
        id="terms"
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <label
        htmlFor="terms"
        className="text-[13px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I have read and agree to the <span className="text-primary ">Privacy Policy</span> and{' '}
        <span className="text-primary">Terms of Use</span>
      </label>
    </div>
  );
}
