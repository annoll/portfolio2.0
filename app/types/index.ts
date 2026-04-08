import { IconType } from "react-icons";

export interface socialLink {
  label: string;
  link: string;
  icon: IconType;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  links: ProjectLinks[];
};

type ProjectLinks = {
  label: string;
  url: string;
  icon: IconType;
};