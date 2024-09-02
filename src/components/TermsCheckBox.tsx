import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I have read and agree to the <span className="text-primary ">Privacy Policy</span> and{' '}
        <span className="text-primary">Terms of Use</span>
      </label>
    </div>
  );
}
