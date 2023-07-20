'use client';
import React, { useState } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { HiOutlineChevronRight, HiOutlineShoppingBag } from 'react-icons/hi';
import { PiScroll } from 'react-icons/pi';
import HomeIcon from '../../assets/icons/dashboard-browsing.svg';
import BagIcon from '../../assets/icons/bag.svg';
import BrandIcon from '../../assets/icons/brand.svg';

// import component 👇
import Drawer from 'react-modern-drawer';

// import styles 👇
import 'react-modern-drawer/dist/index.css';
import Image from 'next/image';

const MobileSidebar = ({ isOpen, toggleDrawer }) => {
  const [open, setOpen] = useState(null);

  const handleOpen = index => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="mobileSidebar"
      >
        <Card className="  overflow-hidden  h-[calc(100vh-0rem)] w-full shadow-none  p-4 bg-main-bg ">
          <List className=" p-0">
            <ListItem>
              <ListItemPrefix>
                <Image width={24} src={HomeIcon} alt="homeIcon" />
              </ListItemPrefix>
              <p className=" text-muted font-normal"> Home</p>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Image width={24} src={BagIcon} alt="BagIcon" />
              </ListItemPrefix>
              <p className=" text-muted font-normal"> Order</p>
            </ListItem>

            <Accordion open={open === 1}>
              <ListItem className="p-0" selected={open === 1}>
                <HiOutlineChevronRight
                  className={`mx-auto w-6 h-6 transition-transform ${
                    open === 1 ? 'rotate-90' : ''
                  }`}
                />
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3   "
                >
                  <ListItemPrefix className=" mr-2 ">
                    <HiOutlineShoppingBag className="h-6 w-6" />
                  </ListItemPrefix>
                  <p className="mr-auto text-sm  text-muted font-normal">
                    Products
                  </p>
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
              <ListItemPrefix>
                <Image
                  width={24}
                  className=" text-primary"
                  src={BrandIcon}
                  alt="BagIcon"
                />
              </ListItemPrefix>
              <p className=" text-muted font-normal"> Brands</p>
            </ListItem>
            <Accordion open={open === 2}>
              <ListItem className="p-0" selected={open === 2}>
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
                    <PiScroll className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="mr-auto text-muted font-normal"
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

            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
};

export default MobileSidebar;
