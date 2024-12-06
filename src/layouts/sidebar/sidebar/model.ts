import {ReactNode} from "react";
import {ID} from "../../../services/model";

export interface SidebarModel {
    id: ID;
    title: string;
    path: string;
    icon: ReactNode;
    element: ReactNode;
}