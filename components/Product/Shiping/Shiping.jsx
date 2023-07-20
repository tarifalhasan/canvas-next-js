import React, { useState, ChangeEvent } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import LabeledInput from '../../Form/LabeledInput';

const Shiping = ({ shippingInfo, onShippingInfoChange }) => {
  return (
    <div className="space-y-3 rounded-lg border border-border-subdued bg-white p-5">
      <h4 className="text-zing-800 text-base font-semibold leading-normal">
        Shipping
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <LabeledInput
          label={'Weight (kg)'}
          placeholder="$120"
          type="number"
          name="weight"
          value={shippingInfo.weight}
          onChange={onShippingInfoChange}
        />
        <LabeledInput
          label={'Shipping days'}
          placeholder="7 Days"
          type="number"
          name="shippingDays"
          value={shippingInfo.shippingDays}
          onChange={onShippingInfoChange}
        />
      </div>
      <div className="border-t-2 mt-2 py-2 border-border-subdued">
        <div className="flex items-center justify-between">
          <h4 className="text-zing-800 text-base font-semibold leading-normal">
            Cash on Delivery
          </h4>
          <div>
            <FormControlLabel
              control={
                <Switch
                  name="cashOnDeliver"
                  checked={shippingInfo.cashOnDeliver}
                  onChange={onShippingInfoChange}
                />
              }
              label=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shiping;
