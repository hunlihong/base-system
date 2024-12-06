import Select from "react-select";
import {OptionModel} from "./model";
import {FC} from "react";

interface Props {
    name?: string;
    options: OptionModel[];
    defaultValue?: OptionModel;
    className?: string;
    onChange?: any;
}

const CustomFormSelect: FC<Props> = ({name = "selectName", options, defaultValue, className = "", onChange}) => {
    return <Select components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null
    }} name={name} options={options} defaultValue={defaultValue} className={className} onChange={onChange}/>
}

export default CustomFormSelect