import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

const minDistance = 10;

const CustomSlider = styled(Slider)(() => ({
  color: "#4E4D93", //color of the slider between thumbs
  "& .MuiSlider-thumb": {
    backgroundColor: "#4E4D93", //color of thumbs
  },
  "& .MuiSlider-rail": {
    color: "#2A254B", ////color of the slider outside  teh area between thumbs
  },
}));

const PriceSlider = ({
  dispatchItems,
  itemsState,
  additionalStylesSlider,
  additionalStylesSpan,
}) => {
  const handleChangePrice = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 250 - minDistance);
        dispatchItems({
          type: "SET_PRICE",
          payload: [clamped, clamped + minDistance],
        });
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        dispatchItems({
          type: "SET_PRICE",
          payload: [clamped - minDistance, clamped],
        });
      }
    } else {
      dispatchItems({ type: "SET_PRICE", payload: newValue });
    }
  };
  return (
    <>
      <span className={`text-primary-dark text-md m-6 ${additionalStylesSpan}`}>
        Price:{" "}
      </span>
      <CustomSlider
        getAriaLabel={() => "Minimum distance shift"}
        value={itemsState.priceGap}
        onChange={handleChangePrice}
        valueLabelDisplay="auto"
        min={0}
        max={250}
        disableSwap
        className={`max-w-[20%] color-primary-dark ${additionalStylesSlider}`}
      />
    </>
  );
};
export default PriceSlider;
