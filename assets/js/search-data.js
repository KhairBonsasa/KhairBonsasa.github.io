// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Professional and Personal Projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-conferences",
          title: "conferences",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-github",
          title: "GitHub",
          description: "My projects published to GitHub",
          section: "Navigation",
          handler: () => {
            window.location.href = "/certificates/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "An overview of my professional background.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-network-lunch-break-with-jack-dangermond",
      
        title: "Network Lunch/Break with Jack Dangermond",
      
      description: "Connecting with all geospatial professionals",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/GeoResolution2023/";
        
      },
    },{id: "post-geospatial-literacy",
      
        title: "Geospatial Literacy",
      
      description: "2023 Geo-Resolution Panelist",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/PanelDiscussion/";
        
      },
    },{id: "post-usgif-2022-geoint-symposium-poster-presenter",
      
        title: "USGIF 2022 GEOINT Symposium Poster Presenter",
      
      description: "Measuring Tree Canopy with GIS",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/GEOINT2022/";
        
      },
    },{id: "projects-arcgis-advisory-tool-for-credit-management",
          title: 'ArcGIS Advisory Tool for Credit Management',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-iphone-to-pdf",
          title: 'Iphone to PDF',
          description: "Idea to expand on",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-radar-volumetric-reconstruction",
          title: 'Radar Volumetric Reconstruction',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%68%62%6F%6E%73%61%73%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/KhairBonsasa", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/khair-bonsasa-384406212/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
