'use client';
import { useEffect, useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
// import Layout from '../../components/Layout/Layout';
import { TbFilter } from 'react-icons/tb';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  Checkbox,
} from '@material-tailwind/react';

import Link from 'next/link';
import { Pagination } from '../../components';

const TABS = [
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Draft',
    value: 'draft',
  },
  {
    label: 'Archived',
    value: 'archived',
  },
];

const ProductsData = [
  {
    featuresImage:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481',
    productName: 'MacBook Pro 14 inch M2 2023',
    sku: '#54654637',
    status: 'active',
    inventory: '192 stock for 2 variants',
    category: 'Electronics',
    ratting: '4.50',
  },
  // Add other products here
];

const ProductsList = () => {
  // load product
  const [Products, SetProducts] = useState([]);

  useEffect(() => {
    SetProducts(ProductsData);
  }, []);

  // select items
  const handleSelectItems = e => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      let tempPd = Products.map(pd => {
        return { ...pd, isChecked: checked };
      });
      SetProducts(tempPd);
    } else {
      let tempUser = Products.map(product =>
        product.productName === name
          ? { ...product, isChecked: checked }
          : product
      );

      console.log(tempUser);
      SetProducts(tempUser);
    }
  };

  return (
    <>
      <Card className="h-full px-2 sm:px-5  shadow-none border-none w-full bg-transparent">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none bg-transparent mx-0"
        >
          <div className="mb-9 flex items-center justify-between   w-full gap-8">
            <div>
              <h5 className=" font-semibold text-zing-800 text-xl sm:text-2xl">
                Products List
              </h5>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Link href="/products/add_new">
                <Button
                  className="flex  py-[6px] px-[1.5em] font-semibold text-base capitalize bg-primary items-center gap-3"
                  size="sm"
                >
                  Add Product
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex bg-white flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="active" className="w-full bg-white md:w-max">
              <TabsHeader className=" bg-white p-0">
                {TABS.map(({ label, value }) => (
                  <Tab className=" py-1.5" key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full  flex justify-end md:w-72">
              <Button
                variant="text"
                className="flex  text-zing-800 font-medium items-center justify-end gap-1"
              >
                <TbFilter strokeWidth={2} className="h-5 text-muted w-5" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll bg-white  p-0">
          <table className="mt-0 w-full min-w-max table-auto text-left">
            <thead className=" bg-white  w-full">
              <tr className=" w-full">
                <th className="border-y border-blue-gray-100  p-4">
                  <div className=" flex items-center gap-1">
                    <Checkbox
                      color="green"
                      name="allSelect"
                      checked={!Products.some(user => user?.isChecked !== true)}
                      onChange={handleSelectItems}
                    />
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Product
                    </Typography>
                  </div>
                </th>
                <th className="border-y border-blue-gray-100  p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    SKU
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100  p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Status
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100  p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Inventory
                  </Typography>
                </th>

                <th className="border-y border-blue-gray-100  p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Category
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100  p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Rating
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100  p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Action
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {Products.map((product, index) => {
                const isLast = index === Products.length - 1;
                const classes = isLast
                  ? 'p-4'
                  : 'p-4 border-b border-blue-gray-50';

                return (
                  <tr key={product.productName}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Checkbox
                          onChange={handleSelectItems}
                          color="green"
                          name={product.productName}
                          checked={product?.isChecked || false}
                        />
                        <Avatar
                          src={product.featuresImage}
                          alt={product.productName}
                          variant="rounded"
                          size="md"
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {product.productName}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {product.sku}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={
                            product.status === 'active'
                              ? 'active'
                              : product.status === 'draft'
                              ? 'draft'
                              : 'archived'
                          }
                          color={
                            product.status === 'active'
                              ? 'green'
                              : product.status === 'draft'
                              ? 'amber'
                              : 'red'
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {product.inventory}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {product.category}
                      </Typography>
                    </td>
                    <td className={`${classes} `}>
                      <div className=" flex items-center gap-1">
                        <AiTwotoneStar size={18} />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {product.ratting}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <Pagination />
      </Card>
    </>
  );
};

export default ProductsList;
