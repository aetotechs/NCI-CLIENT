import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
const brands = [
  {
    id: '1',
    name: 'Brazilian Santos',
    orders: '45',
    percentage: 70
  },
  {
    id: '1',
    name: 'Colombian Supremo',
    orders: '38',
    percentage: 40
  },
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    orders: '45',
    percentage: 50
  },
  {
    id: '1',
    name: 'Guatemalan Antigua',
    orders: '28',
    percentage: 12
  },
  {
    id: '1',
    name: 'Kenyan AA',
    orders: '20',
    percentage: 8
  }
];

function CoffeeBrands() {
  return (
    <div className="px-4 bg-white py-4 ">
      <div className="flex justify-between">
        <h3 className="font-semibold">Top Coffee Brands Ordered</h3>
        <div>
          <Select>
            <SelectTrigger className="  border border-selectborder outline-none rounded-[5px] w-[100px] h-[33px] ">
              <SelectValue placeholder="7 days" className="p-5 text-base font-bold " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7 days">7 days </SelectItem>
              <SelectItem value="30 days">30 days</SelectItem>
              <SelectItem value="6 months">6 months</SelectItem>
              <SelectItem value="12 months">12 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {brands.map((brand, index) => (
          <div className="flex flex-col my-2 " key={index}>
            <div className="flex justify-between">
              <div>
                <h4>{brand.name}</h4>
              </div>
              <div>{brand.orders} orders</div>
            </div>
            <div>
              <Progress value={brand.percentage} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoffeeBrands;