"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

function ThemeSwitcher(){
    const {theme, setTheme} = useTheme();




    return (
        <div><Button className="cursor-pointer" onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? <Moon /> : <Sun />}</Button></div>
    )
}


export { ThemeSwitcher}