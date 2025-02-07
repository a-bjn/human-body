import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";


const drawerWidth = 300;

interface ChaptersDrawerProps {
  activeChapter: string | null;
}

const toSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/\d+/g, "")
    .replace(/\s+/g, "-")
    .replace(/ă/g, "a")
    .replace(/î/g, "i")
    .replace(/ș/g, "s")
    .replace(/ț/g, "t")
    .replace(/,/g, "")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-+/, "")
    .replace(/-+$/, "");



const chapters = [
  {
    title: "1. Celula si Organitele Celulare",
    subchapters: ["1.1 Celula", "1.2 Dimensiunile celulelor", "1.3 Structura celulei"],
  },
  {
    title: "2. Respiratia",
    subchapters: ["2.1 Plamanii", "2.2 Ventilatia pulmonara", "2.3 Volume si capacitati pulmonare", "2.4 Difuziunea", "2.5 Transportul gazelor", "2.6 Notiuni elementare de igiena si patologie"],
  },
  {
    title: "3. Tesuturile",
    subchapters: ["3.1 Tesut epitelial", "3.2 Tesut conjunctiv", "3.3 Tesut muscular", "3.4 Tesut nervos"],
  },
  {
    title: "4. Maduva Spinarii",
  },
  {
    title: "5. Sistemul Osos",
    subchapters: ["Oasele Corpului", "Structura Osului"],
  },
  {
    title: "6. Sistemul Muscular",
    subchapters: ["Tipuri de Muschi", "Functii Musculare"],
  },
];

const ChaptersDrawer: React.FC<ChaptersDrawerProps> = ({ activeChapter }) => {
  
  const handleNavigation = (chapterSlug: string, sectionSlug?: string) => {
  const newUrl = sectionSlug 
    ? `/biologie-corint/${chapterSlug}#${sectionSlug}`
    : `/biologie-corint/${chapterSlug}`;
  
  window.location.href = newUrl;

  setTimeout(() => {
    const element = document.getElementById(sectionSlug || chapterSlug);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  });
};


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
          height: "100vh",
        },
      }}
    >
      <Typography variant="h6" sx={{ p: 2, mt: 12 }}>
        Capitole
      </Typography>
      <List>
        {chapters.map((chapter, index) => {
          const chapterSlug = toSlug(chapter.title);
          return (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleNavigation(chapterSlug)}
                  sx={{
                    backgroundColor: activeChapter === chapterSlug ? "#1976D2" : "transparent",
                    color: activeChapter === chapterSlug ? "#fff" : "#000",
                    "&:hover": { backgroundColor: "#1565C0", color: "#fff" },
                  }}
                >
                  <ListItemText primary={chapter.title} />
                </ListItemButton>
              </ListItem>
              {chapter.subchapters &&
                chapter.subchapters.map((subchapter, subIndex) => {
                  const subSlug = toSlug(subchapter);
                  return (
                    <ListItem key={subIndex} disablePadding sx={{ pl: 2 }}>
                      <ListItemButton
                        onClick={() => handleNavigation(chapterSlug, subSlug)}
                        sx={{
                          backgroundColor: activeChapter === subSlug ? "#2196F3" : "transparent",
                          color: activeChapter === subSlug ? "#fff" : "#000",
                          "&:hover": { backgroundColor: "#1E88E5", color: "#fff" },
                        }}
                      >
                        <ListItemText primary={`${subchapter}`} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
            </React.Fragment>
          );
        })}
      </List>
    </Drawer>
  );
};

export default ChaptersDrawer;
