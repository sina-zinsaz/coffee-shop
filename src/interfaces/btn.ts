import { SxProps, Theme } from "@mui/material";

export interface btn {
    Title:string;
    onClick?:() => void;
    sx?: SxProps<Theme>;
}