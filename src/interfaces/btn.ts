import { SxProps, Theme } from "@mui/material";

export interface btn {
    Title:string | boolean;
    onClick?:() => void;
    sx?: SxProps<Theme>;
}