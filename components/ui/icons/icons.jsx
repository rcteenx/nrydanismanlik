import {
  FaWhatsapp,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaArrowRight,
  FaRegFileAlt,
  FaInfoCircle,
  FaWifi,
  FaStar,
  FaHome,
  FaBlog,
  FaSitemap,
  FaGoogle,
  FaMobileAlt,
  FaRev,
  FaAlignLeft,
} from "react-icons/fa";

import { VscLocation } from "react-icons/vsc";
import { IoMdSchool } from "react-icons/io";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { SiDwavesystems } from "react-icons/si";
import { AiFillCheckCircle } from "react-icons/ai";

const iconTypes = {
  location: VscLocation,
  whatsapp: FaWhatsapp,
  school: IoMdSchool,
  teacher: LiaChalkboardTeacherSolid,
  systemic: SiDwavesystems,
  enegram: AiFillCheckCircle,
  facebook: FaFacebook,
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  arrowright: FaArrowRight,
  regfilealt: FaRegFileAlt,
  infocircle: FaInfoCircle,
  wifi: FaWifi,
  star: FaStar,
  home: FaHome,
  blog: FaBlog,
  sitemap: FaSitemap,
  google: FaGoogle,
  mobilealt: FaMobileAlt,
  rev: FaRev,
  alignleft: FaAlignLeft,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;
