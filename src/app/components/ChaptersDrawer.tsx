import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const drawerWidth = 240;

interface ChaptersDrawerProps {
  activeChapter: string | null;
}

const chapters = [
  "Celula si Organitele Celulare",
  "Respiratia",
  "Tesuturile",
  "Maduva Spinarii",
  "Sistemul Osos",
  "Sistemul Muscular",
];

const toSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/ă/g, "a")
    .replace(/î/g, "i")
    .replace(/ș/g, "s")
    .replace(/ț/g, "t")
    .replace(/,/g, "")
    .replace(/[^a-z0-9-]/g, "");

const ChaptersDrawer: React.FC<ChaptersDrawerProps> = ({ activeChapter }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          top: 0,
          height: "100vh"
        },
      }}
    >
      <Typography variant="h6" sx={{ p: 2, mt:12}}>
        Cuprins
      </Typography>
      <List>
        {chapters.map((chapter, index) => {
          const slug = toSlug(chapter);
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                href={`/biologie-corint/${slug}`}
                sx={{
                  backgroundColor: activeChapter === slug ? "#1976D2" : "transparent",
                  color: activeChapter === slug ? "#fff" : "#000",
                  "&:hover": { backgroundColor: "#1565C0", color: "#fff" },
                }}
              >
                <ListItemText primary={chapter} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default ChaptersDrawer;
