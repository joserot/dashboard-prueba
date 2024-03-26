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
          menu: (baseStyles, state) => ({
            ...baseStyles,
            color: "#626262",
            fontSize: "12px",
            fontWeight: 600,
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "#626262",
            outlineColor: state.isFocused ? "#ddd" : "#1a3d7d",
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            color: "#626262",
            fontSize: "12px",
            borderRadius: "5px",
            height: "38px",
            fontWeight: 600,
          }),
        }}
      />
    </div>
  );
}
