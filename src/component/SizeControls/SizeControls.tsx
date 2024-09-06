import {
  Box,
  FormControl,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGridMapColumnSize,
  selectGridMapRowsSize,
  setColumnSize,
  setRowsSize,
} from "../../store/slice/grid-map-slice";
import { Rounder } from "../Rounder/Rounder";

export const SizerControls = () => {
  const columns = useSelector(selectGridMapColumnSize);
  const rows = useSelector(selectGridMapRowsSize);
  const dispatcher = useDispatch();

  const InputBox = ({ value, setter, label }: any) => (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
    >
      <Rounder>
        <FormControl>
          <NumberInput size={"xs"} defaultValue={value} min={1} max={80}>
            <NumberInputField
              textAlign="center"
              onBlur={(v) => dispatcher(setter(+v.currentTarget.value))}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.currentTarget.blur();
                }
              }}
              border="none"
              color="white"
              fontSize={30}
              p={0}
              _focus={{ outline: "none" }}
            />
          </NumberInput>
        </FormControl>
      </Rounder>
      <Text fontSize={15} color="white">
        {label}
      </Text>
    </Box>
  );

  return (
    <Box position="absolute" bottom={4} left={4} display="flex" gap={4}>
      <InputBox value={columns} setter={setColumnSize} label="Колонки" />
      <InputBox value={rows} setter={setRowsSize} label="Строки" />
    </Box>
  );
};
