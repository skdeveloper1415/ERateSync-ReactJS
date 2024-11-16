import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RadioButton } from "primereact/radiobutton";

export default function TenureAnalysis() {
  const [ingredient, setIngredient] = useState("");
  return (
    <div>
      <div className="flex items-center gap-[10px] 3xl:gap-[0.521vw]">
        <div className="bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] p-[8px] 3xl:p-[0.417vw] h-[40px] 3xl:h-[2.083vw]">
          <div className="flex items-center gap-[16px] 3xl:gap-[0.833vw]">
            <div className="text-[#19212A] text-[14px] 3xl:text-[0.729vw] font-medium">
              View Type
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center custRadioButton">
                <RadioButton
                  inputId="ingredient1"
                  name="pizza"
                  value="Cheese"
                  onChange={(e) => setIngredient(e.value)}
                  checked={ingredient === "Cheese"}
                />
                <label
                  htmlFor="ingredient1"
                  className="ml-2 text-[#4B586E] text-[14px] 3xl:text-[0.729vw]"
                >
                  Customer
                </label>
              </div>
              <div className="flex items-center custRadioButton">
                <RadioButton
                  inputId="ingredient2"
                  name="pizza"
                  value="Mushroom"
                  onChange={(e) => setIngredient(e.value)}
                  checked={ingredient === "Mushroom"}
                />
                <label
                  htmlFor="ingredient2"
                  className="ml-2 text-[#4B586E] text-[14px] 3xl:text-[0.729vw]"
                >
                  Purchase Details
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] p-[8px] 3xl:p-[0.417vw] h-[40px] 3xl:h-[2.083vw]">
          <div className="flex items-center gap-[16px] 3xl:gap-[0.833vw]">
            <div className="text-[#19212A] text-[14px] 3xl:text-[0.729vw] font-medium">
            Management
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center custRadioButton">
                <RadioButton
                  inputId="ingredient1"
                  name="pizza"
                  value="Cheese"
                  onChange={(e) => setIngredient(e.value)}
                  checked={ingredient === "Cheese"}
                />
                <label
                  htmlFor="ingredient1"
                  className="ml-2 text-[#4B586E] text-[14px] 3xl:text-[0.729vw]"
                >
                  All
                </label>
              </div>
              <div className="flex items-center custRadioButton">
                <RadioButton
                  inputId="ingredient2"
                  name="pizza"
                  value="Mushroom"
                  onChange={(e) => setIngredient(e.value)}
                  checked={ingredient === "Mushroom"}
                />
                <label
                  htmlFor="ingredient2"
                  className="ml-2 text-[#4B586E] text-[14px] 3xl:text-[0.729vw]"
                >
                  Admin
                </label>
              </div>
              <div className="flex items-center custRadioButton">
                <RadioButton
                  inputId="ingredient5"
                  name="pizza"
                  value="Mushroom5"
                  onChange={(e) => setIngredient(e.value)}
                  checked={ingredient === "Mushroom5"}
                />
                <label
                  htmlFor="ingredient5"
                  className="ml-2 text-[#4B586E] text-[14px] 3xl:text-[0.729vw]"
                >
                  Tech
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] p-[8px] 3xl:p-[0.417vw] h-[40px] 3xl:h-[2.083vw]">
          <div className="flex items-center gap-[16px] 3xl:gap-[0.833vw]">
            <div className="text-[#19212A] text-[14px] 3xl:text-[0.729vw] font-medium">
            Service Provider
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center custRadioButton">
                <RadioButton
                  inputId="ingredient1"
                  name="pizza"
                  value="Cheese"
                  onChange={(e) => setIngredient(e.value)}
                  checked={ingredient === "Cheese"}
                />
                <label
                  htmlFor="ingredient1"
                  className="ml-2 text-[#4B586E] text-[14px] 3xl:text-[0.729vw]"
                >
                  Consultant
                </label>
              </div>
              <div className="flex items-center custRadioButton">
                <RadioButton
                  inputId="ingredient2"
                  name="pizza"
                  value="Mushroom"
                  onChange={(e) => setIngredient(e.value)}
                  checked={ingredient === "Mushroom"}
                />
                <label
                  htmlFor="ingredient2"
                  className="ml-2 text-[#4B586E] text-[14px] 3xl:text-[0.729vw]"
                >
                  Supplier
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <Link
            to={""}
            className="inline-block bg-[#1570EF] text-white text-[16px] 3xl:text-[0.833vw] rounded-[4px] 3xl:rounded-[0.208vw] py-[8px] 3xl:py-[0.417vw] px-[20px] 3xl:px-[1.042vw]"
          >
            Push to Workbook
          </Link>
        </div>
      </div>
    </div>
  );
}
