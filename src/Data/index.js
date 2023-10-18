// icons
import { BiUserCircle } from "react-icons/bi";
import { FaTachometerAlt } from "react-icons/fa";
import { BiSolidBook } from "react-icons/bi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BsInboxFill } from "react-icons/bs";
import { BsFillClockFill } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { BiLogoCreativeCommons } from "react-icons/bi";
import { BiSolidHelpCircle } from "react-icons/bi";

export const links = [
  {
    name: "Account",
    icon: <BiUserCircle style={{ fontSize: "2rem" }} />,
  },
  {
    name: "Dashboard",
    icon: (
      <FaTachometerAlt
        style={{ color: "rgb(211, 12, 12)", fontSize: "2rem" }}
      />
    ),
  },
  {
    name: "Courses",
    icon: (
      <BiSolidBook style={{ color: "rgb(211, 12, 12)", fontSize: "2rem" }} />
    ),
  },
  {
    name: "Calendar",
    icon: (
      <BsFillCalendar2DateFill
        style={{ color: "rgb(211, 12, 12)", fontSize: "2rem" }}
      />
    ),
  },
  {
    name: "Inbox",
    icon: (
      <BsInboxFill style={{ color: "rgb(211, 12, 12)", fontSize: "2rem" }} />
    ),
  },
  {
    name: "History",
    icon: (
      <BsFillClockFill
        style={{ color: "rgb(211, 12, 12)", fontSize: "2rem" }}
      />
    ),
  },
  {
    name: "Studio",
    icon: (
      <BsCameraVideoFill
        style={{ color: "rgb(211, 12, 12)", fontSize: "2rem" }}
      />
    ),
  },
  {
    name: "Commons",
    icon: (
      <BiLogoCreativeCommons
        style={{ color: "rgb(211, 12, 12)", fontSize: "2rem" }}
      />
    ),
  },
  {
    name: "Help",
    icon: (
      <BiSolidHelpCircle
        style={{ color: "rgb(211, 12, 12)", fontSize: "2rem" }}
      />
    ),
  },
];
