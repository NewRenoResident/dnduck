import {
  SliderFilledTrack,
  Slider,
  SliderTrack,
  Tooltip,
  SliderThumb,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGridMapColumnSize,
  setColumnSize,
} from "../../../store/slice/grid-map-slice";

export function SliderHeighSizer() {
  const sliderValue = useSelector(selectGridMapColumnSize);
  const dispatcher = useDispatch();
  const [showTooltip, setShowTooltip] = useState(false);
  const [tempValue, setTempValue] = useState(sliderValue);

  return (
    <Slider
      id="slider"
      defaultValue={sliderValue}
      min={1}
      max={60}
      colorScheme="teal"
      onChange={(v) => setTempValue(v)}
      onChangeEnd={(v) => dispatcher(setColumnSize(v))}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${tempValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}
