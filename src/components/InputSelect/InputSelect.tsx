import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDownIcon } from "@/components/ui/icon";
import { InputSelectOption } from "@/types/inputSelect.type";

type Props = {
  options: InputSelectOption[];
  placeholder: string;
  onSelect: (selectedValue: string) => void;
};
const InputSelect = ({ placeholder, options, onSelect }: Props) => {
  return (
    <Select onValueChange={(value) => onSelect(value)}>
      <SelectTrigger
        variant="outline"
        size="md"
        style={{ justifyContent: "space-between" }}
      >
        <SelectInput placeholder={placeholder} />
        <SelectIcon className="mr-3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {options.map((option) => (
            <SelectItem
              label={option.label}
              value={option.value}
              key={option.value}
            />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default InputSelect;
