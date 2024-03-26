"use client";

import Select from "react-select";

type option = {
  value: string;
  label: string;
};

interface Props {
  options: option[];
  placeholder: string;
  name: string;
  value?: string;
  setValue: (e: any) => void;
}

export default function InputSelect({
  options,
  placeholder,
  name,
  value,
  setValue,
}: Props) {
  return (
    <div>
      <Select
        options={options}
        name={name}
        onChange={(e) => {
          const event: any = e;
          setValue(event.value);
        }}
        value={{ label: value, value: value }}
        placeholder={placeholder}
        noOptionsMessage={() => "Sin Opciones"}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "#ddd",
            outlineColor: state.isFocused ? "#ddd" : "#007c9c",
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            color: "#001d31",
            fontSize: "16px",
            borderRadius: "3px",
            height: "39px",
          }),
        }}
      />
    </div>
  );
}
