'use client';
import React, { useState } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { HiOutlineChevronRight, HiOutlineShoppingBag } from 'react-icons/hi';

import {
  HomeIcon,
  BagIcon,
  BrandIcon,
  ChatArrow,
  scroll,
  discountIcon,
  SettingIcon,
  BillingIcon,
  InvoiceIcon,
  UpLoadIcon,
  GlobalIcon,
} from '../../assets/icons';

export default function MainSidebar() {
  const [open, setOpen] = useState(0);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className=" w-[15rem] xl:block hidden">
      <Card className="fixed top-[3.9rem] left-0 h-[calc(100vh-0rem)] w-full shadow-none max-w-[15rem] p-4 bg-main-bg ">
        <List className=" p-0">
          <ListItem>
            <Link href="/" className=" flex items-center w-full">
              <ListItemPrefix>
                <ReactSVG width={24} src={HomeIcon} />
              </ListItemPrefix>
              <p className=" text-muted font-normal w-full"> Home</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/order" className=" flex items-center w-full">
              <ListItemPrefix>
                <ReactSVG width={24} src={BagIcon} />
              </ListItemPrefix>
              <p className=" text-muted font-normal w-full"> Order</p>
            </Link>
          </ListItem>

          <Accordion open={open === 1}>
            <ListItem
              className="p-0  bg-primary py-0  hover:bg-primary hover:bg-opacity-10 bg-opacity-10 "
              selected={open === 1}
            >
              <HiOutlineChevronRight
                className={`mx-auto w-5 h-5 text-muted transition-transform ${
                  open === 1 ? 'rotate-90' : ''
                }`}
              />
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3 h-[2.5625em]     "
              >
                <span className=" block mr-1 ">
                  <HiOutlineShoppingBag size={20} className=" text-muted w-6" />
                </span>
                <span className="mr-auto text-sm  font-normal">Products</span>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <Link href="/products" className=" w-full">
                    All Products
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/products/add_new" className=" w-full">
                    Add Product
                  </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <ListItem>
            <Link href="/brand" className=" flex items-center w-full">
              <ListItemPrefix>
                <ReactSVG
                  width={24}
                  className=" text-primary"
                  src={BrandIcon}
                />
              </ListItemPrefix>
              <p className=" text-muted font-normal w-full"> Brands</p>
            </Link>
          </ListItem>
          <Accordion open={open === 2}>
            <ListItem className="p-0" selected={open === 1}>
              <HiOutlineChevronRight
                className={`mx-auto text-muted w-6 h-6 transition-transform ${
                  open === 2 ? 'rotate-90' : ''
                }`}
              />
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <ReactSVG src={scroll} />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto text-muted font-normal w-full"
                >
                  Categories
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Add New
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Delete
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <ListItem>
            <Link href="/analytics" className=" flex items-center w-full">
              <ListItemPrefix>
                <ReactSVG width={24} src={ChatArrow} />
              </ListItemPrefix>
              <p className=" text-muted font-normal w-full">Analytics</p>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="discound" className=" flex items-center w-full">
              <ListItemPrefix>
                <ReactSVG width={24} src={discountIcon} />
              </ListItemPrefix>
              <p className=" text-muted font-normal w-full">Discount</p>
            </Link>
          </ListItem>

          <div className=" pt-6 ">
            <h4 className=" pb-3 text-neutral-600 text-lg font-normal">
              System options
            </h4>

            <ListItem>
              <Link href="/settings" className=" flex items-center w-full">
                <ListItemPrefix>
                  <ReactSVG width={24} src={SettingIcon} />
                </ListItemPrefix>
                <p className=" text-muted font-normal w-full">Settings</p>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/billing" className=" flex items-center w-full">
                <ListItemPrefix>
                  <ReactSVG width={24} src={BillingIcon} />
                </ListItemPrefix>
                <p className=" text-muted font-normal w-full">Billing</p>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/intergrations" className=" flex items-center w-full">
                <ListItemPrefix>
                  <ReactSVG width={24} src={InvoiceIcon} />
                </ListItemPrefix>
                <p className=" text-muted font-normal w-full">Integrations</p>
              </Link>
            </ListItem>
            <ListItem className="">
              <Link className=" flex items-center w-full" href="/upgrade">
                <ListItemPrefix>
                  <ReactSVG width={24} src={UpLoadIcon} />
                </ListItemPrefix>
                <p className=" text-muted font-normal w-full">Upgrade</p>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/global" className=" flex items-center w-full">
                <ListItemPrefix>
                  <ReactSVG width={24} src={GlobalIcon} />
                </ListItemPrefix>
                <p className=" text-muted font-normal w-full">Global</p>
              </Link>
            </ListItem>
          </div>
        </List>
      </Card>
    </div>
  );
}
