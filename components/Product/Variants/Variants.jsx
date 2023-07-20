import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { BsPlus } from 'react-icons/bs';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import VariantTable from './VarientTable';

const Variants = () => {
  const [isOpenVariant, setIsOpenVariant] = useState(false);
  const [variantName, setVariantName] = useState('');
  const [customName, setCustomName] = useState('');
  const [varientValue, setVarientValue] = useState('');
  const [valueList, setValueList] = useState([]);
  const [open, setOpen] = useState(false);

  // console.log("varientValue", varientValue);
  // console.log("valueList", valueList);

  const handleNameChange = event => {
    setVariantName(event.target.value);
  };
  const handleCustomNameChange = event => {
    const { value } = event.target;
    setCustomName(value);
  };

  const getVarientValue = event => {
    setVarientValue(event.target.value);
  };

  const addVarientValue = () => {
    if (variantName === '' || (variantName === 'custom' && customName === '')) {
      alert('Please select a variant name');
      return;
    }
    if (varientValue === '') {
      alert('Please enter a variant value');
      return;
    }
    setValueList([varientValue, ...valueList]);
    setVarientValue('');
  };

  const deleteValueList = () => {
    setValueList([]);
    setOpen(false);
    setCustomName('');
    setVariantName('');
    setVarientValue('');
  };

  const addValueList = () => {
    setOpen(true);
  };

  const displayValueList = valueList.map((value, index) => {
    return (
      <div key={index} className="basis-[50%] flex items-center">
        <FormControl fullWidth size="small" variant="outlined">
          <InputLabel htmlFor="value">Varient Value</InputLabel>
          <OutlinedInput
            disabled
            id="value"
            type="text"
            label="Varient Value"
            value={value}
          />
        </FormControl>
        <div>
          <IconButton
            // onClick={handleClickShowPassword}
            edge="end"
          >
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    );
  });

  return (
    <div className="space-y-5 rounded-lg border border-border-subdued bg-white p-5">
      <div className="flex items-center justify-between">
        <h4 className="text-zing-800 text-base font-semibold leading-normal">
          Variants
        </h4>
        <Button
          variant="text"
          className="flex text-primary text-xs font-medium uppercase items-center gap-1"
          onClick={() => setIsOpenVariant(!isOpenVariant)}
        >
          <BsPlus className="h-5 w-5" /> Add Variants
        </Button>
      </div>
      {isOpenVariant && (
        <div className="py-2">
          <div className="gap-3 flex w-full">
            <div className="basis-[45%]">
              {variantName === 'custom' ? (
                <div>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel htmlFor="value">Add varient name</InputLabel>
                    <OutlinedInput
                      id="value"
                      type="text"
                      label="Add varient name"
                      value={customName}
                      onChange={handleCustomNameChange}
                    />
                  </FormControl>
                </div>
              ) : (
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-select-small-label">
                    Varient Name
                  </InputLabel>

                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Varient Name"
                    value={variantName}
                    onChange={handleNameChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'size'}>Size</MenuItem>
                    <MenuItem value={'color'}>Color</MenuItem>
                    <MenuItem value={'material'}>Material</MenuItem>
                    <MenuItem value={'ram'}>Ram</MenuItem>
                    <MenuItem value={'custom'}>
                      <span className="flex text-primary items-center gap-2">
                        <BsPlus size={20} /> Custom Variant
                      </span>
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            </div>

            <div className="flex flex-col gap-3">
              {displayValueList} {/* mapping data */}
              <div className="basis-[51%] flex items-center">
                <FormControl fullWidth size="small" variant="outlined">
                  <InputLabel htmlFor="value">Add a value</InputLabel>
                  <OutlinedInput
                    id="value"
                    type="text"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={addVarientValue} edge="end">
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Add a value"
                    name="value"
                    value={varientValue}
                    onChange={getVarientValue}
                  />
                </FormControl>
                <div className="">
                  <IconButton
                    // onClick={handleClickShowPassword}
                    edge="end"
                  >
                    <MoreVertIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          {valueList.length > 0 && (
            <div className="flex justify-end text-xs gap-4 mt-3 mr-32">
              <Button
                variant="outlined"
                color="error"
                onClick={deleteValueList}
                sx={{
                  fontSize: '10px',
                  padding: '3px 2px',
                  margin: 0,
                }}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                color="success"
                onClick={addValueList}
                sx={{
                  fontSize: '10px',
                  padding: 0,
                  margin: 0,
                }}
              >
                Add
              </Button>
            </div>
          )}
          {open && (
            <div>
              <p className="text-gray-600 text-sm font-medium my-1">
                Varient Name
              </p>
              <div className="mt-5 border-t pt-3 flex items-center">
                <div className="w-[95%]">
                  <div className="border rounded-md p-3 flex items-center gap-10">
                    <p className="font-semibold">
                      {variantName === 'custom' ? customName : variantName}
                    </p>
                    <div className="flex gap-2">
                      {valueList.map((value, index) => {
                        return (
                          <p
                            key={index}
                            className="text-gray-600 text-sm font-medium px-2 py-1 border rounded-full"
                          >
                            {value}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="">
                  <IconButton
                    // onClick={handleClickShowPassword}
                    edge="end"
                  >
                    <MoreVertIcon />
                  </IconButton>
                </div>
              </div>
              <div className="mt-3">
                <VariantTable variantList={valueList} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Variants;
