'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';
import {
  LabeledInput,
  Shiping,
  Specification,
  Status,
  Uploader,
  Variants,
  Brand,
  Category,
} from '../../../components';

import { Button } from '@material-tailwind/react';
import dynamic from 'next/dynamic';
import Layout from '../../../components/Layout';

const AddNewProduct = () => {
  const [products, setProducts] = useState([]);
  const [isOpenSpecifations, setIsOpenSpecifations] = useState(false);
  // **************** specification handler start ****************
  const [specification, setSpecification] = useState([]);

  const [inputSpecificationValues, setSpecificationInputValues] = useState({
    specificationName: '',
    description: '',
  });

  const handleSpecificationInputChange = event => {
    setSpecificationInputValues({
      ...inputSpecificationValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddSpecification = () => {
    if (inputSpecificationValues.specificationName.trim() !== '') {
      const newSpecification = {
        specificationName: inputSpecificationValues.specificationName,
        description: inputSpecificationValues.description,
      };
      setSpecification([...specification, newSpecification]);
      setSpecificationInputValues({
        specificationName: '',
        description: '',
      });
    }
  };
  const handleDeleteSpecification = index => {
    const updatedSpecification = [...specification];
    updatedSpecification.splice(index, 1);
    setSpecification(updatedSpecification);
  };

  // ************* specification handler end *****************

  // Shiping
  const [shipping, setShipping] = useState({
    weight: '',
    shippingDays: '',
    cashOnDeliver: false,
  });

  const handleShipingInputChange = event => {
    const { name, value } = event.target;
    setShipping(prevShippingInfo => ({
      ...prevShippingInfo,
      cashOnDeliver: !prevShippingInfo.cashOnDeliver,
      [name]: value,
    }));
  };

  // add product main handeler
  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    status: 'low',
    dueDate: '',
    cashOnDelivert: false,
    media: '',
    shiping: {},
    brand: '',
    category: '',
    tags: [],
    variants: [],
    specification: [],
  });

  const handleInputChange = event => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setInputValues({ ...inputValues, [name]: checked });
    } else {
      setInputValues({ ...inputValues, [name]: value });
    }
  };
  const handleAddProduct = event => {
    event.preventDefault();

    const newProduct = {
      ...inputValues,
      specification,
      shipping,
    };

    setProducts([...products, newProduct]);
    // setInputValues({
    //   title: '',
    //   description: '',
    //   status: 'low',
    //   dueDate: '',
    //   cashOnDelivery: false,
    //   media: '',
    //   shipping: {},
    //   brand: '',
    //   category: '',
    //   tags: [],
    //   variants: [],
    //   specification: [],
    // });
  };

  console.log(products, 'tarif');
  return (
    <Layout>
      <form onSubmit={handleAddProduct} className=" pb-5 px-2 sm:px-5 ">
        <div className=" space-y-3 py-5 sm:py-8">
          <Link
            href="/products"
            className="flex px-0 text-muted  items-center gap-2"
          >
            <BsArrowLeft className="h-5 w-5" />
            <span className=" text-neutral-400 font-normal text-sm">
              Back to product
            </span>
          </Link>
          <h5 className="text-zinc-800 text-2xl font-semibold">Add Product</h5>
        </div>

        <div className=" flex flex-col overflow-hidden md:flex-row gap-10">
          <div className="basis-[70%] space-y-5 ">
            <div className=" space-y-5 rounded-lg border border-border-subdued bg-white p-5">
              <LabeledInput
                label={'title'}
                type="text"
                id="title"
                name="title"
                value={inputValues.title}
                onChange={handleInputChange}
                placeholder="Enter a title"
              />
              <div className=" flex  space-y-2 flex-col">
                <label
                  htmlFor="description"
                  className=" text-neutral-400 text-base capitalize font-normal leading-tight"
                >
                  description
                </label>
                <textarea
                  className="bg-white placeholder:text-neutral-900  text-13px text-neutral-900 py-2 px-3 focus:outline-none border-2 border-border-main rounded-md"
                  id="description"
                  name="description"
                  value={inputValues.description}
                  onChange={handleInputChange}
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              {/* Specification */}
              <Specification
                inputSpecificationValues={inputSpecificationValues}
                setIsOpenSpecifations={setIsOpenSpecifations}
                isOpenSpecifations={isOpenSpecifations}
                handleSpecificationInputChange={handleSpecificationInputChange}
                handleAddSpecification={handleAddSpecification}
                specification={specification}
                handleDeleteSpecification={handleDeleteSpecification}
              />
            </div>
            {/* Variants */}
            <Variants />
            {/* === *****Shiping ******** */}
            <Shiping
              shippingInfo={shipping}
              handleShipingInputChange={handleShipingInputChange}
            />
            {/* ===**** Media Uploader ===*****/}
            <Uploader />
          </div>
          <div className=" basis-[30%] ">
            <div className="rounded-lg border bg-white border-border-subdued  p-5">
              {/* Status */}
              <Status />
            </div>
            <div className=" grid grid-cols-2 gap-3">
              <button className=" input">Preview</button>
              <Button type="submit" variant="gradient" className="">
                add
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(AddNewProduct), { ssr: false });
